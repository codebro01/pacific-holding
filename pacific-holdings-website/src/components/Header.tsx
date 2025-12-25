'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/companies', label: 'Companies' },
  ];

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isHomePage ? styles.homeHeader : ''}`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo.png"
              alt="Pacific Holdings Logo"
              width={180}
              height={50}
              className={styles.logoImage}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <ThemeToggle />
            <Link href="/#contact" className={styles.ctaButton}>
              Get In Touch
            </Link>
            <button 
              className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.mobileNavLink}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className={styles.mobileCta}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </nav>
      </div>
    </>
  );
}
