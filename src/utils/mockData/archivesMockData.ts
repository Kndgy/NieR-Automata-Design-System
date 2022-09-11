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
            title:"",
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
          // {
          //   title:"YoRHa: Gunner 16",
          //   description:" A unit from the experimental YoRHa squadron that was utilized during the 14th Machine War."
          // },
          // {
          //   title:"YoRHa: Scanner 21",
          //   description:"A unit from the experimental YoRHa squadron that wasuti;ized during the 14th Machine War, Number 21 possessed a cool and analytical personality that perfectky fit her role as a Scanner."
          // }
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
            title:null,
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
