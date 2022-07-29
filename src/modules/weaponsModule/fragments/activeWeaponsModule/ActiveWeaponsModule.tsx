import React from "react";
import { Tab, Widget } from "../../../../components";
import PagesChildTemplate from "../../../../templates/pagesChildTemplate";

const ActiveWeaponsModule = () => {
  return(
    <PagesChildTemplate
      LeftContent={
        <Tab
        content={<>test</>}
        />
      }
    />
  )
}

export default ActiveWeaponsModule;