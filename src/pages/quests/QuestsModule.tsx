import React from "react";
import { Link, Outlet,
  // useSearchParams 
} from "react-router-dom";
import { getArchive } from "./mockData";

const ActiveQuestsModule = () => {
  let archive = getArchive();
  // var [searchParams, setSearchParams] = useSearchParams();
  return(
    <div style={{display:"flex", flexDirection:"column"}}>
        {archive
          // .filter((archive) => {
          //   let filter = 'tubt';
          //   if (!filter) return true;
          //   let name = archive.name.toLowerCase();
          //   return name.startsWith(filter.toLowerCase());
          // })
          .map((item)=>(
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/quest/quests/${item.title}`}
          key={item.title}>
            {item.title}
          </Link>
        ))}
        <Outlet/>
    </div>
  )
}

export default ActiveQuestsModule