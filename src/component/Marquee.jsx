import React, { useState } from "react";
import Marquee from "react-fast-marquee";

function Marque() {
    const [speed, setSpeed] = useState(50)

  return (
    <div className="bg-black text-white py-3 text-lg font-medium mt-10 sm:mt-12 cursor-pointer" onMouseEnter={() => setSpeed(25)} onMouseLeave={() => setSpeed(50)}>
      <Marquee speed={speed}>
        🚀 Welcome to Apple Store — New MacBook Pro, iPad Pro & iPhone 17 Available Now! ⚡
      </Marquee>
    </div>
  );
}

export default Marque
