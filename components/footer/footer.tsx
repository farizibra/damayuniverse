import { Crown, Instagram, Twitter, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-midnight/95 text-silver border-t border-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Crown className="h-8 w-8 text-gold icon-glow" />
              <span className="text-2xl font-bold text-slate-100 leading-tight">
                DAMAY
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}
                  UNIVERSE
                </span>
              </span>
            </div>
            {/* <p className="text-silver-dark mb-4 max-w-md">
              An exclusive community where loyalty, respect, and brotherhood
              define our legacy. Join the family and become part of something
              greater.
            </p> */}
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-silver-dark hover:text-gold transition-colors hover:scale-110 transform"
              >
                <Instagram className="h-7 w-7 hover:icon-glow-soft" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-gold font-display">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-silver-dark hover:text-silver transition-colors hover:translate-x-1 transform inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#members"
                  className="text-silver-dark hover:text-silver transition-colors hover:translate-x-1 transform inline-block"
                >
                  Members
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-silver-dark hover:text-silver transition-colors hover:translate-x-1 transform inline-block"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#rules"
                  className="text-silver-dark hover:text-silver transition-colors hover:translate-x-1 transform inline-block"
                >
                  Code of Honor
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient-gold font-display">
              Contact
            </h3>
            <ul className="space-y-2 text-silver-dark">
              <li>Email: damaysk@gmail.com</li>
              <li>
                Instagram:{" "}
                <a
                  href="https://instagram.com/damaysk_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold underline"
                >
                  @damaysk_
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-silver-dark">
            ©2025 <a href="https://damayuniverse.com">DamayUniverse</a>. All
            rights reserved.
          </p>
          <p className="text-silver-dark hidden sm:block">
            Created by:{" "}
            <a href="https://aizsz.damayuniverse.com">Fariz ibra pahlawan</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
