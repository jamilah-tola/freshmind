import { z } from "zod"

import {
  ageBands,
  contactInquiryTypes,
  contactSubmissionStatuses,
  educationLevels,
  opportunityCategories,
  opportunityStatuses,
  passportStatuses,
  registrationStatuses,
} from "@/lib/freshmind/types"

export const documentAssetSchema = z.object({
  originalFilename: z.string().min(1),
  secureUrl: z.string().url(),
  publicId: z.string().min(1),
  mimeType: z.string().min(1),
  uploadedAt: z.string().min(1),
})

export const publicRegistrationSchema = z.object({
  openingId: z.string().min(1),
  slotId: z.string().min(1),
  venueId: z.string().optional(),
  fullName: z.string().min(3),
  phone: z.string().min(9),
  district: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  ageBand: z.enum(ageBands),
  education: z.enum(educationLevels),
  category: z.enum(opportunityCategories),
  yearsOfExperience: z.string().min(1),
  passportStatus: z.enum(passportStatuses),
  preferredCountry: z.string().min(2),
  notes: z.string().optional().or(z.literal("")),
  document: documentAssetSchema.optional().nullable(),
})

export const contactSubmissionSchema = z.object({
  fullName: z.string().min(3),
  phone: z.string().min(9),
  email: z.string().email().optional().or(z.literal("")),
  inquiryType: z.enum(contactInquiryTypes),
  subject: z.string().optional().or(z.literal("")),
  message: z.string().min(1),
  registrationReference: z.string().optional().or(z.literal("")),
})

export const opportunitySchema = z.object({
  title: z.string().min(4),
  category: z.enum(opportunityCategories),
  summary: z.string().min(10),
  destinationCountry: z.string().min(2),
  destinationCity: z.string().min(2),
  employer: z.string().min(2),
  salaryRange: z.string().min(2),
  openingsCount: z.coerce.number().int().positive(),
  closingDate: z.string().min(8),
  benefits: z.array(z.string()).default([]),
  requirements: z.array(z.string()).default([]),
  documents: z.array(z.string()).default([]),
})

export const opportunityUpdateSchema = z
  .object({
    status: z.enum(opportunityStatuses).optional(),
    featured: z.boolean().optional(),
    summary: z.string().min(10).optional(),
    closingDate: z.string().min(8).optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "At least one opportunity field must be provided.",
  })

export const slotSchema = z.object({
  venueId: z.string().min(1),
  date: z.string().min(8),
  startTime: z.string().min(4),
  endTime: z.string().min(4),
  capacity: z.coerce.number().int().positive(),
  note: z.string().min(2),
})

export const registrationStatusSchema = z.object({
  status: z.enum(registrationStatuses),
})

export const contactSubmissionStatusSchema = z.object({
  status: z.enum(contactSubmissionStatuses),
})

export const cloudinarySignRequestSchema = z.object({
  filename: z.string().min(1).optional(),
  mimeType: z.string().min(1).optional(),
})
