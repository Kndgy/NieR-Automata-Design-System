let data = [
    {
      link: "Quest1",
      title: "Quest 1",
      client: "Client 1",
      description: "Description 1",
      footdescription: "Description 2",
      status: "Active",
    },
    {
      link: "Quest4",
      title: "Quest 4",
      client: "Client 1",
      description: "Description 1",
      footdescription: "Description 2",
      status: "Active",
    },
    {
      link: "Quest3",
      title: "Quest 3",
      client: "Client 1",
      description: "Description 1",
      footdescription: "Description 2",
      status: "Active",
    },
    {
      link: "Quest9",
      title: "Quest 9",
      client: "Client 1",
      description: "Description 1",
      footdescription: "Description 2",
      status: "Active",
    },
    {
      link: "Quest5",
      title: "Quest 5",
      client: "Client 2",
      description: "Description 3",
      footdescription: "Description 4",
      status: "Completed",
    },
    {
      link: "Quest8",
      title: "Quest 8",
      client: "Client 3",
      description: "Description 5",
      footdescription: "Description 6",
      status: "Completed",
    },
    {
      link: "Quest2",
      title: "Quest 2",
      client: "Client 2",
      description: "Description 3",
      footdescription: "Description 4",
      status: "Completed",
    },
    {
      link: "Quest14",
      title: "Quest 14",
      client: "Client 3",
      description: "Description 5",
      footdescription: "Description 6",
      status: "Completed",
    },
    {
      link: "Quest11",
      title: "Quest 11",
      client: "Client 3",
      description: "Description 5",
      footdescription: "Description 6",
      status: "Completed",
    },
    {
      link: "Quest6",
      title: "Quest 6",
      client: "Client 2",
      description: "Description 3",
      footdescription: "Description 4",
      status: "Completed",
    },
    {
      link: "Quest10",
      title: "Quest 10",
      client: "Client 3",
      description: "Description 5",
      footdescription: "Description 6",
      status: "Completed",
    }
];

export function getArchive(){
  return data;
}

export function getQuest(link) {
  return data.find((data) => data.link === link);
}