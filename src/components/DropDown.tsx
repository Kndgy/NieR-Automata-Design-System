import React from "react";

type DropDownTypes = {
  Title?: string | React.ReactNode;
  Content?: React.ReactNode;
}

export const DropDown = ({Title, Content}: DropDownTypes) => {
  return(
    <details>
      <summary> {Title} </summary>
      {Content}
    </details>
  )
}