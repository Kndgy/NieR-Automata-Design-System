let WeaponsMockData = [
  {
    name: "Small Swords",
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
    name: "large swords",
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
    name: "spears",
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
    name: "Combat Bracers",
    lvl: 1,
    description: "A pair of combat bracers that can be used for basic combat.",
    attack: 1,
    combo: "",
    skill: "",
    type: "bracer",
    typeName: "combat bracers",
    image: "",
    id:4
  }
]

export function getWeaponsArchive(){
  return WeaponsMockData;
}

export function getWeaponsArchiveid(id){
  return WeaponsMockData.find(weapon => weapon.id === id);
}