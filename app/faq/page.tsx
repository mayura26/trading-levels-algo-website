import { Card, CardBody } from "@nextui-org/react";

// Add this before the component:
const faqs = [
    {
      question: "What platform does this run on?",
      answer: "The bot is specifically designed for trading NASDAQ futures (NQ/MNQ) and NinjaTrader 8. Refer to  The bot is designed to run on NinjaTrader 8 and is not compatible with other platforms. For more information on Ninjatrader, check out our <a href='/ninjatrader' className='text-primary hover:underline'>NinjaTrader page</a>."
    },
    {
      question: "What are the requirements? Do I need a VPS?",
      answer: "You'll need a futures trading account which is compatible with NinjaTrader 8. We do not require a VPS, but it is recommended for optimal performance."
    },
    {
      question: "Can I upgrade between plans?",
      answer: "Yes, there is the ability to upgrade your subscription. This can be managed through the Whop dashboard."
    },
    {
      question: "What are the licensing requirements?",
      answer: "Each license is valid for one machine. You can run across multiple accounts on your machine as you wish."
    },
    {
      question: "How do I setup? I paid, and I want to get started!",
      answer: "Refer to our get started guide <a href='/ninjatrader' className='text-primary hover:underline'>here</a>."
    },
    {
      question: "What hours does the bot trade?",
      answer: "The bot runs from roughly 9am EST to 4pm EST. It is designed to run unattended and will not trade outside of these hours. The bot also uses special filters for news days. The bot can trade half days, but it is not recommended."
    },
    {
      question: "How long does it take to setup?",
      answer: "The setup process is relatively quick. Taking about 20-30 minutes including NinjaTrader setup. It can take up to a day to receive your license key, as the process is done manually."
    },
    {
      question: "I am new to futures trading. What are contracts and what is my risk?",
      answer: "This bot trades NASDAQ futures using micro contracts (MNQ) by default. Each contract represents $2 per point movement in the NASDAQ. Typically, each trade risks about $30-40 to potentially make $30-80. For risk management, we recommend having $350-800 in equity per contract traded. A simple way to think about the risk is a maximum potential loss of $100 per contract per day versus a potential gain of $100 per day."
    }
  ];

// Add this new component above the faqs array
const Answer = ({ content }: { content: string }) => {
  // If the answer doesn't contain HTML, return it as plain text
  if (!content.includes('<a')) {
    return <p className="text-gray-300">{content}</p>;
  }
  
  // Add link styling classes
  const styledContent = content.replace(
    /<a\s+href='([^']+)'[^>]*>/g,
    "<a href='$1' class='text-primary hover:text-primary/80 underline transition-colors'>"
  );
  
  return (
    <p 
      className="text-gray-300"
      dangerouslySetInnerHTML={{ __html: styledContent }}
    />
  );
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* FAQ Section */}
      <section className="bg-black text-white py-20">
        <div className="w-full max-w-7xl mx-auto px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 pb-2 border-b-2 border-primary">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6 mb-16">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                classNames={{
                  base: [
                    "border-none",
                    "bg-content1/50",
                    "dark:bg-default-100/50",
                    "backdrop-blur-lg",
                    "backdrop-saturate-150"
                  ].join(" ")
                }}
              >
                <CardBody>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {faq.question}
                  </h3>
                  <Answer content={faq.answer} />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
