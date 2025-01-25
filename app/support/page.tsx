'use client'

import { Accordion, AccordionItem, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';

export default function Support() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary text-gray-900 dark:text-white">
        Support & Setup Guide
      </h1>

      <Accordion>
        <AccordionItem key="getting-started" title="Getting Started" className="text-gray-900 dark:text-white">
          <Accordion>
            <AccordionItem key="brokers" title="Compatible Brokers" className="text-gray-900 dark:text-white">
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
                <CardBody>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Trading Levels Algo is fully compatible with NinjaTrader-supported brokers. We recommend{' '}
                    <Link href="/ninjatrader" className="text-primary hover:text-primary/80 hover:underline">
                      NinjaTrader Brokerage
                    </Link>{' '}
                    for their robust platform integration, competitive rates, and reliable support.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Learn more about our recommended platform and brokerage solution on our{' '}
                    <Link href="/ninjatrader" className="text-primary hover:text-primary/80 hover:underline">
                      NinjaTrader page
                    </Link>.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="data-packages" title="Required Data Packages" className="text-gray-900 dark:text-white">
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
                <CardBody>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    TradingLevelsAlgo requires CME Level 1 market data for operation. This data package provides real-time quotes for the CME exchange, which includes the NASDAQ.
                  </p>
                  <div className="mb-4">
                    <img
                      src="/support/CMEData.png"
                      alt="CME Data Package Selection"
                      className="rounded-lg w-[600px] h-auto shadow-lg dark:shadow-black/30"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    You can subscribe to CME Level 1 data through your NinjaTrader account. Make sure this package is active before running the bot.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="installation" title="Installing NinjaTrader" className="text-gray-900 dark:text-white">
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
                <CardBody>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    Download and install the latest version of NinjaTrader from your account dashboard.
                  </p>
                  <div className="mb-4">
                    <img
                      src="/support/NTInstaller.png"
                      alt="NinjaTrader Installation Screen"
                      className="rounded-lg w-[600px] h-auto shadow-lg dark:shadow-black/30"
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    For detailed installation instructions, consult the{' '}
                    <Link
                      href="https://support.ninjatrader.com/s/article/NinjaTrader-Desktop-Installation-Guide?language=en_US"
                      className="text-primary hover:text-primary/80 hover:underline"
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
        <AccordionItem key="upgrades" title="Upgrading Your Software">
          <Card>
            <CardBody>
              <p className="mb-4">
                Monthly software updates will be distributed through this website, with announcements posted on Whop.
              </p>
              <p className="mb-4">
                To upgrade your software:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Remove the previous version following the <Link
                  href="https://ninjatrader.com/support/helpguides/nt8/NT%20HelpGuide%20English.html?remove-ninjascript-assembly.htm"
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  NinjaTrader removal guide
                </Link></li>
                <li>Install the new version using the same process as the initial installation</li>
              </ol>
            </CardBody>
          </Card>
        </AccordionItem>

        <AccordionItem key="configuration" title="Configuration">
          <Accordion>
            <AccordionItem key="charts" title="Chart Configuration">
              <Card>
                <CardBody>
                  <div>
                    <p className="mb-4">
                      First, create a new workspace for TradingLevelsAlgo:
                    </p>
                    <ol className="list-decimal pl-6 mb-4">
                      <li>Click Workspaces {`>`} new</li>
                      <li>Name it as you wish, e.g. &quot;TradingLevelsAlgo&quot;</li>
                      <li>Click OK to create the workspace</li>
                    </ol>
                    <img
                      src="/support/SaveChart.png"
                      alt="Save Chart Instructions"
                      className="rounded-lg shadow-lg w-full max-h-[150px] object-contain object-left"
                    />
                  </div>
                  <br></br>
                  <p className="mb-4">
                    Configure your chart with these settings:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Time interval: 3 minutes</li>
                    <li>Historical data: 20 days</li>
                    <li>Instrument: MNQ (current contract) <span className="text-sm italic text-gray-600 dark:text-gray-400">(Pro tip: You can type in this bar to search)</span></li>
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
                    <p className="mb-4">Watch our data series tutorial for more information (no audio):</p>
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
                    <li>Open the 3rd Party Licenses window in NinjaTrader under the Help menu</li>
                    <li>Enter the following information:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Vendor Name: TradingLevelsAlgo</li>
                        <li>User defined ID: Your first name</li>
                      </ul>
                    </li>
                    <li>Click the Submit button</li>
                  </ol>

                  <div className="mb-4">
                    <img
                      src="/support/3rdPartyLicense.png"
                      alt="3rd Party Licenses Window"
                      className="rounded-lg shadow-lg w-full max-h-[200px] object-contain object-left"
                    />
                  </div>

                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    Note: You can use any name as your User defined ID, but make sure it matches the first name you provide in the contract form below, to speed up license activation.
                  </p>

                  <ol className="list-decimal pl-6 mb-4" start={4}>
                    <li>Complete the <Link href="https://form.jotform.com/250198234704254" className="text-primary hover:underline" target="_blank">license agreement form</Link></li>
                    <li>Ensure your details match your Whop payment information</li>
                    <li>Wait for license activation (typically within 24 hours)</li>
                  </ol>

                  <p className="text-gray-700 dark:text-gray-300">
                    Contact support if your license isn't activated within 24 hours. The bot will display a notification if the license is not active.
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
                    <li>Make sure the "Strategies" tab is selected in the strategy panel</li>
                    <li>Enable the strategy in the strategy panel (Text under the strategy name will turn green)</li>
                    <li>Monitor the dashboard for real-time status updates</li>
                    <li>Trading hours: 8:40 AM - 4:00 PM EST</li>
                  </ol>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    The bot operates on Eastern Time (EST). While it has built-in timezone conversion capabilities allowing you to run Windows in your local timezone, we recommend setting your system to EST for optimal operation and easier monitoring.
                  </p>
                  <div className="mb-4">
                    <img
                      src="/support/EnableStrategy.png"
                      alt="Enable Strategy Panel"
                      className="rounded-lg shadow-lg w-full object-contain object-left"
                    />
                  </div>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="dashboard" title="Dashboard Panel">
              <Card>
                <CardBody>
                  <p className="mb-4">
                    The dashboard panel appears in the bottom right corner of your chart and provides real-time information about the bot's status:
                  </p>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Daily P/L: Running profit/loss for the current session (PnL per contract shown in brackets)</li>
                    <li>TDD: Total daily drawdown</li>
                    <li>Trading Status: Shows if trading is active or off</li>
                    <li>Trade Data: Displays metrics like bars missed and trade duration</li>
                    <li>Triggers: Lists any currently active trading triggers</li>
                  </ul>
                  <div className="mb-4">
                    <img
                      src="/support/Dashboard.png"
                      alt="Dashboard Panel"
                      className="rounded-lg shadow-lg w-full max-h-[400px] object-contain object-left"
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    Note: Profit/Loss calculations may vary slightly due to NinjaTrader's internal calculations,
                    especially after mid-day restarts.
                  </p>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="parameters" title="Adjusting Parameters">
              <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-white/10">
                <CardBody>
                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg mb-4">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      <strong>Warning:</strong> Parameter adjustments should only be made by experienced traders who fully understand their impact. Incorrect settings can significantly increase risk and affect performance. If unsure, keep the default values apart from contract size/risk management.
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Position Sizing</h3>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                    <li>TradeQuantityBase Set the number of contracts per trade (default: 5)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary mb-2">Risk Management</h3>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                    <li>MaxGainRatio: Set your daily profit target per contract (default: $100)</li>
                    <li className="ml-4 text-gray-700 dark:text-gray-300">
                      Risk Levels:
                      <ul className="list-disc pl-6">
                        <li>75-80: Conservative</li>
                        <li>90: Slightly risky</li>
                        <li>100: Risky</li>
                        <li>120: Extremely risky</li>
                      </ul>
                    </li>
                    <li>MaxLossRatio: Set your maximum daily loss limit per contract (recommended: $100)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary mb-2">Time Settings</h3>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                    <li>Trading Hours across sessions split as morning and day.</li>
                    <li>You can adjust this if you want the bot to start earlier or end earlier. Its important to make sure the end of the morning session and start of the day session remains as 10am and 4pm respectively.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-primary mb-2">Trade Management</h3>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                    <li>Chase TP: This is the Take Profit for chase trades, which are trades when the bot is chasing a move. You can use 35/40 during risky trading periods to allow the bot to more safely close out a chase trade rather than let the trade get retraced.</li>
                    <li>Time Session 1/2: These are the Take Profit settings for the time sessions defined above. The TP can be adjusted down if you think the bot isn't closing out trades before moves retrace. We recommend setting them to 55/45 respectively for the two sessions, during periods of poor price action.</li>
                    <li>Stop Loss: We recommend keeping the default Stop Loss settings for optimal performance.</li>
                  </ul>

                  <div className="mb-4">
                    <img
                      src="/support/Parameters.png"
                      alt="Bot Parameters Panel"
                      className="rounded-lg shadow-lg w-full max-h-[600px] object-contain object-left"
                    />
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Pro Tip:</strong> For the best performance, always talk to the developer before making any changes.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </AccordionItem>
            <AccordionItem key="risk" title="Setting Daily Gain/Loss Limits (Broker)">
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
