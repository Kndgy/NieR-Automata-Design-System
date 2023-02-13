import { useParams } from "react-router-dom";
import { getArchivesMockID, getNestedArchivesMockID } from "../../../utils/mockData/archivesMockData";

export const Archives = () => {
    const params = useParams();
    const paramType = params.type
  
    let intellistId = getArchivesMockID(paramType, parseInt(params.intelid));
    let secondId = getNestedArchivesMockID( paramType, parseInt(params.intelid))

    const data = intellistId || secondId

    const mapCheck = () => {
        if (!data.hasOwnProperty("content")) {
            return <>data yorue looking is nt here lol</>;
        }
    
        switch (true) {
            case data.content[0].hasOwnProperty("data"):
                return <>{data.content[0].data.map((items, index) => <div key={index + 1}>{items}<p /></div>)}</>;
            case data.content[0].hasOwnProperty("content"):
                return <>{data.content[0].content}</>;
            case data.content.some((items) => items.time):
                return <>{data.content.map((items, index) => <div key={index + 1}>Elapsed Time: {items.time}<br />{items.descriptions} <p /> </div>)}</>; 
            case data.content[0].hasOwnProperty("data2"):
                return <>{data.content[0].data2}</>;
            default:
                return <>data yorue looking is nt here lol</>;
        }
    }
    return (
        <> {mapCheck()} </>
    )
}