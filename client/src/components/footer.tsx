import { Building } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Careers", id: "careers" }
  ];

  const serviceLinks = [
    "Construction",
    "Interior Design", 
    "Home Automation",
    "Security Systems",
    "Solar Solutions",
    "Access Control"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Sitemap", href: "#" }
  ];

  return (
    <footer className="bg-covenant-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Building className="text-covenant-blue text-2xl mr-3" />
              <span className="text-xl font-bold">Covenant Advanced Technologies</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of innovative construction, automation, and technology solutions. Building tomorrow's infrastructure today with precision, quality, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-covenant-blue/20 text-covenant-light-blue p-2 rounded hover:bg-covenant-blue hover:text-white transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2024 Covenant Advanced Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
