import type { AppDefinition } from "./types";

const basePath = "/apps/tavi";

export const tavi = {
  slug: "tavi",
  name: "Tavi",
  metaTitle: "Tavi — Cliente HTTP nativo",
  tagline: "Prueba APIs sin salir del ecosistema Apple.",
  description:
    "Organiza workspaces, ambientes, certificados y requests en una aplicación nativa que mantiene tus datos bajo tu control.",
  status: "Próximamente",
  platforms: ["macOS", "iPadOS", "SwiftUI"],
  features: [
    {
      title: "Nativo",
      description:
        "Interfaz SwiftUI adaptada a macOS y iPadOS, con navegación y atajos propios de cada plataforma.",
    },
    {
      title: "Organizado",
      description:
        "Workspaces, carpetas, ambientes, variables e historial para mantener cada API en contexto.",
    },
    {
      title: "Privado",
      description:
        "Sin cuentas ni analítica. Los secretos permanecen en Keychain y la sincronización con iCloud es opcional.",
    },
  ],
  navigation: [
    { id: "overview", label: "Inicio", path: `${basePath}/` },
    { id: "privacy", label: "Privacidad", path: `${basePath}/privacy/` },
    { id: "terms", label: "Términos", path: `${basePath}/terms/` },
    { id: "support", label: "Soporte", path: `${basePath}/support/` },
    { id: "changelog", label: "Novedades", path: `${basePath}/changelog/` },
  ],
  supportURL: "https://github.com/LuisGil15/Tavi/issues/new",
} as const satisfies AppDefinition;
