export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface CountryWithMeta extends Country {
  isPreferred?: boolean;
}


