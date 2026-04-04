import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "Platform", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Results", href: "/case-study" },
    { label: "Pilot", href: "/pilot" },
  ];

  return (
    <footer className="bg-primary/10 text-foreground/70">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: About */}
          <div>
            <div className="mb-4">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-sans text-xl font-black tracking-tighter text-foreground uppercase"
                style={{
                  fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                LUMIQ AI
              </Link>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-foreground/60">
              Same-day credit decisions for commercial lending. 83ms. 7 intelligence outputs. $600K pilot.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-xl sm:text-2xl font-heading text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-foreground/60 transition-colors duration-150 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-xl sm:text-2xl font-heading text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm font-medium text-foreground/60">
              <li className="flex items-start gap-2">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0"
                />
                <a
                  href="mailto:support@futeurcredx.com"
                  className="hover:text-primary transition-colors duration-150"
                >
                  support@futeurcredx.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10 bg-primary/3">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-foreground/50 md:flex-row">
          <p>
            © {currentYear} LUMIQ AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="transition-colors duration-150 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition-colors duration-150 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

