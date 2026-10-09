import type { AppDefinition } from './types';
export const minitools: AppDefinition = {
  slug: 'minitools', name: 'MiniTools', metaTitle: 'MiniTools — Luis Gil',
  tagline: 'Small tools. Right where you need them.',
  description: 'Música, temporizadores, calendario y tareas en una isla nativa para Mac, con o sin notch. Requiere macOS 13 o posterior y Apple silicon.',
  status: 'Disponible', platforms: ['macOS 13+', 'Apple silicon'],
  features: [{ title: 'Con o sin notch', description: 'Una isla para tener tus herramientas a mano.' }],
  navigation: [{ id: 'overview', label: 'MiniTools', path: '/apps/minitools/' }],
  supportURL: 'https://github.com/LuisGil15/MiniTools/issues',
};
