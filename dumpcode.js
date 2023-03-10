import React, { useState } from 'react';

function IconSizeSlider() {
  const [size, setSize] = useState(50);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value));
  }

  return (
    <div>
      <input type="range" min="0" max="100" value={size} onChange={handleSizeChange} />
      <Icon size={size} />
    </div>
  );
}

function Icon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24">
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
);
}