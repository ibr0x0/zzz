import './App.css'
import { useState } from 'react';
import { productsList } from './testdata'; // Assuming your array is in a file named 'products.js'

function StoreCards() {
  const [index, setIndex] = useState(0); // state variable
  const [showMore, setShowMore] = useState(); // state variable

  function ShowMoreClick() {
    setShowMore(!showMore);
  }

  function BackClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleClick() {
    if (index < productsList.length - 1) {
      setIndex(index + 1);
    }
  }

  return (
    <div className="store-cards">
      {productsList.map(product => (
        <div key={product.id} className="card">
          <div className='image'>
            <button onClick={BackClick} disabled={index == 0}>Back</button>
            <img src={product.thumbnail} alt={product.title} />
            <button onClick={handleClick} disabled={index == sculptureList.length -1}>Next</button>
          </div>
          <div className="card-details">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={ShowMoreClick}>{showMore ? "Hide" : "Show"}..</button>
            <p>
                {showMore && <p>{product.description}</p>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoreCards;
