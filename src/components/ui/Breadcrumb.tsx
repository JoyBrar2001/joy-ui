import { ComponentPropsWithoutRef, forwardRef } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/utils";

export const Breadcrumb = forwardRef<HTMLElement, ComponentPropsWithoutRef<"nav">>(
  ({ className, children, ...props }, ref) => (
    <nav ref={ref} aria-label="Breadcrumb" className={cn("w-full", className)} {...props}>
      {children}
    </nav>
  )
);
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = forwardRef<HTMLOListElement, ComponentPropsWithoutRef<"ol">>(
  ({ className, children, ...props }, ref) => (
    <ol ref={ref} className={cn("flex flex-wrap items-center gap-1.5 text-sm text-neutral-500", className)} {...props}>
      {children}
    </ol>
  )
);
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbEntry = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<"li">>(
  ({ className, children, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props}>
      {children}
    </li>
  )
);
BreadcrumbEntry.displayName = "BreadcrumbEntry";

export const BreadcrumbLink = forwardRef<HTMLAnchorElement, ComponentPropsWithoutRef<"a">>(
  ({ className, children, ...props }, ref) => (
    <a ref={ref} className={cn("transition-colors hover:text-neutral-950 dark:hover:text-white", className)} {...props}>
      {children}
    </a>
  )
);
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbCurrent = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<"span">>(
  ({ className, children, ...props }, ref) => (
    <span ref={ref} aria-current="page" className={cn("font-medium text-neutral-950 dark:text-white", className)} {...props}>
      {children}
    </span>
  )
);
BreadcrumbCurrent.displayName = "BreadcrumbCurrent";

export const BreadcrumbSeparator = forwardRef<HTMLLIElement, ComponentPropsWithoutRef<"li">>(
  ({ className, children, ...props }, ref) => (
    <li ref={ref} role="presentation" aria-hidden="true" className={cn("inline-flex items-center text-neutral-400", className)} {...props}>
      {children ?? <ChevronRight className="size-4" />}
    </li>
  )
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// Title-case aliases make the API forgiving while Breadcrumb remains the canonical export.
export const BreadCrumb = Breadcrumb;
export const BreadCrumbEntry = BreadcrumbEntry;
export const BreadCrumbSeparator = BreadcrumbSeparator;
