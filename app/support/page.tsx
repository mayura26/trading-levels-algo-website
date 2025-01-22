'use client'

import { Accordion, AccordionItem, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';

export default function Support() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
        Support & Setup Guide
      </h1>

      <Accordion>
        <AccordionItem key="getting-started" title="Getting Started">
          <Accordion>
            <AccordionItem key="brokers" title="Compatible Brokers">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    Trading Levels Algo is fully compatible with NinjaTrader-supported brokers. We recommend{' '}
                    <Link href="/ninjatrader" className="text-primary hover:underline">
                      NinjaTrader Brokerage
                    </Link>{' '}
                    for their robust platform integration, competitive rates, and reliable support.
                  </p>
                  <p>
                    Learn more about our recommended platform and brokerage solution on our{' '}
                    <Link href="/ninjatrader" className="text-primary hover:underline">
                      NinjaTrader page
                    </Link>.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="installation" title="Installing NinjaTrader">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    Download and install the latest version of NinjaTrader from your account dashboard.
                  </p>
                  <div className="mb-4">
                    <img
                      src="/support/NTInstaller.png"
                      alt="NinjaTrader Installation Screen"
                      className="rounded-lg w-[600px] h-auto"
                    />
                  </div>
                  <p>
                    For detailed installation instructions, consult the{' '}
                    <Link
                      href="https://support.ninjatrader.com/s/article/NinjaTrader-Desktop-Installation-Guide?language=en_US"
                      className="text-primary hover:underline"
                      target="_blank"
                    >
                      Official Installation Guide
                    </Link>
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>

            <AccordionItem key="broker" title="Connecting to Broker">
              <Link
                href="https://support.ninjatrader.com/s/article/Connecting-to-Your-Account-NinjaTrader-Desktop?language=en_US"
                className="text-primary hover:underline"
                target="_blank"
              >
                Guide: Connecting to Your Account
              </Link>
            </AccordionItem>

            <AccordionItem key="plugin" title="Installing Plugin">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    Install the provided NinjaTrader plugin for TradingLevelsAlgo by following the official NinjaTrader guide:
                  </p>
                  <Link
                    href="https://support.ninjatrader.com/s/article/How-Can-I-Import-Indicators-and-Strategies-into-NinjaTrader-Desktop?language=en_US"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    How to Import Indicators and Strategies
                  </Link>
                  <br></br>
                  <p>
                    The latest version of the plugin can be found on the <Link href="/downloads" className="text-primary hover:underline">downloads page.</Link>
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="vps" title="VPS Setup (Optional)">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    A Virtual Private Server (VPS) ensures uninterrupted 24/7 operation of your trading bot. While optional, it's highly recommended for optimal performance.
                  </p>

                  <h3 className="font-bold mb-2">Recommended Specifications:</h3>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Windows Server 2019 or later</li>
                    <li>Minimum 4GB RAM</li>
                    <li>4 CPU cores</li>
                    <li>80GB SSD storage</li>
                    <li>Stable network connection</li>
                  </ul>

                  <p className="mb-4">
                    Recommended VPS providers:
                  </p>
                  <ul className="list-disc pl-6">
                    <li><Link href="https://www.ovh.com" className="text-primary hover:underline" target="_blank">OVH Cloud</Link></li>
                    <li><Link href="https://ninjamobiletrader.com/" className="text-primary hover:underline" target="_blank">NinjaMobileTrader</Link></li>
                  </ul>
                </CardBody>
              </Card>
            </AccordionItem>
          </Accordion>
        </AccordionItem>

        <AccordionItem key="configuration" title="Configuration">
          <Accordion>
            <AccordionItem key="charts" title="Chart Configuration">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    Configure your chart with these settings:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Time interval: 3 minutes</li>
                    <li>Historical data: 20 days</li>
                    <li>Instrument: MNQ (current contract)</li>
                  </ul>
                  <div className="mb-4">
                    <img
                      src="/support/ChartSettings.png"
                      alt="Chart Settings Configuration"
                      className="rounded-lg shadow-lg w-full max-h-[600px] object-contain object-left"
                    />
                  </div>
                  <div>
                    <p className="mb-4">Make sure to save the chart at the end of the setup process.</p>
                    <img
                      src="/support/SaveChart.png"
                      alt="Save Chart Instructions" 
                      className="rounded-lg shadow-lg w-full max-h-[150px] object-contain object-left"
                    />
                  </div>
                  <div className="mt-4">
                    <p className="mb-4">Watch our data series tutorial for more information:</p>
                    <div className="relative w-full aspect-video">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/P5lHZv7dy4E"
                        title="License Activation Tutorial"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="license" title="License Activation">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    To activate your license:
                  </p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>Locate your Machine ID in NinjaTrader's About section</li>
                    <div className="mb-4">
                      <img
                        src="/support/MachineID.png"
                        alt="Machine ID Location"
                        className="rounded-lg shadow-lg w-full max-h-[200px] object-contain object-left"
                      />
                    </div>
                    <li>Complete the <Link href="https://form.jotform.com/250198234704254" className="text-primary hover:underline" target="_blank">license agreement form</Link></li>
                    <li>Ensure your details match your Whop payment information</li>
                    <li>Wait for license activation (typically within 24 hours)</li>
                  </ol>
                  <p>
                    Contact support if your license isn't activated within 24 hours. The bot will provide a notification is the license is not active.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="strategy" title="Adding/Configuring Strategy">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    The strategy needs to be added to your previously configured chart:
                  </p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>Right-click on the chart</li>
                    <li>Click on "Strategies"</li>
                    <li>Double click on "TradingLevelsAlgo"</li>
                  </ol>
                  <p>Refer to <Link href="https://ninjatrader.com/support/helpguides/nt8/NT%20HelpGuide%20English.html?running_a_ninjascript_strategy.htm" className="text-primary hover:underline" target="_blank">NinjaTrader Help Guide</Link> for more information.</p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="settings" title="Strategy Settings">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    Required settings to configure:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Your account</li>
                    <li>Number of contracts</li>
                    <li>Optional: Max loss and max gain limits</li>
                  </ul>
                  <div className="mb-4">
                    <img
                      src="/support/StrategySettings.png"
                      alt="Strategy Settings Panel"
                      className="rounded-lg shadow-lg w-full max-h-[600px] object-contain object-left"
                    />
                  </div>
                  <p className="mb-4">
                    Other settings are primarily for backtesting and optimization purposes. While advanced users may find situations where adjusting these settings is advantageous, we recommend keeping the default values.
                  </p>
                  <p>
                    Do not change any of the NinjaTrader strategy settings.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
          </Accordion>
        </AccordionItem>

        <AccordionItem key="operation" title="Operation & Maintenance">
          <Accordion>
            <AccordionItem key="trading" title="Trading Operations">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    Operating instructions:
                  </p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>Enable the strategy in the strategy panel (status indicator will turn green)</li>
                    <li>Monitor the dashboard for real-time status updates</li>
                    <li>Trading hours: 9:00 AM - 4:00 PM EST</li>
                  </ol>
                  <div className="mb-4">
                    <img
                      src="/support/EnableStrategy.png"
                      alt="Enable Strategy Panel"
                      className="rounded-lg shadow-lg w-full object-contain object-left"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Note: Profit/Loss calculations may vary slightly due to NinjaTrader's internal calculations,
                    especially after mid-day restarts.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="risk" title="Setting Daily Gain/Loss Limits">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    For unattended operation, it's crucial to set risk parameters on your account:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Set daily gain limit slightly above the bot's target (e.g., $600 limit for $500 target)</li>
                    <li>Apply similar logic to loss limits</li>
                    <li>When limits are hit, NT automatically liquidates your account until end of trading day</li>
                  </ul>
                  <Link
                    href="https://support.ninjatrader.com/s/article/Risk-Settings?language=en_US"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Learn more about Risk Settings
                  </Link>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="issues" title="Common Issues & Troubleshooting">
              <Card>
                <CardBody>
                  <h3 className="font-bold mb-2">Stop Loss Rejected</h3>
                  <p className="mb-4">
                    If you receive a stop loss rejection error, it means the bot attempted to place a stop loss above market price. While rare, this can occur due to broker delays.
                  </p>
                  <div className="mb-4">
                    <img
                      src="/support/StopLossError.png"
                      alt="Stop Loss Error Message"
                      className="rounded-lg shadow-lg w-full max-h-[200px] object-contain object-left"
                    />
                  </div>
                  <p className="mb-4">
                    Resolution steps:
                  </p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>Acknowledge the error message</li>
                    <li>Verify your account is flat with no working orders</li>
                    <li>Restart if safe to do so</li>
                  </ol>

                  <h3 className="font-bold mb-2 mt-4">Broker Connection Timeout</h3>
                  <div className="mb-4">
                    <img
                      src="/support/CloseFailed.png"
                      alt="Close Failed Error Message"
                      className="rounded-lg shadow-lg w-full max-h-[200px] object-contain object-left"
                    />
                  </div>
                  <p className="mb-4">
                    If broker connection drops:
                  </p>
                  <ol className="list-decimal pl-6 mb-4">
                    <li>Reconnect to the broker immediately</li>
                    <li>Verify all open positions are closed</li>
                  </ol>
                  <Link
                    href="https://support.ninjatrader.com/s/article/Close-operation-failed-to-manually-close-your-position?language=en_US"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Learn more about connection issues
                  </Link>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="maintenance" title="Daily Maintenance">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    While optional, it's recommended to disconnect and reconnect the broker connection in the evening after the start of the new session (6PM EST) to ensure optimal connection stability.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
          </Accordion>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
