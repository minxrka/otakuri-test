interface Anime {
  id: number;
  nameRu: string;
  name: string;
  year: number;
  description: string;
  genres: string;
  imageUrlRoblox: string;
  imageUrl: string;
}

declare module '*.json' {
  const value: Anime[];
  export default value;
}
