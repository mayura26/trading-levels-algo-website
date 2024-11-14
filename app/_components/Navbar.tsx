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

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'NinjaTrader', href: '/ninjatrader' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      className="bg-black/80 backdrop-blur-sm h-20"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit text-white text-xl md:text-2xl tracking-wide">
            Trading Levels Algo
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.name} isActive={pathname === link.href}>
            <NextUILink
              as={Link}
              href={link.href}
              color={pathname === link.href ? "primary" : "foreground"}
              className={`text-white ${pathname === link.href ? 'font-bold border-b-2 border-primary pb-1' : 'opacity-70 hover:opacity-100'}`}
            >
              {link.name}
            </NextUILink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="bg-black/90 mt-2">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.name}>
            <NextUILink
              as={Link}
              href={link.href}
              color={pathname === link.href ? "primary" : "foreground"}
              className={`w-full text-white ${pathname === link.href ? 'font-bold bg-primary/20 px-4 py-2 rounded-lg' : 'opacity-70 hover:opacity-100'}`}
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