import { Link } from "react-router-dom";
import { Github, Instagram, Twitter, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Navigation Links - Left */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links - Right */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground opacity-0">
              &nbsp;
            </h4>
            <ul className="space-y-2">
              {['Blog', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact - Centered */}
          <div className="col-span-2 md:col-span-6 lg:col-span-8">
            <div className="flex flex-col items-center md:items-end space-y-6">
              {/* Social Links */}
              <div className="flex flex-col items-center md:items-end">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github className="w-5 h-5" />, url: "https://github.com" },
                    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com" },
                    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com" },
                    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com" },
                    { icon: <Mail className="w-5 h-5" />, url: "mailto:contact@example.com" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200 text-muted-foreground"
                      aria-label={`${social.icon.type.displayName} profile`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email Subscription */}
              <div className="w-full max-w-md">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground text-center md:text-right">
                  Stay Updated
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-4 py-2 text-sm border border-muted rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary bg-background w-full"
                  />
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-primary/90 transition whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Shaswin Ayyan. All rights reserved.
          </p>
          <div className="flex space-x-6 order-1 md:order-2">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition">
              Terms
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;