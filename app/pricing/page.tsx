import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function Pricing() {
    return (
      <div className="min-h-screen bg-[url('/trading-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center p-8 text-white">
          <main className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Pricing Plans</h1>
            
            <div className="grid md:grid-cols-1 gap-8 mt-8">
              <Card 
                className="bg-black/30 backdrop-blur-sm"
                classNames={{
                  base: "border-2 border-white/20"
                }}
              >
                <CardHeader className="flex flex-col gap-1">
                  <h2 className="text-2xl font-bold">Basic</h2>
                  <p className="text-3xl font-bold">
                    $250<span className="text-sm">/month</span>
                  </p>
                </CardHeader>
                <CardBody>
                  <ul className="text-left space-y-4 mb-8">
                    <li>✓ One month trial</li>
                    <li>✓ Discord support</li>
                    <li>✓ Access to the trading bot for MNQ</li>
                  </ul>
                  <Button color="primary" size="lg">
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </div>
          </main>
        </div>
      </div>
    );
}