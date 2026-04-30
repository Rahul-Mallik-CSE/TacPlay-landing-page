/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-12 border-t border-background/60 bg-transparent py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex w-full flex-col items-center gap-4 md:items-start md:w-1/3">
            <Link href="#home" className="flex items-center gap-3">
              <Image
                src="/Tacplay-logo-2.png"
                alt="Tacplay"
                width={140}
                height={40}
                className="object-contain"
              />
            </Link>

            <p className="max-w-sm text-center text-sm text-secondary md:text-left">
              Bringing together players and field owners to create a stronger,
              more competitive paintball community through technology-driven
              solutions and seamless experiences.
            </p>
          </div>

          <div className="flex w-full justify-center md:w-1/3">
            <nav className="flex gap-6">
              <Link href="#home" className="text-secondary hover:text-primary">
                Home
              </Link>
              <Link
                href="#features"
                className="text-secondary hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-secondary hover:text-primary"
              >
                How it works
              </Link>
              <Link href="#about" className="text-secondary hover:text-primary">
                About
              </Link>
              <Link
                href="#contact"
                className="text-secondary hover:text-primary"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="flex w-full flex-col items-center gap-3 md:items-end md:w-1/3">
            <p className="text-sm text-secondary">
              © 2026 TACPLAY. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-secondary hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-secondary hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
