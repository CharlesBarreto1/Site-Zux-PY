// Único lugar para editar el número y los mensajes de WhatsApp del sitio.
export const WHATSAPP_NUMBER = "595675265444";

/** Arma un link wa.me, opcionalmente con un mensaje ya escrito. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Mensajes por CTA: así cada lead llega con contexto y sabés
 * desde qué botón/sección escribió la persona.
 */
export const waMessages = {
  general: "Hola Zux 👋 Quiero más información sobre sus planes de internet.",
  contratar: "Hola Zux 👋 Quiero contratar internet de fibra. ¿Me ayudan?",
  cobertura: "Hola Zux 👋 ¿Tienen cobertura en mi zona? Mi dirección es: ",
  empresas:
    "Hola Zux 👋 Quiero una propuesta de internet corporativo para mi empresa.",
  /** Mensaje específico de un plan, con velocidad y precio. */
  plan: (name: string, speed: string, price: string) =>
    `Hola Zux 👋 Quiero contratar el ${name} (${speed} · ${price} Gs/mes). ¿Cómo sigo?`,
} as const;
