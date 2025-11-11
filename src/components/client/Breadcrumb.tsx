import Link from "next/link";
interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-5">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className={`hover:text-blue-700 ${
                item.href ? "text-blue-500 font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-gray-800">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-400">/</span>
          )}
        </li>
      ))}
    </ul>
  );
}
