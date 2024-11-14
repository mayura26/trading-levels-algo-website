"use client";
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      {/* Hero Section with Background */}
      <div className="h-[600px] bg-[url('/trading-background.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-full bg-gradient-to-b from-black/70 to-black/50 flex items-center justify-center p-8 text-white">
          <h1 className="text-6xl font-bold text-center">
            Trade Smarter, Not Harder
          </h1>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-black text-white py-20">
        <div className="w-full max-w-7xl mx-auto px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">Core Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Feature Cards */}
            <Card className="bg-black/30 backdrop-blur-sm border border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Volume Structure Analysis</h3>
                <p className="text-gray-300">Analyses the wick and body of the candles to build a real-time volume profile.</p>
              </CardBody>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Dynamic Decision-Making</h3>
                <p className="text-gray-300">Utilizes volume delta, trend-based analysis, and rate-of-change (RoC) on volume differentials to identify profitable opportunities and avoid risky trades.</p>
              </CardBody>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Adaptive Risk Management</h3>
                <p className="text-gray-300">Implements dynamic Take Profit (TP) and Stop Loss (SL) adjustments, chop detection, and protective levels to control risk effectively and exit trades efficiently.</p>
              </CardBody>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border border-white/10">
              <CardBody>
                <h3 className="text-xl font-semibold text-primary mb-3">Trade Execution Optimization</h3>
                <p className="text-gray-300">Enhances efficiency with limit orders calculated from a custom dynamic trend line, ensuring you capture opportunities without chasing trades.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
