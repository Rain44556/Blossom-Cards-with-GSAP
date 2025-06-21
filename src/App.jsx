import './App.css'
import FlowerCard from './components/flowerCard';
import { cards } from './data/flowerData';

function App() {

  return (
   <div className='h-screen flex justify-center items-center'>
       {cards.map((card) => {
        return (
          <div className="h-96 w-24 cursor-pointer">
            <FlowerCard card={card}></FlowerCard>
          </div>
        );
      })}
   </div>
  )
}

export default App
