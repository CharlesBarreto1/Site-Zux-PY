import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/zux/Header";
import { Footer } from "@/components/zux/Footer";
import { WhatsAppButton } from "@/components/zux/WhatsAppButton";
import { Shield, Smartphone, Monitor, Apple, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/control-parental")({
  head: () => ({
    meta: [
      { title: "Control Parental — Zux Internet" },
      {
        name: "description",
        content:
          "Herramientas gratuitas de control parental para proteger a niños, niñas y adolescentes en internet. Ley N° 5653 de Paraguay.",
      },
      { property: "og:title", content: "Control Parental — Zux Internet" },
      {
        property: "og:description",
        content:
          "Protegé a tu familia en internet con herramientas gratuitas de control parental.",
      },
    ],
  }),
  component: ControlParental,
});

const tools = [
  {
    icon: Smartphone,
    platform: "Android",
    name: "Google Family Link",
    desc: "Family Link funciona en dispositivos Android con la versión 7.0 (Nougat) o superior. También es compatible con versiones 5.0 y 6.0 (Lollipop y Marshmallow).",
    downloadUrl:
      "https://play.google.com/store/apps/details?id=com.google.android.apps.kids.familylink",
    tutorialUrl: "https://families.google/intl/es-419_ALL/familylink/",
  },
  {
    icon: Monitor,
    platform: "Windows",
    name: "Windows Family Options",
    desc: "Disponible desde Windows 10. Aplica para cuentas de Microsoft Edge. Incluye la administración de dispositivos iOS y Android vinculados a tu cuenta de Microsoft.",
    tutorialUrl:
      "https://support.microsoft.com/es-es/windows/ayudar-a-proteger-a-tu-familia-en-l%C3%ADnea-con-seguridad-de-windows-5e8b9fd8-8372-dba0-eba2-46da8e407026",
  },
  {
    icon: Apple,
    platform: "iOS",
    name: "Contenido y privacidad de Tiempo de Uso",
    desc: "Disponible desde iOS 13.4. Compatible con iPhone 6s y posteriores, iPad Air 2 y posteriores, iPad mini 4 y posteriores, y iPod touch (7ª generación).",
    tutorialUrl: "https://support.apple.com/es-es/HT201304",
  },
  {
    icon: Apple,
    platform: "macOS",
    name: "Contenido y privacidad de Tiempo de Uso",
    desc: "Disponible desde macOS Catalina 10.15. Las configuraciones están asociadas a la cuenta iCloud y se sincronizan con los dispositivos iOS vinculados.",
    tutorialUrl:
      "https://support.apple.com/es-lamr/guide/mac-help/mchl8490d51e/mac",
  },
];

function ControlParental() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <Shield className="mx-auto mb-4 h-12 w-12 text-primary" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Control Parental
            </p>
            <h1 className="text-3xl font-bold md:text-5xl">
              Conectate seguro
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Herramientas gratuitas para proteger a tu familia en internet.
            </p>
          </div>

          {/* Tools grid */}
          <div className="grid gap-6 sm:grid-cols-2 mb-16">
            {tools.map((tool) => (
              <div key={`${tool.platform}-${tool.name}`} className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <tool.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {tool.platform}
                    </p>
                    <h3 className="font-semibold">{tool.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {tool.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {tool.downloadUrl && (
                    <a
                      href={tool.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Descargar <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {tool.tutorialUrl && (
                    <a
                      href={tool.tutorialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Ver tutorial <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Legal section */}
          <div className="glass-card p-8 md:p-12">
            <h2 className="text-xl font-bold mb-4">Marco Legal</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              La{" "}
              <strong className="text-foreground">
                Ley N° 5653 de Protección de niños, niñas y adolescentes contra
                contenidos nocivos de internet
              </strong>
              , de fecha 24 de agosto de 2016, establece en su Art. N° 1 que
              tiene por objeto la protección integral de niños, niñas y
              adolescentes a los efectos que puedan generar en ellos contenidos
              nocivos a que se accedan o se encuentren en Internet.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Así mismo, el{" "}
              <a
                href="https://www.cert.gov.py/wp-content/uploads/2023/01/Decreto-8098.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Decreto N° 8098-2022
              </a>
              , de fecha 27 de octubre de 2022, reglamenta la Ley N° 5653-2016
              de protección de niños, niñas y adolescentes contra contenidos
              nocivos de internet.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              En Zux estamos comprometidos con la seguridad de las familias
              paraguayas. Te recomendamos utilizar estas herramientas gratuitas
              para gestionar el acceso de menores a contenidos en internet.
            </p>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="text-sm font-medium text-primary hover:underline"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
