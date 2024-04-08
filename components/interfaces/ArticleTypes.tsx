export default interface ArticleTypes {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: {
    image: any;
    name: string;
  };
}
