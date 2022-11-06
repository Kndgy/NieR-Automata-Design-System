let archivesMockData = [
  {
    archivesData:[
      {
        IntelType : "Archives",
        data : [
          {
            title:"first title",
            id:1,
            image:"",
            content:[],
          },
          {
            title:"second title",
            id:14,
            image:"",
            content:[],
          }
        ],
        nestedData:[
          {
            title:"Pearl Harbor Descent Records",
            id:2,
            image:"",
            content:[],
            dropDownData:[
              {
                title:"11B's Escape Plan",
                id:3,
                image:"",
                content:[
                  {
                    time:"00:02:13 ",
                    descriptions:"Reactivation complete. A check of my body reveals various failures.Communication functions have been destroyed. I cannot contact my team or bunker. I leave a draft of this message here as a log."
                  },
                  {
                    time:"00:10:13",
                    descriptions:"I verify the plan once more. Using my supposed destruction in this sortie as a guide, I sever all communication. I then pass beneath the abandoned factory and escape. Further analysis reveals that I took anti-air fire while in the flight unit resulting in damage to my body. No matter-it can be repaired."
                  },
                  {
                    time:"00:15:21",
                    descriptions:"I'm Cold. My sensory systems seem to be failing."  
                  },
                  {
                    time:"00:33:12",
                    descriptions:"Noise has started to cloud my vision. Virus warnings appear frequently. It is unclear whether I am infected of it the system is in error."  
                  },
                  {
                    time:"00:33:21",
                    descriptions:"Noise has started to cloud my vision. Virus warnings appear frequently. It is unclear whether I am infected of it the system is in error."  
                  },
                  {
                    time:"00:33:31",
                    descriptions:"I'm scared. I want to go back to the bunker, but I can't restore communications."  
                  },
                  {
                    time:"00:38:00",
                    descriptions:"This can't continue. I can't stay here. I have to run... YoRHa squadron was wrong... I have to find somewhere safer... I'm scared. I'm so scared."  
                  },
                  {
                    time:"00:45:00",
                    descriptions:"This can't continue. I can't stay here. I have to run... YoRHa squadron was wrong... I have to find somewhere safer... I'm scared. I'm so scared."  
                  }
                ]
              },
              {
                title:"first title",
                id:4,
                image:"",
                content:[],
  
              },
              {
                title:"first title",
                id:4,
                image:"",
                content:[],
  
              },
              {
                title:"first title",
                id:4,
                image:"",
                content:[],
  
              },
              {
                title:"first title",
                id:4,
                image:"",
                content:[],
  
              }
            ]
          },
          {
            title:"even more test",
            id:5,
            image:"",
            content:[],
            dropDownData:[
              {
                title:"first title",
                id:6,
                image:"",
                content:[],
  
              },
              {
                title:"first title",
                id:7,
                image:"",
                content:[],
  
              }
            ]
          }
        ]
      },
      {
        IntelType : "Unit Data",
        data : [
          {
            title:"11B's Escape Plan",
            id:8,
            image:"",
            content:[],
            descriptions:null,
          },
        ],
        nestedData:[
          {
            title:"first nest",
            id:2,
            image:"",
            content:[],
            dropDownData:[
              {
                title:"dropdown data",
                id:3,
                image:"",
                content:[],
  
              },
              {
                title:"first title",
                id:4,
                image:"",
                content:[],
  
              }
            ]
          },
        ]
      },
      {
        IntelType : "Tutorials",
        data : [
          {
            title:"11B's Escape Plan",
            id:9,
            image:"",
            content:[],
            descriptions:null,
          },
        ],
        nestedData:[]
      },
      {
        IntelType : "Weapon Stories",
        data : [
          {
            title:"11B's Escape Plan",
            id:10,
            image:"",
            content:[],
            descriptions:null,
          },
        ],
        nestedData:[]
      },
      {
        IntelType : "Picture Books",
        data : [
          {
            title:"11B's Escape Plan",
            id:11,
            image:"",
            content:[],
            descriptions:null,

          },
        ],
        nestedData:[]
      },
      {
        IntelType : "Fishing Encyclopedia",
        data : [
          {
            title:"11B's Escape Plan",
            id:11,
            image:"",
            content:[],
            descriptions:null,

          },
        ],
        nestedData:[]
      },
      {
        IntelType : "Novel",
        data : [
          {
            title:"test",
            id:12,
            image:"",
            content:[],
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

export function getArchivesMockID(id){
  return archivesMockData.map((item)=>item.archivesData.map((item)=>item.data.find((items)=>items.id === id)));
}

export function getNestedArchivesMockID(id){
  return archivesMockData.map((item)=>item.archivesData.map((item)=>item.nestedData.map((items)=>items.dropDownData.find((product)=>product.id === id))));
}
