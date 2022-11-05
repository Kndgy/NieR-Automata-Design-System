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
                    descriptions:"Re-Activation complete. A check of my body reveals various failures."
                  },
                  {
                    time:"00:10:13",
                    descriptions:"desc 2"
                  },
                  {
                    time:"00:15:21",
                    descriptions:"desc 3"  
                  }
                ]
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
