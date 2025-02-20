import importedWebsites from "./data.json";

export const websites: Website[] = importedWebsites.sort((w1: Website, w2: Website) => {
  if (w1.name < w2.name) return -1;
  if (w1.name > w2.name) return 1;
  return 0;
});

export const tags: string[] = [...new Set(websites.map(w => w.tags).flat())].sort();
