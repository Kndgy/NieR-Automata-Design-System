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
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"]
          },
          {
            title:"second title",
            id:14,
            image:"",
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"]
          }
        ],
        nestedData:[
          {
            title:"Pearl Harbor Descent Records",
            id:2,
            image:"",
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"],
            dropDownData:[
              {
                title:"11B's Escape Plan",
                id:3,
                image:"",
                descriptions:["Re-Activation complete. A check of my body reveals various failures.", 'more test'],
                time:["00:02:13", "00:10:13", "00:15:21"]
              },
              {
                title:"first title",
                id:4,
                image:"",
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              }
            ]
          },
          {
            title:"even more test",
            id:5,
            image:"",
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"],
            dropDownData:[
              {
                title:"first title",
                id:6,
                image:"",
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              },
              {
                title:"first title",
                id:7,
                image:"",
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
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
            descriptions:null,
            time:["1st", "2nd"]
          },
        ],
        nestedData:[
          {
            title:"first nest",
            id:2,
            image:"",
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"],
            dropDownData:[
              {
                title:"dropdown data",
                id:3,
                image:"",
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              },
              {
                title:"first title",
                id:4,
                image:"",
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
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
            descriptions:null,
            time:["1st", "2nd"]
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
            descriptions:null,
            time:["1st", "2nd"]
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
            descriptions:null,
            time:["1st", "2nd"]

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
            descriptions:null,
            time:["1st", "2nd"]

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
            descriptions:null,
            time:["1st", "2nd"]
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
