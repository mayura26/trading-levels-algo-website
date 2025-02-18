"use client";
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Background */}
      <div className="h-[600px] bg-[url('/trading-background.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-full bg-gradient-to-b from-black/70 to-black/50 dark:from-black/80 dark:to-black/60 flex flex-col items-center justify-center p-8 text-white">
          <h1 className="text-5xl font-bold text-center relative text-shadow-glow after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-[100%] after:h-1 after:border-b-4 after:border-white/70">
            Automate Your Future
          </h1>
          <p className="text-2xl mt-4 text-shadow-soft">Navigate the Markets with Confidence</p>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-20">
        <div className="w-full max-w-7xl mx-auto px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
            Introducing TradingLevelsAlgo
          </h2>
          <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10 mb-16">
            <CardBody>
              <p className="text-gray-700 dark:text-gray-300">
                TradingLevelsAlgo is an advanced trading system engineered for NASDAQ futures (NQ/MNQ). By analyzing market structure and volume patterns, the algorithm identifies high-probability trading opportunities with precision. The system uses moving averages and levels to spot optimal entry and exit points, running fully automated with dynamic risk management.
              </p>
            </CardBody>
          </Card>

          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
            Core Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Feature Cards */}
            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Laser-Sharp Entry Precision</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Unlike systems that chase with market orders, our algorithm waits for price to come to us. This patient approach means you'll never get caught offside, reducing drawdown and maximizing opportunity.</p>
                <div className="relative w-full border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-primary/5 to-primary/10 p-1" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5">
                    <video 
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="/videos/sharp-entry.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Adaptive Risk Management</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Let your winners run while staying protected. The system dynamically adjusts take-profit and stop-loss levels as the trade develops, giving positions room to breathe while not giving away profits.</p>
                <div className="relative w-full border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-primary/5 to-primary/10 p-1" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5">
                    <video 
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="/videos/dynamic-tp-sl.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Smart Chop Detection</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Save your capital during choppy conditions. Our algorithm instantly recognizes when markets lack clear direction, keeping you out of noise and ready to strike when real momentum returns.</p>
                <div className="relative w-full border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/videos/choppy-market-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Precision Breakout Detection</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Catch the moves that matter. By identifying genuine breakouts from fakeouts, you'll be in position to capture quick, clean scalps while others are still waiting for confirmation.</p>
                <div className="relative w-full border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-primary/5 to-primary/10 p-1" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5">
                    <video 
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="/videos/chase-trades.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Dynamic News Management</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Stay protected during market-moving events. Our system combines pre-scheduled news data with real-time updates from our central management server, automatically adjusting trading parameters to match each day's unique market conditions.</p>
                <div className="relative w-full border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-primary/5 to-primary/10 p-1" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5">
                    <img 
                      src="/images/dynamic-news.png"
                      alt="Dynamic News Management System"
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Predictive Trade Management</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Cut losses before they happen. Our algorithm continuously scans market data in real-time, detecting early warning signs of trade deterioration and executing smart exits before the trade turns against you.</p>
                <div className="relative w-full border-2 border-primary/20 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-primary/5 to-primary/10 p-1" style={{ paddingBottom: '56.25%' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5">
                    <video 
                      className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                    >
                      <source src="/videos/predictive-exit.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 pb-2 border-b-2 border-primary">
            Watch it in Action
          </h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/LBXzQIb1nW0"
              title="TradingLevelsAlgo Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
