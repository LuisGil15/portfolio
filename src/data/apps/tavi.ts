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
      title: "Native",
      description:
        "A SwiftUI interface adapted to macOS and iPadOS, with navigation and shortcuts for each platform.",
    },
    {
      title: "Organized",
      description:
        "Workspaces, folders, environments, variables, and history to keep every API in context.",
    },
    {
      title: "Private",
      description:
        "No accounts or analytics. Secrets stay in Keychain and iCloud sync is optional.",
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
