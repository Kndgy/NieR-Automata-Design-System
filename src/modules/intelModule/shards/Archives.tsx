import { useParams } from "react-router-dom";
import { getArchivesMockID, getNestedArchivesMockID } from "../../../utils/mockData/archivesMockData";

export const Archives = () => {
    const params = useParams();
    const paramType = params.type
  
    let intellistId = getArchivesMockID(paramType, parseInt(params.intelid));
    let secondId = getNestedArchivesMockID( paramType, parseInt(params.intelid))

    const data = intellistId || secondId

    console.log(data.content[0])
    
    const mapCheck = () => {
        if(data.hasOwnProperty("content")){
            if(data.content[0].hasOwnProperty("data")){
                return <>{data.content[0].data.map((items)=><>{items}<p/></>)}</>
            }
            else if(data.content[0].hasOwnProperty("content")){
                return <>{data.content[0].content}</>
            }
            else if(data.content[0].hasOwnProperty("data2")){
                return <>{data.content[0].data2}</>
            }
            else{
                return <>data yorue looking is nt here lol</>
            }
        }else{
            return <>data yorue looking is nt here lol</>
        }
    }
    return (
        <> {mapCheck()} </>
    )
}