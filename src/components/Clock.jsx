import { useEffect, useState } from 'react';

const Clock = (props) => {
  // inicia o state com a hora atual
  const [currentDate, setCurrentDate] = useState(props.startDate);

  // useEffect sem dependencias é executado apenas no mounte e unmount - dispara o evento
  useEffect(
    () => {
      // mount
      const interval = setInterval(() => {
        setCurrentDate((previousDate) => {
          return new Date(previousDate.getTime() + 5000);
        });
      }, 5000);
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
