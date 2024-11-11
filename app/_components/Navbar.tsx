'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-black/80 backdrop-blur-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home link */}
          <Link href="/" className="text-white font-bold text-xl">
            Trading Levels Algo
          </Link>

          {/* Navigation links */}
          <div className="flex space-x-4">
            {[
              { name: 'Home', href: '/' },
              { name: 'Pricing', href: '/pricing' },
              { name: 'About', href: '/about' },
              { name: 'NinjaTrader', href: '/ninjatrader' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === link.href
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}