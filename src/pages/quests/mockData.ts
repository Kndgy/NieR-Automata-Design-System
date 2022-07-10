let data = [
    {
      title: "Quest 1",
      client: "Client 1",
      description: "Description 1",
      footdescription: "Description 2",
      status: "Active",
    },
    {
      title: "Quest 2",
      client: "Client 2",
      description: "Description 3",
      footdescription: "Description 4",
      status: "Completed",
    },
    {
      title: "Quest 3",
      client: "Client 3",
      description: "Description 5",
      footdescription: "Description 6",
      status: "Cleared",
    }
];

export function getArchive(){
  return data;
}

export function getQuest(title) {
  return data.find((data) => data.title === title);
}