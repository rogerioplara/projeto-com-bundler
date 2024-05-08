import { useEffect, useState } from 'react';

// maneira melhor escrita de usar o useEffect sem parâmetro, que exibe somente uma vez
// dessa maneira, na chamada da função dentro do elemento, não precisa passar o parâmetro após o callback
const useDidMount = (callback) => useEffect(callback, []);

const Step = () => {
  const [step, setStep] = useState(0);

  // Inspeção dos elementos, esse executa somente uma vez
  // será executado somente quando o elemento for desmontado
  useDidMount(() => {
    console.log('Montou: ', step);
    return () => {
      console.log('Desmontou: ', step);
    };
  });

  // atualiza conforme incrementa ou decrementa
  useEffect(() => {
    console.log('Setup: ', step);
    return () => {
      console.log('Cleaning: ', step);
    };
  }, [step]);

  const handleDecrement = () => {
    setStep(step - 1);
  };

  const handleIncrement = () => {
    setStep(step + 1);
  };

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>Step: {step}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Step;
