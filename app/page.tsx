"use client";
import { Card, CardBody, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/trading-background.png')] bg-cover bg-center bg-no-repeat">
      <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center p-8 text-white">
        <main className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Trading Levels Algo</h1>
          
          <Card className="bg-black/30 backdrop-blur-sm mt-8">
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
        </main>
      </div>
    </div>
  );
}
