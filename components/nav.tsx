"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "@/lib/paths";

const leftLinks = [
  ["/surrogacy", "代孕"],
  ["/egg-donation", "卵子捐赠"],
  ["/how-it-works", "流程"],
  ["/donors", "捐赠者库"]
];

const rightLinks = [
  ["/stories", "案例"],
  ["/about", "关于"],
  ["/faq", "FAQ"]
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link className={`nav-link${active ? " is-active" : ""}`} href={href}>
      {label}
    </Link>
  );
}

export function Nav() {
  return (
    <nav className="nav">
      <div className="container-wide">
        <div className="nav-left">
          {leftLinks.map(([href, label]) => (
            <NavLink href={href} key={href} label={label} />
          ))}
        </div>
        <Link className="nav-brand" href="/" aria-label="Babiology home">
          <Image src={withBasePath("/assets/logo.png")} alt="" width={36} height={36} priority />
          <span className="name">Babiology</span>
        </Link>
        <div className="nav-right">
          {rightLinks.map(([href, label]) => (
            <NavLink href={href} key={href} label={label} />
          ))}
          <Link className="nav-cta" href="/contact">
            预约咨询
          </Link>
        </div>
      </div>
    </nav>
  );
}
