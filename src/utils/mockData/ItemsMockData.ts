let ItemsData = [
  {
    name: "Restoratives Items",
    type: "Restoratives",
    image: "",
    description: "descriptions 1",
    quantity: 69,
    id:1,
  },
  {
    name: "Enhancement Items",
    type: "Enhancement",
    image: "",
    description: "descriptions 1",
    quantity: 69,
    id:2,
  },
  {
    name: "Support Items",
    type: "Support",
    image: "",
    description: "descriptions 1",
    quantity: 69,
    id:3,
  },
  {
    name: "Materials Items",
    type: "Materials",
    image: "",
    description: "descriptions 1",
    quantity: 69,
    id:4,
  },
  {
    name: "Key Items",
    type: "Key",
    image: "",
    description: "descriptions 1",
    quantity: 69,
    id:5,
  },
  {
    name: "Caught Fish",
    type: "Fish",
    image: "",
    description: "descriptions 1",
    quantity: 69,
    id:6,
  }
];

export function getItemsData(){
  return ItemsData;
}

export function getItemsId(id){
  return ItemsData.find((item) => item.id === id);
}