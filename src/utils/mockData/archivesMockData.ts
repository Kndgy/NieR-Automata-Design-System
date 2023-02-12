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
              {
                content:"test"
              }
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
                  {
                    content1:"content"
                  }
                ],
              },
              {
                title:"YoRHa: Scanner 21",
                id:5,
                image:"",
                content:[
                  {
                    contentVar:"lol"
                  }
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
                      image:"",
                      content:["A Yorha member infected by a virus."],
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

