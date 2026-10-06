export type AppSection = "overview" | "privacy" | "terms" | "support" | "changelog";

export interface AppNavigationItem {
  id: AppSection;
  label: string;
  path: string;
}

export interface AppFeature {
  title: string;
  description: string;
}

export interface AppDefinition {
  slug: string;
  name: string;
  metaTitle: string;
  tagline: string;
  description: string;
  status: string;
  platforms: readonly string[];
  features: readonly AppFeature[];
  navigation: readonly AppNavigationItem[];
  supportURL: string;
}
