import React, { useState, useEffect } from 'react';

const getPath = (letter) => {
  
  const paths = {
    'C': 'M30 10 Q10 10 10 30 Q10 50 30 50',
    'o': 'M20 15 Q10 15 10 30 Q10 45 20 45 Q30 45 30 30 Q30 15 20 15',
    'n': 'M10 45 L10 15 L30 45 L30 15',
    'e': 'M30 30 L10 30 M30 15 Q10 15 10 30 Q10 45 30 45',
    'c': 'M30 15 Q10 15 10 30 Q10 45 30 45',
    't': 'M20 15 L20 45 M10 15 L30 15',
    'P': 'M10 45 L10 15 L25 15 Q35 15 35 25 Q35 35 25 35 L10 35',
    'r': 'M10 45 L10 15 L30 15',
  };
  return paths[letter] || `M20 15 L20 45`; 
};

const Loader = () => {
  const letters = "ConnectPro".split('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`flex items-center  justify-center fixed inset-0 bg-[#5900D9] z-50 ${isLoading ? 'block' : 'hidden'}`}>
      <div className="flex">
        {letters.map((letter, index) => (
          <svg
            key={index}
            className="w-4 md:w-12 h-12 mx-1 "
            viewBox="0 0 40 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={getPath(letter)}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0 100"
                to="100 0"
                dur="1.8s"
                begin={`${index * 0.1}s`}
                fill="freeze"
              />
            </path>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default Loader;