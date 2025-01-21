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
        <AccordionItem key="brokers" title="Compatible Brokers">
          <Card>
            <CardBody>
              <p className="mb-4">
                Trading Levels Algo works with any broker that supports NinjaTrader integration. While there are many excellent brokers available, we recommend{' '}
                <Link href="/ninjatrader" className="text-primary hover:underline">
                  NinjaTrader Brokerage
                </Link>{' '}
                for their seamless platform integration, competitive pricing, and excellent customer service.
              </p>
              <p>
                NinjaTrader Brokerage offers:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Direct integration with NinjaTrader platform</li>
                <li>Competitive commissions and fees</li>
                <li>Professional customer support</li>
                <li>Access to global futures markets</li>
              </ul>
              <p>
                Visit our{' '}
                <Link href="/ninjatrader" className="text-primary hover:underline">
                  NinjaTrader page
                </Link>{' '}
                to learn more about our recommended trading platform and brokerage solution.
              </p>
            </CardBody>
          </Card>
        </AccordionItem>
        <AccordionItem key="installation" title="Installing NinjaTrader">
          <p className="mb-4">
            Get the latest installer from their website (accessible once you log into your account).
          </p>
          <div className="mb-4">
            <img
              src="/NTInstaller.png"
              alt="NinjaTrader Installer Screenshot"
              className="rounded-lg w-[600px] h-auto"
            />
          </div>
          <p>
            For any issues, please refer to the{' '}
            <Link 
              href="https://support.ninjatrader.com/s/article/NinjaTrader-Desktop-Installation-Guide?language=en_US"
              className="text-primary hover:underline"
              target="_blank"
            >
              NinjaTrader Desktop Installation Guide
            </Link>
          </p>
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
            </CardBody>
          </Card>
        </AccordionItem>

        <AccordionItem key="charts" title="Setup Charts">
          <Card>
            <CardBody>
              <p className="mb-4">
                Either use the existing base chart provided with NT or create a new chart. The only settings you need to change are the data series settings.
              </p>
              <p className="mb-4">
                Key values to note:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>3-minute timeframe</li>
                <li>Load 20 days of past data</li>
                <li>Select MNQ (latest contract)</li>
              </ul>
            </CardBody>
          </Card>
        </AccordionItem>

        <AccordionItem key="license" title="Adding License">
          <Card>
            <CardBody>
              <p className="mb-4">
                The license is managed remotely and requires your NT machine ID. This can be found in the About page of NinjaTrader. Once you provide your machine ID, we will activate your license.
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
              <p className="mb-4">
                Other settings are primarily for backtesting and optimization purposes. While advanced users may find situations where adjusting these settings is advantageous, we recommend keeping the default values.
              </p>
            </CardBody>
          </Card>
        </AccordionItem>

        <AccordionItem key="trading" title="Trading">
          <Card>
            <CardBody>
              <p className="mb-4">
                To start trading:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Enable the bot in the strategy tab (indicator should turn green)</li>
                <li>The dashboard will display the bot's status</li>
                <li>Note: PnL display may not be perfect due to NT's calculations, especially if the bot is restarted during the day</li>
              </ol>
              <p className="mb-4">
                The bot operates from 9am – 4pm EST with specific time and day filters.
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
              <p className="mb-4">
                Resolution steps:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>Acknowledge the error message</li>
                <li>Verify your account is flat with no working orders</li>
                <li>Restart if safe to do so</li>
              </ol>

              <h3 className="font-bold mb-2 mt-4">Broker Connection Timeout</h3>
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
    </div>
  );
}
