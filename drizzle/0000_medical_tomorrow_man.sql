CREATE TYPE "public"."contact_inquiry_type" AS ENUM('Candidate support', 'Employer inquiry', 'Opportunity question', 'Verification request');--> statement-breakpoint
CREATE TYPE "public"."contact_submission_status" AS ENUM('new', 'reviewed', 'replied', 'archived');--> statement-breakpoint
CREATE TYPE "public"."opportunity_category" AS ENUM('security', 'transport', 'hospitality', 'construction', 'healthcare', 'retail');--> statement-breakpoint
CREATE TYPE "public"."opportunity_status" AS ENUM('active', 'upcoming', 'closed', 'draft');--> statement-breakpoint
CREATE TYPE "public"."registration_status" AS ENUM('new', 'confirmed', 'shortlisted', 'no-show', 'placed');--> statement-breakpoint
CREATE TYPE "public"."slot_status" AS ENUM('open', 'full', 'closed');--> statement-breakpoint
CREATE TABLE "admin_users" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"role" text DEFAULT 'admin' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "candidate_registrations" (
	"id" text PRIMARY KEY NOT NULL,
	"reference" text NOT NULL,
	"opportunity_id" text NOT NULL,
	"slot_id" text NOT NULL,
	"venue_id" text NOT NULL,
	"full_name" text NOT NULL,
	"phone" text NOT NULL,
	"district" text NOT NULL,
	"email" text,
	"age_band" text NOT NULL,
	"education" text NOT NULL,
	"category" "opportunity_category" NOT NULL,
	"years_of_experience" text NOT NULL,
	"passport_status" text NOT NULL,
	"preferred_country" text NOT NULL,
	"notes" text,
	"document_original_filename" text,
	"document_secure_url" text,
	"document_public_id" text,
	"document_mime_type" text,
	"document_uploaded_at" timestamp with time zone,
	"status" "registration_status" DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contact_submissions" (
	"id" text PRIMARY KEY NOT NULL,
	"full_name" text NOT NULL,
	"phone" text NOT NULL,
	"email" text,
	"inquiry_type" "contact_inquiry_type" NOT NULL,
	"subject" text,
	"message" text NOT NULL,
	"registration_reference" text,
	"status" "contact_submission_status" DEFAULT 'new' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "interview_slots" (
	"id" text PRIMARY KEY NOT NULL,
	"opportunity_id" text NOT NULL,
	"venue_id" text NOT NULL,
	"venue_name" text NOT NULL,
	"venue_city" text NOT NULL,
	"venue_region" text NOT NULL,
	"venue_address" text NOT NULL,
	"venue_map_url" text NOT NULL,
	"venue_notes" text NOT NULL,
	"date" date NOT NULL,
	"start_time" text NOT NULL,
	"end_time" text NOT NULL,
	"capacity" integer NOT NULL,
	"note" text NOT NULL,
	"status" "slot_status" DEFAULT 'open' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "opportunities" (
	"id" text PRIMARY KEY NOT NULL,
	"slug" text NOT NULL,
	"title" text NOT NULL,
	"category" "opportunity_category" NOT NULL,
	"status" "opportunity_status" DEFAULT 'draft' NOT NULL,
	"featured" boolean DEFAULT false NOT NULL,
	"summary" text NOT NULL,
	"destination_country" text NOT NULL,
	"destination_city" text NOT NULL,
	"employer" text NOT NULL,
	"openings_count" integer NOT NULL,
	"salary_range" text NOT NULL,
	"contract_duration" text NOT NULL,
	"closing_date" date NOT NULL,
	"posted_date" date NOT NULL,
	"benefits" text[] DEFAULT '{}'::text[] NOT NULL,
	"requirements" text[] DEFAULT '{}'::text[] NOT NULL,
	"documents" text[] DEFAULT '{}'::text[] NOT NULL,
	"process_highlights" text[] DEFAULT '{}'::text[] NOT NULL,
	"interview_regions" text[] DEFAULT '{}'::text[] NOT NULL,
	"visa_support" text NOT NULL,
	"accommodation" text NOT NULL,
	"transport" text NOT NULL,
	"fee_policy" text NOT NULL,
	"trust_note" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "candidate_registrations" ADD CONSTRAINT "candidate_registrations_opportunity_id_opportunities_id_fk" FOREIGN KEY ("opportunity_id") REFERENCES "public"."opportunities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "candidate_registrations" ADD CONSTRAINT "candidate_registrations_slot_id_interview_slots_id_fk" FOREIGN KEY ("slot_id") REFERENCES "public"."interview_slots"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "interview_slots" ADD CONSTRAINT "interview_slots_opportunity_id_opportunities_id_fk" FOREIGN KEY ("opportunity_id") REFERENCES "public"."opportunities"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "admin_users_email_idx" ON "admin_users" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX "candidate_registrations_reference_idx" ON "candidate_registrations" USING btree ("reference");--> statement-breakpoint
CREATE INDEX "candidate_registrations_opportunity_idx" ON "candidate_registrations" USING btree ("opportunity_id");--> statement-breakpoint
CREATE INDEX "candidate_registrations_slot_idx" ON "candidate_registrations" USING btree ("slot_id");--> statement-breakpoint
CREATE INDEX "candidate_registrations_status_idx" ON "candidate_registrations" USING btree ("status");--> statement-breakpoint
CREATE INDEX "contact_submissions_status_idx" ON "contact_submissions" USING btree ("status");--> statement-breakpoint
CREATE INDEX "contact_submissions_created_at_idx" ON "contact_submissions" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "interview_slots_opportunity_idx" ON "interview_slots" USING btree ("opportunity_id");--> statement-breakpoint
CREATE INDEX "interview_slots_status_idx" ON "interview_slots" USING btree ("status");--> statement-breakpoint
CREATE UNIQUE INDEX "opportunities_slug_idx" ON "opportunities" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "opportunities_status_idx" ON "opportunities" USING btree ("status");