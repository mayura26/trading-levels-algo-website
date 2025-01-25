'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link as NextUILink,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Pricing', href: '/pricing' },
    { name: 'Downloads', href: '/downloads' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'NinjaTrader', href: '/ninjatrader' },
    { name: 'Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      className="bg-white/80 dark:bg-black/80 backdrop-blur-sm h-20 border-gray-200 dark:border-gray-800"
    >
      <NavbarContent className="flex-1">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-900 dark:text-white"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-xl md:text-2xl tracking-wider flex items-center gap-3 uppercase">
            <div className="flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="Trading Levels Algo Logo" 
                className="h-12 w-12 object-contain rounded-lg shadow-lg shadow-primary/20 transition-transform hover:scale-105"
              />
            </div>
            <div className="flex-grow">
              <span className="text-primary font-bold drop-shadow-sm">
                Trading Levels Algo
              </span>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6 ml-auto pl-24" justify="end">
        {navLinks.map((link) => (
          <NavbarItem key={link.name} isActive={pathname === link.href}>
            <NextUILink
              as={Link}
              href={link.href}
              color={pathname === link.href ? "primary" : "foreground"}
              className={`text-gray-900 dark:text-white ${
                pathname === link.href 
                  ? 'font-bold border-b-2 border-primary pb-1' 
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              {link.name}
            </NextUILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white/90 dark:bg-black/90 mt-2">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.name}>
            <NextUILink
              as={Link}
              href={link.href}
              color={pathname === link.href ? "primary" : "foreground"}
              className={`w-full text-gray-900 dark:text-white ${
                pathname === link.href 
                  ? 'font-bold bg-primary/20 px-4 py-2 rounded-lg' 
                  : 'opacity-70 hover:opacity-100'
              }`}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NextUILink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}