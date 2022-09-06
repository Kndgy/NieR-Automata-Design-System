let archivesMockData = [
  {
    IntelType : "Archives",
    data : [
      {
        title:"String",
        id:2,
        descriptions:["test", 'more test'
        ],
        time:["1st", "2nd"]
      }
    ],
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
    nestedData:null
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
    nestedData:null
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
    nestedData:null
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
    nestedData:null
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
    nestedData:null
  }
];

export function getArchivesMockData(){
  return archivesMockData;
}

export function getArchivesMockID(id){
  return archivesMockData.find((data)=>data.data[0].id===id)
}

const allFooterList = [
  {
    data: [
      {
        title: "Product",
        id: "001",
        url: [
          {
            id: "012",
            linkName: "How it Works",
            linkUrl: "how-it-works"
          },
          {
            id: "013",
            linkName: "Enterprise",
            linkUrl: "enterprise"
          },
          {
            id: "014",
            linkName: "Pricing",
            linkUrl: "pricing"
          }
        ]
      },
      {
        title: "Features",
        id: "002",
        url: [
          {
            id: "022",
            linkName: "Version Control",
            linkUrl: "version-control"
          },
          {
            id: "023",
            linkName: "Design Collaboration",
            linkUrl: "design-collaboration"
          },
          {
            id: "024",
            linkName: "Developer Handoff",
            linkUrl: "developer-handoff"
          }
        ]
      },
      {
        title: "Resources",
        id: "003",
        url: [
          {
            id: "032",
            linkName: "Getting Started",
            linkUrl: "getting-started"
          },
          {
            id: "033",
            linkName: "Blog",
            linkUrl: "blog"
          },
          {
            id: "034",
            linkName: "Books",
            linkUrl: "books"
          }
        ]
      },
      {
        title: "Community",
        id: "004",
        url: [
          {
            id: "042",
            linkName: "Twitter",
            linkUrl: "twitter"
          },
          {
            id: "043",
            linkName: "LinkedIn",
            linkUrl: "linkedin"
          },
          {
            id: "044",
            linkName: "Facebook",
            linkUrl: "facebook"
          }
        ]
      },
      {
        title: "Company",
        id: "005",
        url: [
          {
            id: "052",
            linkName: "About us",
            linkUrl: "about-us"
          },
          {
            id: "053",
            linkName: "Careers",
            linkUrl: "careers"
          },
          {
            id: "054",
            linkName: "Legal",
            linkUrl: "legal"
          }
        ]
      }
    ]
  }
];