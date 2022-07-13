import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const [entries, setEntries] = useState([{name: 'Josmar Diaz', post: 'This is my first post!'}, {name: 'Joey Martinez', post: 'There we go! Were getting somewhere!'}])
  
  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }
  
  return (
    <div>
      <CreatePost addNewPostProperty={addNewPost} />
      <DisplayPost userEntries={entries} />
    </div>
  );
}

export default App;
