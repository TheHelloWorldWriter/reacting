import { useState } from 'react';
import { BackgroundDecoration } from './components/BackgroundDecoration';
import { GreetingDialog } from './components/GreetingDialog';
import { useGreeting } from './hooks/useGreeting';
import { generateRandomPositions } from './utils/randomPosition';

function App() {
  const { name, setName, handleShuffle, greeting } = useGreeting('React');
  const [decorations] = useState(() => generateRandomPositions(10));

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#087ea4] via-[#61DAFB] to-[#087ea4] relative overflow-hidden">
      {/* Background Decorations */}
      {decorations.map((position) => (
        <BackgroundDecoration
          key={position.id}
          position={position}
          text={greeting}
        />
      ))}

      {/* Main Dialog */}
      <GreetingDialog
        name={name}
        greeting={greeting}
        onNameChange={setName}
        onShuffle={handleShuffle}
      />
    </div>
  );
}

export default App;
