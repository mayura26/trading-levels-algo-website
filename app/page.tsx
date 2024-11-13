// TODO: Split image into top section, and then features in second section
// TODO: Add space for video
export default function Home() {
  return (
    // Main container with a background image
    <div className="min-h-screen bg-[url('/trading-background.png')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay to make text more readable */}
      <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center p-8 text-white">
        <main className="max-w-3xl mx-auto text-center">
          {/* Bot name */}
          <h1 className="text-5xl font-bold mb-6">Trading Levels Algo</h1>
          
          {/* Feature list */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="list-none space-y-4 text-left">
              <li className="flex items-center">
                <span className="mr-2">📈</span> 
                Automated trading strategies
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎯</span>
                Real-time market analysis
              </li>
              <li className="flex items-center">
                <span className="mr-2">⚡</span>
                High-frequency trading capabilities
              </li>
              <li className="flex items-center">
                <span className="mr-2">📊</span>
                Advanced risk management
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
