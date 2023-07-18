export type TCardPrice = {
  background: string;
  title: string;
  desc: any;
  price: string;
  diskon: string;
  normalPrice: string;
  description: string;
};

export interface IDataDomain {
  item: {
    create_date: string;
    domain_name: string;
    domain_registered: string;
    domain_registrar: {
      email_address: string;
      phone_number: string;
      website_url: string;
      whois_server: string;
    };
    query_time: string;
    registrant_contact: {
      company: string;
      country_code: string;
      country_name: string;
      email_address: string;
    };
    status: boolean;
    update_date: string;
    expiry_date: string;
  };
}

export interface IFitureHosting {
  item: {
    icon: Element | any;
    title: string;
    desc: string;
  };
  i: number;
}
export type TFitureHosting = {
  icon: Element | any;
  title: string;
  desc: string;
};
export type TCard = {
  image: any;
  icon?: any;
  name: string;
  price: string;
  url?: string | any;
};
export interface ICard {
  item: {
    image: any;
    icon?: any;
    name: string;
    price: string;
    url?: string | any;
  };
}

export type TLink = {
  url: string;
  name: string;
};

export type TOffer = {
  title: string;
  descriptionOne?: string | null;
  descriptionTwo?: string;
  image: any;
};
export interface IOffer {
  item: {
    title: string;
    descriptionOne?: string | null;
    descriptionTwo?: string;
    image: any;
  };
}
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
  wordPress?: string;
  visit?: string;
  only?: boolean;
  price?: string;
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
    wordPress?: string;
    visit?: string;
    price?: string;
    storage: string;
    cdn: string;
    googleCloud: string | any;
    support: string | any;
    backup: string;
    ssh: string | any;
    order: string | any;
  };
  only?: boolean;
}
