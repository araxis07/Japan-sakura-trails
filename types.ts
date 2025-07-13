
export enum Language {
  JA = 'ja',
  EN = 'en',
  TH = 'th',
  ZH = 'zh',
}

export interface LocalizedText {
  [Language.JA]: string;
  [Language.EN]: string;
  [Language.TH]: string;
  [Language.ZH]: string;
}

export interface Place {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  // Optional: For future use, like detailed page specific images
  galleryImages?: string[]; 
  // Optional: For future use, like coordinates for a map
  coordinates?: { lat: number; lng: number };
  history?: LocalizedText;
  culture_festivals?: LocalizedText;
  things_to_do?: LocalizedText;
  local_cuisine?: LocalizedText;
  access?: LocalizedText;
}

export interface Region {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  places: Place[];
}
