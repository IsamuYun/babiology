"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { withBasePath } from "@/lib/paths";

type NavItem = {
  href: string;
  label: string;
};

const leftLinks: NavItem[] = [
  { href: "/surrogacy", label: "代孕" },
  { href: "/egg-donation", label: "卵子捐赠" },
  { href: "/how-it-works", label: "流程" },
  { href: "/donors", label: "捐赠者库" }
];

const rightLinks: NavItem[] = [
  { href: "/stories", label: "案例" },
  { href: "/about", label: "关于" },
  { href: "/faq", label: "FAQ" }
];

function NavBarLink({ href, label }: NavItem) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link className={`nav-link${active ? " is-active" : ""}`} href={href}>
      {label}
    </Link>
  );
}

export function NavBar() {
  return (
    <nav className="nav">
      <div className="container-wide">
        <div className="nav-left">
          {leftLinks.map((item) => (
            <NavBarLink {...item} key={item.href} />
          ))}
        </div>

        <Link className="nav-brand" href="/" aria-label="Babiology home">
          <Image src={withBasePath("/assets/logo.png")} alt="" width={72} height={72} priority />
          <span className="name">Babiology</span>
        </Link>

        <div className="nav-right">
          {rightLinks.map((item) => (
            <NavBarLink {...item} key={item.href} />
          ))}
          <Link className="nav-cta" href="/contact">
            预约咨询
          </Link>
        </div>
      </div>
    </nav>
  );
}
