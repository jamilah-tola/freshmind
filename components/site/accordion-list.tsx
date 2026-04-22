"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

type AccordionListItem = {
  title: string
  body: string
}

type AccordionListProps = {
  items: AccordionListItem[]
  inverse?: boolean
  className?: string
}

export function AccordionList({
  items,
  inverse = false,
  className,
}: AccordionListProps) {
  return (
    <Accordion type="single" collapsible className={cn("w-full", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          value={`item-${index}`}
          className={cn(
            "border-b",
            inverse ? "border-primary-foreground/12" : "border-black/8"
          )}
        >
          <AccordionTrigger
            className={cn(
              "py-6 text-left text-lg font-semibold tracking-[-0.02em] hover:no-underline",
              inverse ? "text-primary-foreground" : "text-foreground"
            )}
          >
            {item.title}
          </AccordionTrigger>
          <AccordionContent
            className={cn(
              "max-w-[48ch] pb-6 text-sm leading-7",
              inverse ? "text-primary-foreground/72" : "text-muted-foreground"
            )}
          >
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
