let archivesMockData = [
  {
    archivesData:[
      {
        IntelType : "Archives",
        data : [],
        nestedData:[
          {
            title:"Pearl Harbor Descent Records",
            id:2,
            image:"",
            content:[],
            dropDownData:[
              {
                title:"first title",
                id:4,
                image:"",
                content:["test"],
              }
            ]
          }
        ]
      },
      {
        IntelType : "Unit Data",
        data : [],
        nestedData:[
          {
            title:"Pearl Harbor Descent Recordsss",
            id:3,
            image:"",
            content:[],
            dropDownData:[
              {
                title:"first title",
                id:5,
                image:"",
                content:["test lolol"],
              }
            ]
          }
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
            id:99,
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
