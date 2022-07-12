import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';



function App() {


const [entries, setEntries] = useState([{name: 'Josmar Diaz', post: 'This is my first post!'}, {name: 'Joey Martinez', post: 'There we go! Were getting somewhere!'}])
  
  
  return (
    <div>
      <DisplayPost userEntries={entries} />
    </div>
  );
}

export default App;
