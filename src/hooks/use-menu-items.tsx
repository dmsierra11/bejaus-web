import { Menu } from "@/types/menu";

const useMenuItems = (): Menu => {
  const menuItems: Menu = {
    Plats: [
      {
        title: "Bikini carn & formatge",
        description: "Ham & cheese toastie",
        imageSrc: "",
        price: 4.5,
      },
      {
        title: "Entrepà de salsitxa",
        description: "Bejaus hot dog",
        imageSrc: "",
        price: 3,
      },
      {
        title: "Tapa de salmò fumat",
        description: "Smoked ham tapa",
        imageSrc: "",
        price: 3,
      },
      {
        title: "Tapa de bacallà",
        description: "Small cod tapa",
        imageSrc: "",
        price: 3,
      },
      {
        title: "Tapa de cansalada",
        description: "Pork belly tapa",
        imageSrc: "",
        price: 3,
      },
      {
        title: "Chilli sense carn (vegan)",
        description: "Chilli sin carne (vegano)",
        imageSrc: "",
        price: 4.2,
      },
      {
        title: "Ensaladilla amb bonitol",
        description: "Bonito russian salad",
        imageSrc: "",
        price: 5.2,
      },
      {
        title: "Gildes",
        description: "Olive appetizer",
        imageSrc: "",
        price: 2.5,
      },
      {
        title: "Rollets de pernil",
        description: "Ham rolls",
        imageSrc: "",
        price: 3.9,
      },
    ],
    Postres: [
      {
        title: "Carrot cake",
        description: "Tara de zanahoria",
        imageSrc: "",
        price: 3.9,
      },
      {
        title: "Cheesecake",
        description: "Classic cheesecake",
        imageSrc: "",
        price: 3.9,
      },
    ],
    Cafè: [
      {
        title: "Espresso Doble, Tallat",
        description: "Double espresso, cortado",
        imageSrc: "",
        price: 2,
      },
      {
        title: "Filtrat (Refill)",
        description: "Drip coffee (refill)",
        imageSrc: "/coffee1.png",
        price: 2.9,
      },
      {
        title: "Americà",
        description: "Americano",
        imageSrc: "",
        price: 2.2,
      },
      {
        title: "Cafè amb llet",
        description: "Latte",
        imageSrc: "",
        price: 2.3,
      },
      {
        title: "Flat white",
        description: "Flat white",
        imageSrc: "",
        price: 3.1,
      },
      {
        title: "Matcha Latte",
        description: "Matcha latte",
        imageSrc: "",
        price: 4,
      },
      {
        title: "Infusions, Tè",
        description: "Tea",
        imageSrc: "",
        price: 2,
      },
    ],
    Begudes: [
      {
        title: "Canyeta",
        description: "Small beer",
        imageSrc: "",
        price: 2,
      },
      {
        title: "Canya",
        description: "Regular beer",
        imageSrc: "",
        price: 3,
      },
      {
        title: "Vermut",
        description: "Vermouth",
        imageSrc: "",
        price: 2.5,
      },
      {
        title: "Vi negre",
        description: "Red wine",
        imageSrc: "",
        price: 2.5,
      },
      {
        title: "Vi blanc",
        description: "White wine",
        imageSrc: "",
        price: 2.5,
      },
      {
        title: "Refrescs",
        description: "Soft drinks",
        imageSrc: "",
        price: 2,
      },
    ],
  };

  return menuItems;
};

export default useMenuItems;
