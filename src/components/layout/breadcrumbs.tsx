import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/components/seo/breadcrumb-jsonld";

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Migas de pan" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-dark/75">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5" />}
              {isLast ? (
                <span className="font-medium text-brand-dark" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-brand-green">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
