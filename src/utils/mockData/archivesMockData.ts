let archivesMockData = [
  {
    archivesData:[
      {
        IntelType : "Archives",
        data : [
          {
            title:"first title",
            id:2,
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
                title:"first title",
                id:2,
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              },
              {
                title:"first title",
                id:2,
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              }
            ]
          },
          {
            title:"even more test",
            id:2,
            descriptions:["test", 'more test'
            ],
            time:["1st", "2nd"],
            dropDownData:[
              {
                title:"first title",
                id:2,
                descriptions:["test", 'more test'
                ],
                time:["1st", "2nd"]
              },
              {
                title:"first title",
                id:2,
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
            id:1,
            descriptions:null,
          },
        ],
        nestedData:[]
      },
      {
        IntelType : "Tutorials",
        data : [
          {
            title:"11B's Escape Plan",
            id:1,
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
            id:1,
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
            id:1,
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
            id:1,
            descriptions:null,
          },
        ],
        nestedData:[]
      }
    ]
  }
];

export function getArchivesMockData(){
  return archivesMockData.map((item)=>item.archivesData);
}

export function getArchivesMockID(id){
  return archivesMockData.find((data)=>data.archivesData[0].data[0].id)
}
