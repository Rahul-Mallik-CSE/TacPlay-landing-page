/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="mt-12 bg-transparent py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: Logo + Tagline centered */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/Tacplay-logo-2.png"
              alt="Tacplay"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>

          <p className="max-w-xl text-sm text-secondary">
            Bringing together players and field owners to create a stronger,
            more competitive paintball community through technology-driven
            solutions and seamless experiences
          </p>
        </div>

        {/* Nav links centered */}
        <nav className="mt-8 flex flex-wrap justify-center gap-8">
          <Link href="#home" className="text-secondary hover:text-primary">
            Home
          </Link>
          <Link href="#features" className="text-secondary hover:text-primary">
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
          <Link href="#contact" className="text-secondary hover:text-primary">
            Contact Us
          </Link>
        </nav>

        {/* Divider */}
        <div className="mt-10 border-t border-background/60" />

        {/* Bottom row: copyright left, legal links right */}
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-secondary">
            © 2026 TACPLAY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-secondary underline hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-secondary underline hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-secondary underline hover:text-primary"
            >
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
