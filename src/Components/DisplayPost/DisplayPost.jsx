import './DisplayPost.css';


const DisplayPost = (props) => {
    return ( 
        <table className="table">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>

        </thead>
        <tbody>
         {props.userEntries.map((entry) => {
          return (
            <div className="display-post-form">
              <tr>
                <td>{entry.name}</td>
                <td>{entry.post}</td>
              </tr>
            </div>


          );
         })}
        </tbody>
      </table>
     );
}
 
export default DisplayPost;