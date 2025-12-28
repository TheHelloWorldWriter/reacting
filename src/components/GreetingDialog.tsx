import { SvgIcon } from './SvgIcon';

interface GreetingDialogProps {
  name: string;
  greeting: string;
  onNameChange: (name: string) => void;
  onShuffle: () => void;
}

export function GreetingDialog({ name, greeting, onNameChange, onShuffle }: GreetingDialogProps) {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-2xl transition-all duration-300">
      {/* Title Bar */}
      <div className="bg-linear-to-r from-[#61DAFB] to-[#087ea4] px-6 py-4">
        <h2 className="text-white font-semibold text-lg transition-all duration-300">
          {greeting}
        </h2>
      </div>

      {/* Content */}
      <div className="p-8 bg-gray-50">
        <div className="flex items-center gap-2 text-2xl">
          <span className="text-gray-700 font-medium">Hello,</span>
          <input
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-48 px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-[#61DAFB] transition-colors duration-200 text-gray-800"
            placeholder="Enter name..."
          />
          <span className="text-gray-700 font-medium">!</span>
          <button
            onClick={onShuffle}
            className="ml-2 w-10 h-10 flex items-center justify-center bg-[#61DAFB] hover:bg-[#087ea4] text-white rounded-md transition-colors duration-200"
            aria-label="Shuffle name"
          >
            <SvgIcon name="shuffle" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
