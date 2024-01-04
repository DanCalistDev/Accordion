import Link from "next/link"
import { siteConfig } from "@/app/config/site"
import { NavItem } from "@/app/types/nav"
import './main-nav.css'


interface MainNavProps {
    items?: NavItem[]
  }
  

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="nav">
      <Link href="/" className="nav-link">
        <span>{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="nav">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
