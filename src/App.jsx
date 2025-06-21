import { useState } from 'react';
import './App.css'
import FlowerCard from './components/flowerCard';
import { cards } from './data/flowerData';

function App() {
const [selectedCard, setSelectedCard] = useState([0]);

  const handleFlowerCard = (key) =>{
setSelectedCard(key);
  }

  return (
   <div className='h-screen flex justify-center items-center'>
       {cards.map((card, key) => {
        return (
          <div
          key={key} 
          onClick={() => handleFlowerCard(key)}
          className={`${key === selectedCard ? "w-[400px]" : "w-24"} transition-all ease-in-out duration-[2000ms] h-96 cursor-pointer`}>
            <FlowerCard 
            card={card}
            selectedCard={selectedCard}
            idx={key}>
            </FlowerCard>
          </div>
        );
      })}
   </div>
  )
}

export default App
