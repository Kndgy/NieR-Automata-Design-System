import React from 'react';
import styles from './App.module.scss';
import { RoutesPages } from './routes/Routes';
import NavbarModule from './modules/navBarModule';

function App() {
  return (
      <div className={styles.App}>
        <NavbarModule/>
        <RoutesPages/>
      </div>
  );
}

export default App;
