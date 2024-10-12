interface animesData {
  id: number;
  names: {
    ru: string;
    en: string;
  };
  franchises: {
    franchise: {
      id: string;
      name: string;
    };
    releases: {
      id: number;
      code: string;
      ordinal: number;
      names: {
        ru: string;
        en: string;
        alternative: null | string;
      };
    }[];
  }[];
  status: {
    string: string;
    code: number;
  };
  posters: {
    small: {
      url: string;
      wide: null | string;
    };
    medium: {
      url: string;
      wide: null | string;
    };
    original: {
      url: string;
      wide: null | string;
    };
  };
  type: {
    full_string: string;
    code: number;
    string: string;
    episodes: number | null;
    length: number;
  };
  genres: string[];
  season: {
    string: string;
    code: number;
    year: number;
    week_day: number;
  };
  description: string;
  in_favorites: number;
  player: {
    episodes: {
      first: number;
      last: number;
      string: string;
    };
    list: {
      [episodeId: string]: {
        episode: number;
        name: null | string;
        uuid: string;
        created_timestamp: number;
        preview: null | string;
        skips: {
          opening: number[];
          ending: number[];
        };
        hls: {
          fhd: null | string;
          hd: string;
          sd: string;
        };
      };
    };
  };
}

declare module '*.json' {
  const value: { list: animesData[] };
  export default value;
}
