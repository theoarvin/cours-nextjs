import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}
