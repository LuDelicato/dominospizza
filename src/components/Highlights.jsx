import React, { useEffect, useState } from 'react';

export default function Highlights(props) {
  const [highlights, setHighLights] = useState([]);

  useEffect(() => {
    fetch('/api/highlights.json')
      .then((response) => response.json())
      .then((data) => setHighLights(data));
  }, []);

  return (
    <main id='highlights'>
      <ul>
        {highlights.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              onClick={(event) => {
                event.preventDefault();
                props.toggleProducts(true);
              }}>
              <img src={item.image} alt={item.description} />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
