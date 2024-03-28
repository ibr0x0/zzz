// import logo from "./logo.svg"
// import './App.css'

// function Button({ onClick, children }) {
//   return (
//     <button onClick={e => {
//       e.stopPropagation();
//       onClick();
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div className="Toolbar" onClick={() => {
//       alert('You clicked on the toolbar!');
//     }}>
//       <Button onClick={() => alert('Playing!')}>
//         Play Movie
//       </Button>
//       <Button onClick={() => alert('Uploading!')}>
//         Upload Image
//       </Button>
//     </div>
//   );
// }

import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0); // state variable
  const [showMore, setShowMore] = useState(); // state variable

  function BackClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleClick() {
    if (index < sculptureList.length - 1) {
      setIndex(index + 1);
    }
  }

  function ShowMoreClick() {
    setShowMore(!showMore);
  }

        
//rerendering
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={BackClick} disabled={index == 0}>
        Back
      </button>
      <button onClick={handleClick} disabled={index == sculptureList.length -1}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <button onClick={ShowMoreClick}>{showMore ? "Hide" : "Show"}Shou detalis</button>
      <p>
        {showMore && <p>{sculpture.description}</p>}
      </p>
    </>
  );
}


export function Counter() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    setNumber(number - 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      {number}
      <button onClick={increment}>+</button>
    </div>
  )
}

