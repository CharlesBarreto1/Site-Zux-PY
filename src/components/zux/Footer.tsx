import { Link } from "@tanstack/react-router";
import zuxLogo from "@/assets/zux-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div>
          <img src={zuxLogo} alt="Zux" className="h-8 w-auto" />
          <p className="mt-1 text-xs text-muted-foreground">
            La mejor internet del Paraguay
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <a href="/#planes" className="hover:text-foreground transition-colors">Planes</a>
          <a href="/#tecnologia" className="hover:text-foreground transition-colors">Tecnología</a>
          <a href="/#empresas" className="hover:text-foreground transition-colors">Empresas</a>
          <a href="/#cobertura" className="hover:text-foreground transition-colors">Cobertura</a>
          <Link to="/control-parental" className="hover:text-foreground transition-colors">Control Parental</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zux. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
