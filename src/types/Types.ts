export type TCardPrice = {
  background: string;
  title: string;
  desc: any;
  price: string;
  diskon: string;
  normalPrice: string;
  description: string;
};

export type TCard = {
  image: any;
  icon: any;
  name: string;
  price: string;
  url: string;
};

export type TOffer = {
  title: string;
  descriptionOne?: string | null;
  descriptionTwo?: string;
  image: any;
};
export type TTestimonial = {
  title: string;
  description: string;
  author: string;
};

export type TServer = {
  title: string;
  description: string;
  titleblue: string;
  image: any;
};
export type TTable = {
  title: string;
  wordPress: string;
  visit: string;
  price: string;
  storage: string;
  cdn: string;
  googleCloud: string | any;
  support: string | any;
  backup: string;
  ssh: string | any;
  order: string | any;
};

export interface ICardPrice {
  item: {
    background: string;
    title: string;
    desc: [];
    price: string;
    diskon: string;
    normalPrice: string;
    description: string;
  };
}

export type TCardDesc = {
  first: string;
  second: string;
};

export interface ITable {
  item: {
    title: string;
    wordPress: string;
    visit: string;
    price: string;
    storage: string;
    cdn: string;
    googleCloud: string | any;
    support: string | any;
    backup: string;
    ssh: string | any;
    order: string | any;
  };
}
