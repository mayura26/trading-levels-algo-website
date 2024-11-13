"use client";
import { Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/trading-background.png')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen bg-black/50 flex flex-col items-center p-8 text-white">
        {/* Section 1: Hero */}
        <section className="w-full max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Trading Levels Algo</h1>
        </section>

        {/* Section 2: Features */}
        <section className="w-full max-w-5xl mx-auto mb-16">
          <Card className="bg-black/30 backdrop-blur-sm">
            <CardBody>
              <h2 className="text-2xl font-semibold mb-4 text-white">Features</h2>
              <ul className="list-none space-y-4 text-left text-white">
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
            </CardBody>
          </Card>
        </section>
      </div>
    </div>
  );
}
