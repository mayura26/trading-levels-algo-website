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
                TradingLevelsAlgo is an advanced trading system engineered for NASDAQ futures (NQ/MNQ). The algorithm processes market structure to identify optimal entry and exit points. The system is designed to run fully automated, with dynamic risk management.
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
                <h3 className="text-xl font-semibold text-primary mb-3">Volume Structure Analysis</h3>
                <p className="text-gray-700 dark:text-gray-300">Analyses the wick and body of the candles to build a real-time volume profile.</p>
              </CardBody>
            </Card>

            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Dynamic Decision-Making</h3>
                <p className="text-gray-700 dark:text-gray-300">Utilizes volume delta, trend-based analysis, and rate-of-change (RoC) on volume differentials to identify optimal opportunities and avoid risky trades.</p>
              </CardBody>
            </Card>

            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Adaptive Risk Management</h3>
                <p className="text-gray-700 dark:text-gray-300">Implements dynamic Take Profit (TP) and Stop Loss (SL) adjustments, chop detection, and protective levels to control risk effectively and exit trades efficiently.</p>
              </CardBody>
            </Card>

            <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Trade Execution Optimization</h3>
                <p className="text-gray-700 dark:text-gray-300">Enhances efficiency with limit orders calculated from a custom dynamic trend line, ensuring you capture opportunities without chasing trades.</p>
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
