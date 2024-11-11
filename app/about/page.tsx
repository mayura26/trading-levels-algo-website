export default function About() {
    return (
      <div className="min-h-screen bg-[url('/trading-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center p-8 text-white">
          <main className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mt-8 text-left">
              <p className="mb-4">
                Trading Levels Algo was founded by experienced traders and developers 
                with a vision to democratize algorithmic trading.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Our Mission</h2>
              <p className="mb-4">
                To provide traders with professional-grade automated trading solutions 
                that are both powerful and user-friendly.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Why Choose Us</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Years of market experience</li>
                <li>Proven trading strategies</li>
                <li>Dedicated support team</li>
                <li>Continuous algorithm improvements</li>
              </ul>
            </div>
          </main>
        </div>
      </div>
    );
  }