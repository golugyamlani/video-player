import React from 'react';
import Plyr from 'plyr-react';
import "plyr-react/plyr.css";
import { Play } from 'lucide-react';

function App() {
  const videoOptions = {
    autoplay: true,
    muted: true,
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    settings: ['quality', 'speed'],
  };

  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        type: 'video/mp4',
        size: 576,
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Play className="text-blue-500 w-8 h-8" />
          <h1 className="text-white text-2xl font-bold ml-2">Video Player</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
            <Plyr 
              source={videoSrc}
              options={videoOptions}
            />
          </div>
          
          <div className="mt-6 bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-3">About This Video</h2>
            <p className="text-gray-300">
              This is a sample video showcasing the Plyr video player integration. 
              The player automatically starts when the page loads and includes standard 
              video controls for the best user experience.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Video Player Demo. Powered by Plyr.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;