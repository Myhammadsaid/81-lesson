"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav>
            <Link href={"/"}>
              <Image src={Logo} width={140} height={28} alt="header-logo" />
            </Link>
            <div className="nav-links">
              <Link className="nav-link" href={"/"}>
                Home
              </Link>
              <Link className="nav-link" href={"/category"}>
                Category
              </Link>
              <Link className="nav-link" href={"/about"}>
                About
              </Link>
              <Link className="nav-link" href={"/account"}>
                Account
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
