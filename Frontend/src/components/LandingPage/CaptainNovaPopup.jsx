// // src/components/LandingPage/CaptainNovaPopup.js
// import React, { useState, useEffect } from 'react';
// import './Nova.css';

// const CaptainNovaPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Show the popup after 2 seconds
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={`captain-nova-popup ${isVisible ? 'visible' : ''}`}>
//       <img src="/Nova.png" alt="Captain Nova" className="captain-nova-image" />
//       <div className="popup-message">
//         <h3>Welcome to the Cosmic Community!</h3>
//         <p>I'm Captain Nova, here to guide you through your interstellar journey!</p>
//       </div>
//     </div>
//   );
// };

// export default CaptainNovaPopup;



// src/components/LandingPage/CaptainNovaPopup.js
import React, { useState, useEffect } from 'react';
import './Nova.css';

const CaptainNovaPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`captain-nova-container ${isVisible ? 'visible' : ''}`}>
      <img src="/Nova.png" alt="Captain Nova" className="captain-nova-image" />
      <div className={`speech-bubble ${isVisible ? 'visible' : ''}`}>
        <h3>Welcome to the Cosmic Community!</h3>
        <p>I'm Captain Nova, here to guide you through your interstellar journey!</p>
      </div>
    </div>
  );
};

export default CaptainNovaPopup;
