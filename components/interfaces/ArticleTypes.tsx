export default interface ArticleTypes {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: any;
    name: string;
  };
  images: {
    thumbnail: string;
    hero: {
      small: any;
      large: any;
    };
    gallery: string;
  };
}
