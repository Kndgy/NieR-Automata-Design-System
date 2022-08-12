let ItemsData = [
  {
    name: "Small Recovery",
    type: "Restoratives",
    image: "",
    description: ["Restores 25% of HP"],
    quantity: 69,
    id:1,
  },
  {
    name: "Medium Recovery",
    type: "Restoratives",
    image: "",
    description: ["Restores 50% of HP"],
    quantity: 69,
    id:2,
  },
  {
    name: "Large Recovery",
    type: "Restoratives",
    image: "",
    description: ["Restores 75% of HP"],
    quantity: 69,
    id:3,
  },
  {
    name: "Melee Attack UP (S)",
    type: "Enhancement",
    image: "",
    description: ["Weapon Attacks do Double Damage for 15 seconds"],
    quantity: 69,
    id:4,
  },
  {
    name: "Ranged Attack UP (S)",
    type: "Enhancement",
    image: "",
    description: ["Pod ranged Attacks do Double Damage for 15 seconds"],
    quantity: 69,
    id:5,
  },
  {
    name: "Melee Defense UP (S)",
    type: "Enhancement",
    image: "",
    description: ["Melee damage taken is reduced by 50% for 15 seconds"],
    quantity: 69,
    id:6,
  },
  {
    name: "Speed Salve (S)",
    type: "Support",
    image: "",
    description: "Movement Speed increased for 15 seconds",
    quantity: 69,
    id:7,
  },
  {
    name: "Small G Luck+",
    type: "Support",
    image: "",
    description: ["Enemeis drop more money for 30 seconds"],
    quantity: 69,
    id:8,
  },
  {
    name: "Copper Ore",
    type: "Materials",
    image: "",
    description: ["Ore containing copper.</br>Iron can be extracted by heating it to 3000 degrees in a furnace."],
    quantity: 69,
    id:9,
  },
  {
    name: "Elevator Key",
    type: "Key",
    image: "",
    description: ["A key that unlock an elevator in the shopping mall"],
    quantity: 69,
    id:10,
  },
  {
    name: "Killifish",
    type: "Fish",
    image: "",
    description: ["Caught in a river.", "Can be exchanged for money."],
    quantity: 69,
    id:11,
  }
];

export function getItemsData(){
  return ItemsData;
}

export function getItemsId(id){
  return ItemsData.find((item) => item.id === id);
}