import React from 'react';
import Map from './pages/map';
import styles from './App.module.scss';
import { Bar, Button } from '@kaineee/nier-automata-ui-library';

const test = {
  testjson:[
    {
      Text:"MAP",
      
    },
    {
      Text:"QUESTS"
    },
    {
      Text:"ITEMS"
    },
    {
      Text:"WEAPONS"
    },
    {
      Text:"SKILLS"
    },
    {
      Text:"INTEL"
    },
    {
      Text:"SYSTEM"
    }
  ]
}

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.NavBar}>
        <Bar/>
        {test.testjson.map((item,key)=>{
          return(
            <Button key={key} text={item.Text} />
          )
        })}
      </div>
      <Map />
    </div>
  );
}

export default App;
