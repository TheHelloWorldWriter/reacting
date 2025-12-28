import { useState, useCallback } from 'react';
import { SHUFFLE_WORDS } from '../constants/shuffleWords';

export function useGreeting(initialValue: string = 'React') {
  const [name, setName] = useState(initialValue);

  const handleShuffle = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * SHUFFLE_WORDS.length);
    setName(SHUFFLE_WORDS[randomIndex]);
  }, []);

  return {
    name,
    setName,
    handleShuffle,
    greeting: `Hello, ${name}!`,
  };
}
