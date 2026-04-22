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
      ? "h-12 rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/92"
      : tone === "accent"
        ? "h-12 rounded-full bg-secondary px-6 text-secondary-foreground hover:bg-secondary/90"
        : tone === "light"
          ? "h-12 rounded-full border border-black/10 bg-white px-6 text-primary hover:bg-[hsl(var(--muted))]"
          : "h-12 rounded-full border border-current/15 bg-transparent px-6 text-current hover:bg-white/10"

  const Icon = icon === "arrow-up-right" ? ArrowUpRight : ArrowRight
  const iconNode =
    icon === "none" ? null : (
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5",
          tone === "accent"
            ? "bg-primary text-primary-foreground"
            : tone === "dark"
              ? "bg-secondary text-secondary-foreground"
              : tone === "ghost"
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
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
        "group inline-flex h-12 items-center gap-3 rounded-full text-sm font-semibold shadow-none transition-all duration-200 hover:-translate-y-0.5",
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
        "group inline-flex items-center gap-3 text-sm font-semibold shadow-none transition-all duration-200 hover:-translate-y-0.5",
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
        "flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-transform duration-200 group-hover:scale-[1.04]",
        className
      )}
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  )
}
