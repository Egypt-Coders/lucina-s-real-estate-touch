const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-sm text-muted">
          © {currentYear} Lucina Noel. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <a
            href="#home"
            className="font-body text-sm text-muted hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-body text-sm text-muted hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="font-body text-sm text-muted hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-body text-sm text-muted hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
