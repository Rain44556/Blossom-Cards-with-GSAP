import { useLayoutEffect, useRef, useState } from 'react';
import './App.css'
import FlowerCard from './components/flowerCard';
import { cards } from './data/flowerData';
import {gsap} from 'gsap'

function App() {
const [selectedCard, setSelectedCard] = useState([0]);
const flowerCardsRef =  useRef([]);
flowerCardsRef.current = [];
const bgRef = useRef();

  const handleFlowerCard = (key) =>{
        setSelectedCard(key);
  }

  useLayoutEffect(() => {
    let flowerContext = gsap.context(() => {
      gsap.utils.toArray(flowerCardsRef.current).forEach((card, idx) => {
        if (`card-${idx}` === `card-${selectedCard}`) {
          gsap.to(bgRef.current, {
            backgroundColor: cards[idx].bgColor,
            duration: 1,
            ease: "none",
          });

          gsap.to('.flower-img',{
            top: "-190px",
            delay: 0.7,
            duration: 2,
            ease: "none",
          })


    gsap.fromTo(".bg-flower",{
        scale: 1.1,
        x: -40,
        y: -30,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.8,
        ease: "power3.out",
      }
    );
    gsap.to(".bg-flower", {
      y: 10,
      scale: 1.02,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      duration: 3,
    });

        }
      });
    });
    return () => flowerContext.revert();
  }, [selectedCard]);

const flowerAddToRef = (e) =>{
if(e && !flowerCardsRef.current.includes(e)){
  flowerCardsRef.current.push(e);
}
  }
console.log(flowerCardsRef.current)

  return (
   <div ref={bgRef} className='h-screen flex justify-center items-center'>
       {cards.map((card, key) => {
        return (
          <div
          ref={flowerAddToRef}
          key={key} 
          onClick={() => handleFlowerCard(key)}
          className={`card-${key} ${key === selectedCard ? "w-[400px]" : "w-24"} transition-all ease-in-out duration-[2000ms] h-96 cursor-pointer`}>
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
