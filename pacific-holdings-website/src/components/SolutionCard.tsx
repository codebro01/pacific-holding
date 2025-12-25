'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './SolutionCard.module.css';

interface SolutionCardProps {
  icon: 'professional' | 'quality' | 'affordability' | 'innovation';
  title: string;
  description: string;
  index?: number;
}

export default function SolutionCard({ icon, title, description, index = 0 }: SolutionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = () => {
    switch (icon) {
      case 'professional':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L20 12L28 13L22 19L23.5 27L16 23L8.5 27L10 19L4 13L12 12L16 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'quality':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'affordability':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 10V22M12 14H20M12 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'innovation':
        return (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 4V8M16 24V28M4 16H8M24 16H28M7.5 7.5L10.3 10.3M21.7 21.7L24.5 24.5M24.5 7.5L21.7 10.3M10.3 21.7L7.5 24.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${isVisible ? styles.visible : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setIsExpanded(!isExpanded)}
      onKeyDown={(e) => e.key === 'Enter' && setIsExpanded(!isExpanded)}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
    >
      <div className={styles.floatingOrb}></div>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          {getIcon()}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.expandIndicator}>
          <span>Learn more</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
