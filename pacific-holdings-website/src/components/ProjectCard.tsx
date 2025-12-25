'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  id?: string;
  title: string;
  subtitle: string;
  location: string;
  capacity?: string;
  status: 'Operational' | 'In Development' | 'Active';
  type: 'Energy' | 'Freight' | 'Business';
  description: string;
  image?: string;
  index?: number;
}

export default function ProjectCard({
  id,
  title,
  subtitle,
  location,
  capacity,
  status,
  type,
  description,
  image,
  index = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(card);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(card);

    // 3D Tilt Effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      observer.disconnect();
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const getIcon = () => {
    switch (type) {
      case 'Energy':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Freight':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="1" y="3" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
            <path d="M16 8H20L23 11V16H16V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
            <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        );
      case 'Business':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 21V11L19 8V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 10H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 14H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 18H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'Operational':
      case 'Active':
        return styles.statusActive;
      case 'In Development':
        return styles.statusDevelopment;
      default:
        return '';
    }
  };

  return (
    <div 
      className={`${styles.card} reveal ${isVisible ? 'visible' : ''}`} 
      ref={cardRef} 
      id={id}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {image && (
        <div className={styles.imageContainer}>
          <Image 
            src={image} 
            alt={title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={styles.imageOverlay}></div>
        </div>
      )}
      
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            {getIcon()}
          </div>
          <span className={`${styles.status} ${getStatusClass()}`}>
            {status}
          </span>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Location</span>
              <span className={styles.metaValue}>{location}</span>
            </div>
            {capacity && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Capacity</span>
                <span className={styles.metaValue}>{capacity}</span>
              </div>
            )}
          </div>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.footer}>
          <Link href={`/companies#${id}`} className={styles.link}>
            <span>View Details</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
