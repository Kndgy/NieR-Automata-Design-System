import React from "react";
import { useParams } from "react-router-dom";
import { Widget } from "../../components";
import { getItemsId } from "../../utils/mockData/ItemsMockData";

export const ActiveItemsModule = () => {
  let params = useParams();
  let itemsId = getItemsId(parseInt(params.itemid, 10));

  return(
    <Widget
      title={itemsId.name}
      content={
        <div style={{display:"flex", flexDirection:"column"}}>
          <p>{itemsId.image}</p>
          <p>{itemsId.name}</p>
          <p>{itemsId.quantity}</p>
        </div>
      }
    />
  )
}