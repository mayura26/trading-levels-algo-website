'use client'

import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import Link from 'next/link';

export default function Pricing() {
  return (
    <div>
      <section className="max-w-[1200px] mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 pb-2 border-b-2 border-primary">
          Pricing Plans
        </h1>
        <h2 className="text-xl md:text-2xl text-center text-gray-600 dark:text-gray-300 mb-8">
          Choose the plan that works best for you
        </h2>

        <div className="bg-primary/10 border border-primary rounded-lg p-4 mb-8 text-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">
            🎉 Special Offer: Get 50% off your first month!
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            Use code <span className="font-mono bg-primary/20 px-2 py-1 rounded text-primary font-semibold">THEBOTCLUB</span> at checkout
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Basic Plan */}
          <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Basic</h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">Get started with algo trading</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  3 Micro Contracts
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $1,000 Minimum Equity
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $1,500 Recommended Equity
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-lg line-through text-gray-500">$300</p>
                  <p className="text-3xl font-bold text-center text-gray-900 dark:text-white">$250<span className="text-lg">/mo</span></p>
                </div>
                <Link href="https://whop.com/trading-levels-algo-basic/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mt-4" color="primary">Get Started</Button>
                </Link>
              </div>
            </CardBody>
          </Card>

          {/* Standard Plan */}
          <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Standard</h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">Most popular choice</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  7 Micro Contracts
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $2,500 Minimum Equity
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $4,000 Recommended Equity
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-lg line-through text-gray-500">$500</p>
                  <p className="text-3xl font-bold text-center text-gray-900 dark:text-white">$425<span className="text-lg">/mo</span></p>
                </div>
                <Link href="https://whop.com/trading-levels-algo-standard/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mt-4" color="primary">Get Started</Button>
                </Link>
              </div>
            </CardBody>
          </Card>

          {/* Pro Plan */}
          <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-primary">
            <CardHeader className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Premium</h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">For serious traders</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  15 Micro Contracts
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $4,800 Minimum Equity
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $6,000 Recommended Equity
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-lg line-through text-gray-500">$900</p>
                  <p className="text-3xl font-bold text-center text-gray-900 dark:text-white">$850<span className="text-lg">/mo</span></p>
                </div>
                <Link href="https://whop.com/trading-levels-algo-premium/" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full mt-4" color="primary">Get Started</Button>
                </Link>
              </div>
            </CardBody>
          </Card>

          {/* Enterprise Plan */}
          <Card className="bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <CardHeader className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Unlimited</h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">Perfect for big accounts</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Unlimited Micro/Mini Contracts
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $12,500 Minimum Equity
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  $15,000 Recommended Equity
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <p className="text-3xl font-bold text-center text-gray-900 dark:text-white">Inquire</p>
                <Link href="/contact">
                  <Button className="w-full mt-4" color="primary">Contact Us</Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
}
