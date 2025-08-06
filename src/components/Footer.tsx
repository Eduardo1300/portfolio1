const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          © {currentYear} Christopher Eduardo Valdivia Baca. Desarrollado con React, TypeScript y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;