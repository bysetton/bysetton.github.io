export interface Company {
  img: string;
  coverImage: string;
  name: string;
  websiteUrl: string;
  websiteDisplay: string;
  email: string;
  product: string;
  tags: Tag[];
  location: string;
  delivery: boolean;
  about: string;
}

export interface Tag {
  name: string;
}
