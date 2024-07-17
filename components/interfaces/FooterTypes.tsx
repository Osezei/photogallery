export default interface FooterTypes {
  name: string;
  year: number;
  length: number;
  current: number;
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
