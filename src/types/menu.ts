type MenuItem = {
  title: string;
  description: string;
  imageSrc: string;
  price: number;
};

type Menu = {
  [key: string]: MenuItem[];
};

export type { MenuItem, Menu };
