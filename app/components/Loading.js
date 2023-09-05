import Image from "next/image";
import pokeball from "../../public/pokeball.png";
import { useEffect } from 'react';

export default function Loading() {
  
    return (
      <div className="p-16 flex flex-col items-center justify-center spinner-container">
        <div className="loading-spinner">
          <Image
            src={pokeball}
            alt={`Pokeball`}
            width={250}
            height={250}
          />
        </div>
        <div className="wave text-lg text-black m-6">
            <span style={{ "--i": 1 }}>R</span>
            <span style={{ "--i": 2 }}>e</span>
            <span style={{ "--i": 3 }}>t</span>
            <span style={{ "--i": 4 }}>r</span>
            <span style={{ "--i": 5 }}>i</span>
            <span style={{ "--i": 6 }}>e</span>
            <span style={{ "--i": 7 }}>v</span>
            <span style={{ "--i": 8 }}>i</span>
            <span style={{ "--i": 9 }}>n</span>
            <span style={{ "--i": 10 }}>g</span>
            <span style={{ "--i": 11 }}> </span>
            <span style={{ "--i": 12 }}>P</span>
            <span style={{ "--i": 13 }}>o</span>
            <span style={{ "--i": 14 }}>k</span>
            <span style={{ "--i": 15 }}>e</span>
            <span style={{ "--i": 16 }}>m</span>
            <span style={{ "--i": 17 }}>o</span>
            <span style={{ "--i": 18 }}>n</span>
            <span style={{ "--i": 19 }}> </span>
            <span style={{ "--i": 20 }}>d</span>
            <span style={{ "--i": 21 }}>a</span>
            <span style={{ "--i": 22 }}>t</span>
            <span style={{ "--i": 23 }}>a</span>
            <span style={{ "--i": 24 }}> </span>
            <span style={{ "--i": 25 }}>.</span>
            <span style={{ "--i": 26 }}>.</span>
            <span style={{ "--i": 27 }}>.</span>
        </div>
      </div>
    );
  }