import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import EditPage from './Pages/EditPage';
import AddPage from './Pages/AddPage';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Route path='/' exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}></HomePage>
          </Route>
          <Route path='/edit' exact>
            <EditPage exerciseToEdit={exerciseToEdit}></EditPage>
          </Route>
          <Route path='/add' exact>
            <AddPage></AddPage>
          </Route>
        </header>
      </Router>
    </div>
  );
}

export default App;
