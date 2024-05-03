import { useEffect, useState } from 'react';

const Clock = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // useEffect sem dependencias é executado apenas no mounte e unmount
  useEffect(
    () => {
      // mount
      const interval = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
      return () => {
        // unmount
        clearInterval(interval);
      };
    },
    [
      /* sem dependencias */
    ]
  );

  return <div>Hora atual: {currentDate.toLocaleString()}</div>;
};

export default Clock;
