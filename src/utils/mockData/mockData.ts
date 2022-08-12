let data = [
    {
      link: "Quest1",
      title: "Machine Examination 1",
      client: "9S",
      description: ["Devola and Popola need some materials. Collect the following items from the desert:", "Pristine Screw: 1/1", "Use the gathered materials to repair the Goliath."],
      footdescription: "With its circuitry retored, the Goliath became capable of limited speech. The data retreived, however, was fragmented and of little use. Further repairs are necessary if more detailed information is to be obtainer.",
      status: "Cleared",
    },
    {
      link: "Quest2",
      title: "Devola's Request",
      client: "Devola",
      description: ["Devola nd Popola need some materials. Collect the following items from machines at the abandones factory:", "Stripped screws from machines that are stacked on top of each other.", "Small gears from the little machines with short legs.", "Machine oil from an abandoned truck.", "Stripped Screw: 5/5", "Small Gear: 5/5", "Machine Oil: 1/1","Give Devola and Popola the materials you collected."],
      footdescription: "Devola and popola thanked you for given them the materials. It seems they've been putting their advanced technical knowledge to use... by making daily necessities for the camp.",
      status: "Cleared",
    },
    {
      link: "Quest3",
      title: "Popola's Errand",
      client: "Popola",
      description: ["Devola and Popola need some materials. Collect the following items from the desert:", "Desert Rose: 5/5", "Take the desert roses you collected to Devola and Popola.", "You gave the desert roses to Devola and Popola.", "Now ask Anemone why they continually get asked to do difficult assignments."],
      footdescription: "You asked Anemone for an explanation, but she dodged the subject",
      status: "Cleared",
    },
    {
      link: "Quest4",
      title: "The Twin's Request",
      client: "Devola",
      description: ["Devola and Popola need some materials. Colelct the following items from the forest:", "Tree Sap : 5/5", "Deliver the tree sap to Devola and Popola, and tell them you defeated the enemies." ],
      footdescription: "You recehived desert rose liquor as a reward, as well as the knowledge that Popola and liquor are a dsiastrous combination.",
      status: "Cleared",
    },
    {
      link: "Quest5",
      title: "Trial of Sand",
      client: "Masked Receiptionist",
      description: ["In a corner of the great desert, there is a group of machine lifeforms who claim to dwell in the spot where the true Masked People are chosen. Despite your Uncertainty, you agree to undergo a set of trials to prove your worth."],
      footdescription: "Surpass evbery trial of the Masked Pople",
      status: "Active",
    },
    
    {
      link: "Quest6",
      title: "Half-with Inventor",
      client: "Scientist Machine",
      description:["An Academic machine in a section of Pascal's village claims to be a genius inventor in search of an investor and asks you to make a contribution- for science, of course. Swallow your cynicism and open your pocketbook!"], 
      footdescription: "Surpass evbery trial of the Masked Pople",
      status: "Active",
    },
];

export function getArchive(){
  return data;
}

export function getQuest(link) {
  return data.find((data) => data.link === link);
}