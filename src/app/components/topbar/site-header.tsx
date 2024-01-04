import { siteConfig } from "@/app/config/site";
import { MainNav } from "./main-nav";
import './main-nav.css'

export function SiteHeader() {
  return (
    <header className="site-header">
        <div>
          <MainNav items={siteConfig.mainNav} />
        </div>
    </header>
  );
}
