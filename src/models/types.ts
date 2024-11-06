export interface Language {
  code: string;
  name: string;
  native: string;
}

export interface Country {
  code: string;
  name: string;
  capital: string;
  continent: {
    name: string;
  };
  phone: string;
  currency: string;
  languages: Language[];
}
