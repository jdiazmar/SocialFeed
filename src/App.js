import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {

  const [entries, setEntries] = useState([{name: 'Josmar Diaz', post: 'This is my first post!'}, {name: 'Joey Martinez', post: 'There we go! Were getting somewhere!'}])
  
  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }
  
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='nav-bar'>
          <NavBar />
        </div>
          <div className='col-md-12'>
            <div className='border-box'>
              <CreatePost addNewPostProperty={addNewPost} />
            </div>
            <div className='border-box'>
              <DisplayPost userEntries={entries} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
