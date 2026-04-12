import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/zux/Header";
import { Footer } from "@/components/zux/Footer";
import { WhatsAppButton } from "@/components/zux/WhatsAppButton";
import {
  Shield,
  Smartphone,
  Monitor,
  Apple,
  ExternalLink,
  Scale,
  Wifi,
  Lock,
  BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/control-parental")({
  head: () => ({
    meta: [
      { title: "Control Parental y Marco Legal — Zux Internet" },
      {
        name: "description",
        content:
          "Herramientas gratuitas de control parental y marco legal paraguayo. Ley N° 5653, Ley N° 642 de Telecomunicaciones, CONATEL y protección de datos.",
      },
      {
        property: "og:title",
        content: "Control Parental y Marco Legal — Zux Internet",
      },
      {
        property: "og:description",
        content:
          "Protegé a tu familia en internet. Cumplimos con la legislación paraguaya de telecomunicaciones y protección de menores.",
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

const legalFramework = [
  {
    icon: Shield,
    title: "Ley N° 5653/2016 — Protección de Menores en Internet",
    description:
      "Establece la protección integral de niños, niñas y adolescentes contra contenidos nocivos de internet. Obliga a los proveedores de servicios de internet a informar sobre herramientas de control parental gratuitas.",
    decree:
      "Reglamentada por el Decreto N° 8098/2022, que establece las obligaciones específicas de los ISP en materia de protección de menores.",
    links: [
      {
        label: "Decreto N° 8098/2022",
        url: "https://www.cert.gov.py/wp-content/uploads/2023/01/Decreto-8098.pdf",
      },
    ],
  },
  {
    icon: Wifi,
    title: "Ley N° 642/95 — Ley de Telecomunicaciones",
    description:
      "Marco legal principal que regula todos los servicios de telecomunicaciones en Paraguay. Establece que la prestación de servicios de internet requiere una licencia otorgada por CONATEL, con vigencia de 5 años renovable.",
    decree:
      "Reglamentada por el Decreto N° 14135/1996 y modificada por la Ley N° 2478 y Ley N° 2495.",
    links: [
      {
        label: "CONATEL — Leyes",
        url: "https://www.conatel.gov.py/leyes/",
      },
    ],
  },
  {
    icon: BarChart3,
    title: "Resolución CONATEL N° 1662/2021 — Calidad de Servicio",
    description:
      "Reglamento de Calidad de Servicio para los Servicios de Telecomunicaciones. Establece parámetros obligatorios de medición de calidad, incluyendo velocidad mínima garantizada, latencia y disponibilidad del servicio.",
    decree:
      "Los prestadores deben reportar trimestralmente los indicadores de calidad ante CONATEL.",
    links: [
      {
        label: "Sistema de Medición QoS",
        url: "https://www.conatel.gov.py/sistema-de-medicion-de-calidad-de-servicios/",
      },
    ],
  },
  {
    icon: Lock,
    title: "Ley N° 1682/2001 — Protección de Datos Personales",
    description:
      "Reglamenta la información de carácter privado. Toda persona tiene derecho a recolectar, almacenar y procesar datos personales para uso estrictamente privado. Establece el acceso a datos en fuentes públicas y la protección de información sensible.",
    decree:
      "En Zux protegemos tus datos personales conforme a esta ley. No compartimos tu información con terceros sin tu consentimiento.",
    links: [
      {
        label: "Texto completo",
        url: "https://www.bacn.gov.py/leyes-paraguayas/1760/ley-n-1682-reglamenta-la-informacion-de-caracter-privado",
      },
    ],
  },
  {
    icon: Scale,
    title: "Decreto N° 6999/2017 — Regulación de Tarifas",
    description:
      "Aprueba el Reglamento General de Tarifas de los Servicios de Telecomunicaciones en la República del Paraguay. Garantiza transparencia y equidad en la fijación de precios para los consumidores.",
    decree:
      "CONATEL supervisa que las tarifas sean justas y que los usuarios reciban el servicio contratado.",
    links: [
      {
        label: "CONATEL — Decretos",
        url: "https://www.conatel.gov.py/decretos/",
      },
    ],
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
              Control Parental & Marco Legal
            </p>
            <h1 className="text-3xl font-bold md:text-5xl">
              Conectate seguro
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Herramientas gratuitas para proteger a tu familia y toda la
              información sobre el marco legal que nos regula en Paraguay.
            </p>
          </div>

          {/* Tools grid */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-2">
              Herramientas de Control Parental
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Conforme a la Ley N° 5653/2016 y el Decreto N° 8098/2022,
              ponemos a tu disposición estas herramientas gratuitas para
              gestionar el acceso de menores a contenidos en internet.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {tools.map((tool) => (
                <div
                  key={`${tool.platform}-${tool.name}`}
                  className="glass-card p-6"
                >
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
          </div>

          {/* Legal Framework */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-2">Marco Legal Paraguayo</h2>
            <p className="text-sm text-muted-foreground mb-8">
              En Zux operamos bajo la supervisión de la{" "}
              <a
                href="https://www.conatel.gov.py"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Comisión Nacional de Telecomunicaciones (CONATEL)
              </a>
              , ente regulador de los servicios de telecomunicaciones en
              Paraguay. Cumplimos con toda la legislación vigente aplicable.
            </p>

            <div className="space-y-6">
              {legalFramework.map((law) => (
                <div key={law.title} className="glass-card p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <law.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{law.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {law.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed italic mb-4">
                        {law.decree}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {law.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                          >
                            {link.label}{" "}
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="glass-card p-8 md:p-12 text-center">
            <Scale className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2 className="text-xl font-bold mb-4">
              Nuestro Compromiso Legal
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              En Zux estamos comprometidos con el cumplimiento de todas las
              normativas paraguayas de telecomunicaciones. Operamos con licencia
              otorgada por CONATEL conforme a la Ley N° 642/95, cumplimos con
              los estándares de calidad establecidos en la Resolución N°
              1662/2021, protegemos los datos personales de nuestros usuarios
              según la Ley N° 1682/2001 y promovemos la seguridad digital de
              las familias paraguayas conforme a la Ley N° 5653/2016.
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
