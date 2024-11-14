// TODO: Create more structured page with picture and text
export default function About() {
    return (
      <div>
      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
          About Us
        </h1>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 mt-8 text-left">
              <p className="mb-4">
                Trading Levels Algo was developed by Mayura Vivekananda. I'm a software engineer from New Zealand with experience trading across different markets.
                Through my trading journey, I realized that while I knew a lot about the how of trading, I wasn’t as sharp on the execution.
                That led me, at the beginning of this year, to start developing a bot to improve my trading performance. 
                The bot came to life in May, and I’ve been actively tracking and analyzing its performance since July.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">My Mission</h2>
              <p className="mb-4">
                To provide traders with a bot that can make consistent profits, while controlling variance.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4 mt-8">Why Choose Us</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Unique trading strategies</li>
                <li>Optimised for consistency</li>
                <li>Discord support</li>
                <li>Continuous algorithm improvements</li>
              </ul>
            </div>
          </section>
        </div>
    );
  }