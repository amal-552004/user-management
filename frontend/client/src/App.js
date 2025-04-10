import React from 'react';
import './App.css';
import UserList from './compenents/UserList';  // On va importer ton composant UserList

function App() {
  return (
    <div className="App">
      <h1>Gestion des Utilisateurs</h1>
      <UserList /> {/* On ajoute notre composant ici */}
    </div>
  );
}

export default App;
