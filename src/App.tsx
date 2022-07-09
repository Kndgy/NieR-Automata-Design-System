import React from 'react';
import styles from './App.module.scss';
import { RoutesPages } from './routes/Routes';
import NavbarModule from './modules/NavBarModule';

function App() {
  return (
      <div className={styles.App}>
        <NavbarModule/>
        <hr/>
        <div className={styles.dottedspaced}/>
        <RoutesPages/>
      </div>
  );
}

export default App;
