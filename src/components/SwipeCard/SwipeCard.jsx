import './index.css';

import React, { useEffect, useRef, useState } from 'react';
export default function Card({ id, onLike, onDislike }) {
  const X_DELTA = 200;
  const swipeCard = useRef(null);
  const [startingPosition, setStartingPosition] = useState(null);

  useEffect(() => {
    // swipeCard.current.style.translateZ = -30 * id + 'px';
    // swipeCard.current.style.translateY = 30 * id + 'px';
    // swipeCard.current.style.rotate = 2 * id + 'deg';
    // swipeCard.current.style.transition = '200ms ease-in';
    // swipeCard.current.style.transform = `translateY(calc(-2px * ${id}))`;
    swipeCard.current.addEventListener('mousedown', handleMouseDown);

    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [swipeCard]);

  useEffect(() => {
    if (!startingPosition) {
      document.removeEventListener('mousemove', handleMouseMove);
      return;
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [startingPosition]);

  const handleMouseDown = (e) => {
    swipeCard.current.style.transition = 'transform 0s';
    const { clientX, clientY } = e;
    setStartingPosition({ x: clientX, y: clientY });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const xOffset = clientX - startingPosition.x;
    const yOffset = clientY - startingPosition.y;
    const rotateDelta = xOffset * 0.05;
    swipeCard.current.style.transform = `translate(${xOffset}px, ${
      yOffset - 2 * id
    }px) rotate(${rotateDelta}deg)`;
  };

  const handleMouseUp = (e) => {
    const { clientX } = e;

    const xOffset = clientX - startingPosition.x;
    console.dir(startingPosition);
    setStartingPosition(null);
    document.removeEventListener('mousemove', handleMouseMove);
    swipeCard.current.style.transition = 'transform 200ms';
    swipeCard.current.style.transform = '';
    if (Math.abs(xOffset) > X_DELTA) {
      if (xOffset > 0) {
        onLike(1, swipeCard.current);
      } else {
        onDislike(-1, swipeCard.current);
      }
      setTimeout(() => {
        swipeCard.current.remove();
      }, 500);
    }
  };

  return (
    <div
      ref={swipeCard}
      className="card w-80 h-[400px] bg-zinc-100 cursor-pointer rounded-lg shadow-lg flex items-center justify-center"
      style={{ '--i': id }}
    >
      {id}
    </div>
  );
}
