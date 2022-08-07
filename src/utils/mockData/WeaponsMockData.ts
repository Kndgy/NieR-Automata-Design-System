let WeaponsMockData = [
  {
    name: "Small Swords Name",
    lvl: 1,
    description: "A small sword that can be used for basic combat.",
    attack: 1,
    combo: "",
    skill: "",
    type: "small",
    typeName: "small swords",
    image: "",
    id:1
  },
  {
    name: "large swords Name",
    lvl: 1,
    description: "A large sword that can be used for basic combat.",
    attack: 1,
    combo: "",
    skill: "",
    type: "large",
    typeName: "large swords",
    image: "",
    id:2
  },
  {
    name: "spears Name",
    lvl: 1,
    description: "A spear that can be used for basic combat.",
    attack: 1,
    combo: "",
    skill: "",
    type: "spear",
    typeName: "spears",
    image: "",
    id:3
  },
  {
    name: "Combat Bracers Name",
    lvl: 1,
    description: "A pair of combat bracers that can be used for basic combat.",
    attack: 1,
    combo: "",
    skill: "",
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
    link:"/type/small swords?type=small",
  },
  {
    name:"Large Sword",
    link:"/type/large swords?type=large",
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