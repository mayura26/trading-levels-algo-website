// TODO: Just use one pricing plan for now
export default function Pricing() {
    return (
      <div className="min-h-screen bg-[url('/trading-background.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="min-h-screen bg-black/50 flex flex-col items-center justify-center p-8 text-white">
          <main className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Pricing Plans</h1>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {/* Basic Plan */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Basic</h2>
                <p className="text-3xl font-bold mb-6">$99<span className="text-sm">/month</span></p>
                <ul className="text-left space-y-4 mb-8">
                  <li>✓ Basic algorithm access</li>
                  <li>✓ Single market analysis</li>
                  <li>✓ Email support</li>
                  <li>✓ Basic reporting</li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition duration-200">
                  Get Started
                </button>
              </div>
  
              {/* Pro Plan */}
              <div className="bg-blue-900/40 backdrop-blur-sm rounded-xl p-6 transform scale-105">
                <h2 className="text-2xl font-bold mb-4">Pro</h2>
                <p className="text-3xl font-bold mb-6">$199<span className="text-sm">/month</span></p>
                <ul className="text-left space-y-4 mb-8">
                  <li>✓ Advanced algorithm access</li>
                  <li>✓ Multi-market analysis</li>
                  <li>✓ Priority support</li>
                  <li>✓ Advanced reporting</li>
                  <li>✓ Strategy customization</li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition duration-200">
                  Get Started
                </button>
              </div>
  
              {/* Enterprise Plan */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-4">Enterprise</h2>
                <p className="text-3xl font-bold mb-6">Custom</p>
                <ul className="text-left space-y-4 mb-8">
                  <li>✓ Full algorithm access</li>
                  <li>✓ Unlimited markets</li>
                  <li>✓ 24/7 dedicated support</li>
                  <li>✓ Custom reporting</li>
                  <li>✓ Custom development</li>
                </ul>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }