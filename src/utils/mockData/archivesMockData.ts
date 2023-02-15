import unit from '../../unit.png'

let archivesMockData = [
  {
    archivesData:[
      {
        IntelType : "archives",
        data : [
          {
            title:"11B's Escape Plan",
            id:11,
            image:"",
            content:[
              "00:02:13 ",
              "Reactivation complete. A check of my body reveals various failures.Communication functions have been destroyed. I cannot contact my team or bunker. I leave a draft of this message here as a log.",
              ``,
              "00:10:13",
              "I verify the plan once more. Using my supposed destruction in this sortie as a guide, I sever all communication. I then pass beneath the abandoned factory and escape. Further analysis reveals that I took anti-air fire while in the flight unit resulting in damage to my body. No matter-it can be repaired.",
              ``,
              "00:15:21",
              "I'm Cold. My sensory systems seem to be failing.",
              ``,
              "00:33:12",
              "Noise has started to cloud my vision. Virus warnings appear frequently. It is unclear whether I am infected of it the system is in error.",
              ``,
              "00:33:21",
              "Noise has started to cloud my vision. Virus warnings appear frequently. It is unclear whether I am infected of it the system is in error.",
              ``,
              "00:33:31",
              "I'm scared. I want to go back to the bunker, but I can't restore communications.",
              ``,
              "00:38:00",
              "This can't continue. I can't stay here. I have to run... YoRHa squadron was wrong... I have to find somewhere safer... I'm scared. I'm so scared.",
              ``,
              "00:45:00",
              "This can't continue. I can't stay here. I have to run... YoRHa squadron was wrong... I have to find somewhere safer... I'm scared. I'm so scared.",
              ``,
            ],
            descriptions:null,
          },
        ],
        nestedData:[
          {
            title:"Pearl Harbor Descent Records",
            id:2,
            image:"",
            content:[
              "test non dropdown content"
            ],
            dropDownData:[
              {
                title:"YoRHa: Gunner 16",
                id:4,
                image:"",
                content:[
                    `A unit from the experimental YoRHa squadron that was utilized during the 14th Machine War. 
                    Number 16 possessed a rough and tumble personality ideal for her role as a Gunner, 
                    where she was required to attack foes from a distance. 
                    Though she possessed a defiant streak that extended even to her superiors, 
                    she was assigned to the mission anyway due to her tremendous offensive abilities.`, 
                    ``,
                    `During her squad's assault on Mt. Ka'ala, Number 16 volunteered to stay behind and hold off the machine lifeform army so her companions could continue up to the mountain. 
                    She fought with great courage alongside members of a local Resistance group, 
                    and managed to hold off overwhelming numbers until the appearance of a Goliath that was unaffected by ordinary weaponry. 
                    Seeing no other way to end the fight, she chose to destroy the enemy by overloading and detonating her own fusion reactor. 
                    This act of self-sacrifice despite her defiant nature is one of remarkable interest, and likely merits further study.`
                ],
              },
              {
                title:"YoRHa: Scanner 21",
                id:5,
                image:"",
                content:[
                  "YoRHa: Scanner 21"
                ],
              }
            ]
          }
        ]
      },
      {
        IntelType : "unitdata",
        data : [],
        nestedData:[
          {
            title:"Standard Machines",
            id:3,
            image:"",
            content:[],
            dropDownData:[
              {
                title:"Small Stubby",
                id:5,
                image:"",
                content:["Small Stubby"],
              },
              {
                  title:"Multi-tier Type",
                  id:51,
                  image:"",
                  content:["Multi-tier Type"],
              }
            ]
          },
          {
              title:"Androids",
              id:2,
              image:"",
              content:[],
              dropDownData:[
                  {
                      title:"YoRHa (Standard Armament)",
                      id:1,
                      image: {unit},
                      content:["A Yorha member infected by a virus.", `Having Completely lost all sense of self, it is hostile toward all uninfected androids`],
                  }
              ]
          }
        ]
      },
      {
        IntelType : "tutorials",
        data : [
          {
            title:"Basic Controls",
            id:1,
            image:"",
            content:[
              {
                contentVar:"yeah"
              }
            ],
            descriptions:null,
          },
          {
            title:"Combat Controls",
            id:2,
            image:"",
            content:["Combat Controls"],
            descriptions:null,
          }
        ],
        nestedData:[]
      },
      {
        IntelType : "weaponstories",
        data : [],
        nestedData:[
          {
            title:"Small Swords",
            id:1,
            image:"",
            content:[],
            dropDownData:[
              {
                title:"Faith",
                id:1,
                image:"",
                content:["Faith Desc"],
              },
              {
                title:"Virtuous Contract",
                id:2,
                image:"",
                content:["Virtuous Contract Desc"],
              }
            ]
          }
        ]
      },
      {
        IntelType : "picturebooks",
        data : [
          {
            title:"A Reason to Live",
            id:1,
            image:"",
            content:[],
            descriptions:null,
          },
          {
            title:"Treasured Items",
            id:2,
            image:"",
            content:[],
            descriptions:null,
          }
        ],
        nestedData:[]
      },
      {
        IntelType : "fishingencyclopedia",
        data : [
          {
            title:"Killifish",
            id:1,
            image:"",
            content:["A small freshwater fish"],
            descriptions:null,
          },
          {
            title:"Carp Machine",
            id:2,
            image:"",
            content:["A harmless machine lifeform resembling a carp."],
            descriptions:null,
          }
        ],
        nestedData:[]
      },
      {
        IntelType : "novel",
        data : [
          {
            title:"Devola & Popola's Memories",
            id:1,
            image:"",
            content:[`As members of the same model, all that was elft to them was the stigma of being labeled "rampant androids." Unable to
                      endure further persecution, they began their long march to a city located a great distance away.`,
                    `Leaning upon each another.`,
                    `Burdened with an unforgibable sin.`],
            descriptions:null,
          },
          {
            title:"9S's Memories",
            id:2,
            image:"",
            content:["FOllowing his fight to death with A2, 9S's vital functions start to shut down, and his memories begin to disappear. On the verge of death, however, 9S finds his resolve."],
            descriptions:null,
          },
        ],
        nestedData:[]
      }
    ]
  }
];

export function getArchivesMockData(){
  return archivesMockData[0].archivesData.map((items)=>items);
}

export function getArchivesMockID(intelType, id) {
  return archivesMockData
    .flatMap(item => item.archivesData)
    .filter(item => item.IntelType === intelType)
    .flatMap(item => item.data)
    .find(content => content.id === id) || null;
}

export function getNestedArchivesMockID(intelType, id) {
  const data = archivesMockData
    .flatMap(item => item.archivesData)
    .filter(item => item.IntelType === intelType)
    .map(item => item.nestedData)
    .flat();

  const dropDownData = data.find(content => {
    return content.dropDownData && content.dropDownData.find(dropDown => dropDown.id === id);
  });

  const result = dropDownData ? dropDownData.dropDownData.find(dropDown => dropDown.id === id) : null;

  return result;
}

