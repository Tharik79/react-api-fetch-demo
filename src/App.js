

import { useEffect, useState } from 'react';
import './App.css';
// import ComLists from './ComLists';
import Navbar from './Navbar';

function App() {

  const [comments, SetComments] = useState({});


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(data => data.json())
    .then((data) => {
      //console.log(data);
      SetComments(data);
    })
  }, []);
    
  
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="container">
        {
          comments.map(comment => {
            return(
              <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <p class="card-text">
                  {comment.body}
                </p>
              </div>
            </div>
            )
          })
       
}
      </div>
    </div>
  );
}

export default App;
