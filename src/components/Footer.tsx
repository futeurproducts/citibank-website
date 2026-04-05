import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="h-auto max-w-full relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full border-t border-border"
      style={{ backgroundColor: "hsl(var(--background-secondary, var(--background)))" }}
    >
      <footer>
        <div className="container mx-auto max-w-[1400px]">
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {/* LumiqAI for Citi */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                LumiqAI for Citi
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/case-study" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Results
                  </Link>
                </li>
                <li>
                  <Link to="/pilot" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Pilot
                  </Link>
                </li>
              </ul>
              <a
                href="https://institutions.futeurcredx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Learn more about LumiqAI
              </a>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Developers
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://docs.futeurcredx.com/quickstart" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Quickstart
                  </a>
                </li>
                <li>
                  <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="https://docs.futeurcredx.com/api-reference" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.futeurcredx.com/company/about" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://www.futeurcredx.com/contact-sales" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://www.futeurcredx.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.futeurcredx.com/legal/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Company Branding */}
          <div className="border-t border-border pt-8 pb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2 uppercase tracking-wide">
              FUTEURCREDX
            </h2>
          </div>

          {/* Service Descriptions */}
          <div className="border-t border-border pt-8 pb-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Enterprise Solutions
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our enterprise solutions provide financial institutions with AI-powered risk assessment tools, lending intelligence, and portfolio analytics to enhance decision-making processes and improve operational efficiency.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Data Security
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                FUTEURCREDX employs industry-leading security measures to protect your business data. All information is encrypted and stored according to the highest security standards in compliance with relevant regulations.
              </p>
            </div>
          </div>

          {/* Final Copyright */}
          <div className="border-t border-border pt-6">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {currentYear} FUTEURCREDX. LUMIQ AI&trade; and FUTEURCREDX&reg; are registered trademarks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
