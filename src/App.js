import React, { useState } from 'react';




function App() {


const [entries, setEntries] = useState([{name: 'Josmar Diaz', post: 'This is my first post!'}, {name: 'Joey Martinez', post: 'There we go! Were getting somewhere!'}])
  
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
          </tr>

        </thead>
        <tbody>
         {entries.map((entry) => {
          return (
            <tr>
              <td>{entry.name}</td>
              <td>{entry.post}</td>
            </tr>

          );
         })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
