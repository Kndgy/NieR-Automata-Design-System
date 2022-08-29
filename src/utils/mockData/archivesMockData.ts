let archivesMockData = [
  {
    IntelType : "Archives",
    data : [
      {
        title:"11B's Escape Plan",
        id:1,
        descriptions:[
          {
            time:"00:02:13",
            description:"Re-activation complete. A check of my ody reveals various failures.\nCommunication functions have been destrioyed. I cannot contact my team or the bunker. I leave a draft of this message here as a log."
          },
          {
            time:"00:10:13",
            description:"I verify the plan once more. Using my supposed destruction in this sortle as a gulse, i sever all communication. I then pass beneath the abandoned factory and escape. Further analysis reveals that I took anti-air fire while in the flight unitm resulting in damage to my body. No matter-it can be repaired."
          },
        ]
      },
      {
        dataType:"dropdown",
        id:1,
        nestedData:[
          {
            title:"YoRHa: Gunner 16",
            descriptions:[
              {
                description:" A unit from the experimental YoRHa squadron that was utilized during the 14th Machine War."
              }
            ]
          },
          {
            title:"YoRHa: Scanner 21",
            description:"A unit from the experimental YoRHa squadron that wasuti;ized during the 14th Machine War, Number 21 possessed a cool and analytical personality that perfectky fit her role as a Scanner."
          }
        ]
      }
    ]
  },
  {
    IntelType : "Unit Data",
    data : [
      {
        id:1,
      }
    ]
  },
  {
    IntelType : "Tutorials",
    data : [
      {
        id:1,
      }
    ]
  },
  {
    IntelType : "Weapon Stories",
    data : [
      {
        id:1,
      }
    ]
  },
  {
    IntelType : "Picture Books",
    data : [
      {
        id:1,
      }
    ]
  },
  {
    IntelType : "Novel",
    data : [
      {
        id:1,
      }
    ]
  }
];

export function getArchivesMockData(){
  return archivesMockData;
}

export function getArchivesMockID(id){
  return archivesMockData.find((data)=>data.data[0].id===id)
}