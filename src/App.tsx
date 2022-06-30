import React from 'react';
import Map from './pages/map';
import styles from './App.module.scss';
import { Bar, Button } from '@kaineee/nier-automata-ui-library';
import { Link } from 'react-router-dom';
import { RoutesPages } from './routes/Routes';
import NavbarModule from './modules/NavBarModule';

function App() {
  return (
      <div className={styles.App}>
        <NavbarModule/>
        <RoutesPages/>
      </div>
  );
}

export default App;
