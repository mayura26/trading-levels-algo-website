export default function NinjaTrader() {
    return (
      <div className="min-h-screen bg-[url('/trading-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center p-8 text-white">
          <main className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">NinjaTrader Integration</h1>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mt-8">
              <div className="grid gap-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Setup Instructions</h2>
                  <ol className="text-left list-decimal list-inside space-y-4">
                    <li>Download the Trading Levels Algo indicator</li>
                    <li>Import the indicator into NinjaTrader</li>
                    <li>Configure your trading parameters</li>
                    <li>Start automated trading</li>
                  </ol>
                </section>
  
                <section>
                  <h2 className="text-2xl font-semibold mb-4">System Requirements</h2>
                  <ul className="text-left list-disc list-inside space-y-2">
                    <li>NinjaTrader 8</li>
                    <li>Windows 10 or later</li>
                    <li>Minimum 8GB RAM</li>
                    <li>Stable internet connection</li>
                  </ul>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }