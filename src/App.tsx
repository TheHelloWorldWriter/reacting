import { BackgroundDecoration } from './components/BackgroundDecoration';
import { GreetingDialog } from './components/GreetingDialog';
import { useGreeting } from './hooks/useGreeting';

function App() {
  const { name, setName, handleShuffle, greeting } = useGreeting('React');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#087ea4] via-[#61DAFB] to-[#087ea4] relative overflow-hidden">
      {/* Background Decorations */}
      <BackgroundDecoration top="8%" left="12%" text={greeting} />
      <BackgroundDecoration top="15%" left="65%" text={greeting} />
      <BackgroundDecoration top="35%" left="5%" text={greeting} />
      <BackgroundDecoration top="60%" left="75%" text={greeting} />
      <BackgroundDecoration top="75%" left="20%" text={greeting} />
      <BackgroundDecoration top="25%" left="80%" text={greeting} />
      <BackgroundDecoration top="85%" left="60%" text={greeting} />
      <BackgroundDecoration top="45%" left="85%" text={greeting} />
      <BackgroundDecoration top="10%" left="35%" text={greeting} className="hidden lg:block" />
      <BackgroundDecoration top="70%" left="40%" text={greeting} className="hidden xl:block" />

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
