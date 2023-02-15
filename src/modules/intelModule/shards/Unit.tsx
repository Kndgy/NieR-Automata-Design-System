import { useParams } from "react-router-dom";
import { getArchivesMockID, getNestedArchivesMockID } from "../../../utils/mockData/archivesMockData";

export const Unit = () => {
    const params = useParams();
    const paramType = params.type
  
    let intellistId = getArchivesMockID(paramType, parseInt(params.intelid));
    let secondId = getNestedArchivesMockID( paramType, parseInt(params.intelid))

    const data = intellistId || secondId

    console.log(data.content.map((items)=>items))
    
    const mapCheck = () => {
        if (!data.hasOwnProperty("content")) {
            return <>weird, it seems the unit data is empty</>;
        }
    
        switch (true) {
            case data.hasOwnProperty("content"):
                return <> {data.content.map((items,index)=><div key={index+1}>{items}<br/></div>)} </>
            default:
                return <>weird, it seems the unit data is empty</>;
        }
    }

    return (
        <> {mapCheck()} </>
    )
}