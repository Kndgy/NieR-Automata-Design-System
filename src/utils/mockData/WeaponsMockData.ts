let WeaponsMockData = [
  {
    name: "Type-40 Sword",
    lvl: 1,
    description: "The latest YoRHa model.",
    attack: "646 - 683",
    combo: "Lt 7  Hv 3",
    skill: ["Stun", "Energy Charge"],
    type: "small",
    typeName: "small-swords",
    image: "",
    id:1
  },
  {
    name: "Virtuous Treaty",
    lvl: 1,
    description: "A white katana kept by samurai of the East",
    attack: "840 - 924",
    combo: "Lt 3  Hv 3",
    skill: ["ATK Speed Up", "-"],
    type: "large",
    typeName: "large-swords",
    image: "",
    id:2
  },
  {
    name: "Virtuous Dignity",
    lvl: 1,
    description: "A white spead used by samura of the East.",
    attack: "220 - 240",
    combo: "Lt 3  Hv 2",
    skill: ["-","-"],
    type: "spear",
    typeName: "spears",
    image: "",
    id:3
  },
  {
    name: "Cruel Lament",
    lvl: 1,
    description: "Weapons made of black armor from the East.",
    attack: 1,
    combo: "Lt 5  Hv 2",
    skill: ["-","-"],
    type: "bracer",
    typeName: "bracers",
    image: "",
    id:4
  }
]

let WeaponsTypeList = [
  {
    name:"All Weapons",
    link:"/type/all?type=",
  },
  {
    name:"Small Sword",
    link:"/type/small-swords?type=small",
  },
  {
    name:"Large Sword",
    link:"/type/large-swords?type=large",
  },
  {
    name:"Spears",
    link:"/type/spears?type=spears",
  },
  {
    name:"Combar Bracers",
    link:"/type/bracer?type=bracer",
  }
]

export function getWeaponType(){
  return WeaponsTypeList;
}

export function getWeaponsArchive(){
  return WeaponsMockData;
}

export function getWeaponsArchiveid(id){
  return WeaponsMockData.find(weapon => weapon.id === id);
}