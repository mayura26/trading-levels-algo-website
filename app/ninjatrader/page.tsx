import { Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import Link from 'next/link';

export default function NinjaTrader() {
  return (
    <div>
      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
          Recommended Trading Platform
        </h1>

        <Card className="shadow-md">
          <CardBody className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="h-full flex items-center">
              <img
                src="/media-kit/NinjaTrader-Logo.png"
                alt="NinjaTrader Platform"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-4">
              <p>
                NinjaTrader® is our #1 recommended trading software platform preferred by traders worldwide including our clients.
              </p>

              <Card className="bg-default-50">
                <CardBody>
                  <p className="font-bold">
                    <Link href="http://ninjatrader.com/" target="_blank" rel="noopener" className="text-primary hover:underline">
                      Download NinjaTrader
                    </Link>
                    &amp; receive immediate FREE access to:
                  </p>

                  <ul className="list-disc pl-6 mt-2">
                    <li>Real-time futures data</li>
                    <li>Advanced charting</li>
                    <li>Trade simulator</li>
                    <li>Strategy development and backtesting</li>
                  </ul>
                </CardBody>
              </Card>

              <p>
                NinjaTrader's award-winning{' '}
                <Link href="http://ninjatrader.com/GetStarted" className="text-primary" target="_blank" rel="noopener">
                  trading platform
                </Link>{' '}
                is consistently voted an industry leader by the trading community. Featuring 1000s of Apps & Add-Ons for unlimited customization, NinjaTrader is used by over 500,000 traders for advanced market analysis, professional charting and fast order execution.
              </p>

              <p>
                For new traders, start preparing for the live markets with a free{' '}
                <Link href="http://ninjatrader.com/Simulate" className="text-primary" target="_blank" rel="noopener">
                  trading simulator
                </Link>{' '}
                featuring real-time market data.
              </p>

              <div className="text-center mt-8">
                <Link href="http://ninjatrader.com/" target="_blank" rel="noopener">
                  <Button color="primary" size="lg" radius="full">
                    Get Started for FREE!
                  </Button>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
      <section className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
          Recommended Market Data Feed
        </h1>
        <Card className="bg-default-50">
          <CardBody>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p>
                    Kinetick® delivers reliable, fast and cost-effective{' '}
                    <Link href="http://kinetick.com/NinjaTrader" className="text-primary hover:underline" target="_blank" rel="noopener">
                      market data
                    </Link>{' '}
                    to help level the playing field for active traders. Take advantage of unfiltered, real time quotes for stocks, futures and forex that exceed the expectations of the world's most demanding traders, like us!
                  </p>

                  <p>
                    Get started with FREE end-of-day{' '}
                    <Link href="http://kinetick.com/" className="text-primary hover:underline" target="_blank" rel="noopener">
                      historical market data
                    </Link>{' '}
                    directly through the NinjaTrader platform and learn how you can significantly reduce CME Group Globex exchange fees on real-time market data with Kinetick.
                  </p>

                  <div className="text-center mt-8">
                    <Link href="http://www.kinetick.com/end-of-day" target="_blank" rel="noopener">
                      <Button color="primary" size="lg" radius="full">
                        Get Started with Free EOD Data
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex justify-center">
                  <img
                    src="/media-kit/Kinetick.png"
                    alt="Kinetick Logo"
                    width={400}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}