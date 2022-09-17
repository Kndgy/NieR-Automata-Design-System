let archivesMockData = [
  {
    archivesData:[
      {
        IntelType : "Archives",
        data : [
          {
            title:"first title",
            id:1,
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"]
          },
          {
            title:"first title",
            id:14,
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"]
          }
        ],
        nestedData:[
          {
            title:"first nest",
            id:2,
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"],
            dropDownData:[
              {
                title:"dropdown data",
                id:3,
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              },
              {
                title:"first title",
                id:4,
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              }
            ]
          },
          {
            title:"even more test",
            id:5,
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"],
            dropDownData:[
              {
                title:"first title",
                id:6,
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              },
              {
                title:"first title",
                id:7,
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
            descriptions:null,
          },
        ],
        nestedData:[
          {
            title:"first nest",
            id:2,
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"],
            dropDownData:[
              {
                title:"dropdown data",
                id:3,
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              },
              {
                title:"first title",
                id:4,
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
