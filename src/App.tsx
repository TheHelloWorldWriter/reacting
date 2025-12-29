import { BackgroundDecoration } from './components/BackgroundDecoration';
import { GreetingDialog } from './components/GreetingDialog';
import { useGreeting } from './hooks/useGreeting';

function App() {
  const { name, setName, handleShuffle, greeting } = useGreeting('React');

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-[#087ea4] via-[#61DAFB] to-[#087ea4] select-none">
      {/* Background Decorations - Always visible (mobile-first) */}
      <BackgroundDecoration top="10%" left="5%" text={greeting} />
      <BackgroundDecoration top="20%" left="75%" text={greeting} />
      <BackgroundDecoration top="70%" left="15%" text={greeting} />
      <BackgroundDecoration top="80%" left="70%" text={greeting} />

      {/* Additional decorations for medium screens and up */}
      <BackgroundDecoration top="15%" left="40%" text={greeting} className="hidden md:block" />
      <BackgroundDecoration top="50%" left="80%" text={greeting} className="hidden md:block" />

      {/* Additional decorations for large screens and up */}
      <BackgroundDecoration top="35%" left="10%" text={greeting} className="hidden lg:block" />
      <BackgroundDecoration top="60%" left="50%" text={greeting} className="hidden lg:block" />

      {/* Additional decorations for extra-large screens only */}
      <BackgroundDecoration top="45%" left="25%" text={greeting} className="hidden xl:block" />
      <BackgroundDecoration top="85%" left="45%" text={greeting} className="hidden xl:block" />

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
