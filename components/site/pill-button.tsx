import * as React from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PillButtonProps = ButtonProps & {
  tone?: "dark" | "accent" | "light" | "ghost"
  icon?: "arrow-right" | "arrow-up-right" | "none"
}

export function PillButton({
  children,
  className,
  tone = "dark",
  icon = "arrow-right",
  asChild = false,
  ...props
}: PillButtonProps) {
  const toneClasses =
    tone === "dark"
      ? "h-11 rounded-md border border-primary bg-primary px-4 text-primary-foreground hover:bg-primary/92"
      : tone === "accent"
        ? "h-11 rounded-md border border-transparent bg-accent px-4 text-accent-foreground hover:bg-accent/90"
        : tone === "light"
          ? "h-11 rounded-md border border-input bg-background px-4 text-foreground hover:bg-muted"
          : "h-11 rounded-md border border-current/15 bg-transparent px-4 text-current hover:bg-background/10"

  const Icon = icon === "arrow-up-right" ? ArrowUpRight : ArrowRight
  const iconNode =
    icon === "none" ? null : (
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-sm transition-transform duration-150 group-hover:translate-x-0.5",
          tone === "accent"
            ? "bg-background/20 text-accent-foreground"
            : tone === "dark"
              ? "bg-secondary text-secondary-foreground"
              : tone === "ghost"
                ? "bg-current/10 text-current"
                : "bg-primary/10 text-primary"
        )}
      >
        <Icon className="h-3.5 w-3.5" />
      </span>
    )

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>
    return React.cloneElement(child, {
      ...props,
      className: cn(
        "group inline-flex items-center gap-3 text-sm font-semibold shadow-none transition-[background-color,color,border-color,box-shadow] duration-150 ease-out",
        toneClasses,
        className,
        child.props.className
      ),
      children: (
        <>
          {child.props.children}
          {iconNode}
        </>
      ),
    })
  }

  return (
    <Button
      asChild={false}
      className={cn(
        "group inline-flex items-center gap-3 text-sm font-semibold shadow-none transition-[background-color,color,border-color,box-shadow] duration-150 ease-out",
        toneClasses,
        className
      )}
      {...props}
    >
      {children}
      {iconNode}
    </Button>
  )
}

type IconCircleButtonProps = {
  className?: string
}

export function IconCircleButton({ className }: IconCircleButtonProps) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-foreground transition-colors duration-150 group-hover:bg-secondary",
        className
      )}
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  )
}
