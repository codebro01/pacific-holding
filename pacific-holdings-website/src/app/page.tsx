'use client';
import { useState, useEffect } from 'react';

import styles from './page.module.css';
import AnimatedCounter from '@/components/AnimatedCounter';
import ProjectCard from '@/components/ProjectCard';
import SolutionCard from '@/components/SolutionCard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`,
      }))
    );
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridPattern}></div>
          <div className={styles.gradientOrb1}></div>
          <div className={styles.gradientOrb2}></div>
          <div className={styles.particles}>
            {particles.map((p, i) => (
              <div 
                key={i} 
                className={styles.particle}
                style={{
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animationDuration: p.duration
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>Pacific Holdings Limited</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleLine}>Powering the</span>
            <span className={`${styles.titleLine} ${styles.titleAccent}`}>Future.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            A diversified Nigerian conglomerate with an exceptional reputation for ethical, 
            progressive, and global business best practices in power generation, freight logistics, 
            and infrastructure development.
          </p>
          <div className={styles.heroCtas}>
            <a href="#projects" className={styles.primaryCta}>
              <span>Explore Our Work</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryCta}>
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M12 19L6 13M12 19L18 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>About Us</span>
              <h2 className={styles.sectionTitle}>Our Passion for Services</h2>
              <p className={styles.aboutText}>
                We approach every venture with a deep understanding of the Nigerian and global market. 
                Our commitment is to deliver innovative, high-impact solutions across energy, freight, 
                real estate, and other sectors that shape lives and drive economic growth.
              </p>
              <p className={styles.aboutText}>
                From its humble beginnings in December 1983 as Pacific Drilling Company, Pacific Holdings 
                has successfully expanded across industries including Banking, Education, Civil Engineering, 
                Energy & Power Generation, Manufacturing, Agriculture, Trading, Freight Services, Gas, and Real Estate.
              </p>
              <a href="/about" className={styles.learnMoreLink}>
                <span>Read our full story</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className={styles.statsGrid}>
              <AnimatedCounter end={25} suffix="+" label="Years of Excellence" />
              <AnimatedCounter end={3} label="Major Power Projects" isGold />
              <AnimatedCounter end={2000} suffix="+" label="Employees Nationwide" />
              <AnimatedCounter end={670} suffix=" MW" label="Installed Capacity" isGold />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Portfolio</span>
            <h2 className={styles.sectionTitle}>Our Projects</h2>
            <p className={styles.sectionDescription}>
              Pacific Holdings operates across multiple sectors, with a focus on energy 
              and freight services that impact lives and businesses nationwide.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            <ProjectCard
              id="omotosho"
              title="Omotosho Power Plant"
              subtitle="Pacific Energy Company Limited"
              location="Ondo State, Nigeria"
              capacity="335 MW"
              description="A key national asset contributing significantly to Nigeria's grid stability through sustainable power generation."
              status="Operational"
              type="Energy"
              index={0}
              image="/images/project-1.jpg"
            />
            <ProjectCard
              id="olorunsogo"
              title="Olorunsogo Power Plant"
              subtitle="Pacific Energy Company Limited"
              location="Ogun State, Nigeria"
              capacity="335 MW"
              description="Delivering consistent and reliable energy to millions of homes and businesses across the region."
              status="Operational"
              type="Energy"
              index={1}
              image="/images/project-2.jpg"
            />
            <ProjectCard
              id="ajebandele"
              title="Ajebandele Power Project"
              subtitle="Pacific Energy Company Limited"
              location="Ondo State, Nigeria"
              capacity="1,250 MW"
              description="A landmark development set to be one of Nigeria's largest power plants upon completion."
              status="In Development"
              type="Energy"
              index={2}
              image="/images/project-3.jpg"
            />
            <ProjectCard
              id="freight"
              title="Pacific Freightliners"
              subtitle="Logistics & Haulage"
              location="Nationwide"
              description="A premier logistics solution provider ensuring efficient material transport across Nigeria with a massive fleet."
              status="Active"
              type="Freight"
              index={3}
              image="/images/project-4.png"
            />
            <ProjectCard
              id="diversified"
              title="Diversified Interests"
              subtitle="Banking, Education, Real Estate & More"
              location="Various Locations"
              description="With a legacy of operations across multiple sectors, Pacific Holdings has built a strong portfolio that drives value and national development."
              status="Active"
              type="Business"
              index={4}
              image="/images/diversified.png"
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className={styles.solutions}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Offer</span>
            <h2 className={styles.sectionTitle}>Solutions that Power Progress</h2>
            <p className={styles.sectionDescription}>
              We deliver comprehensive solutions across energy and logistics sectors, 
              built on four core pillars of excellence.
            </p>
          </div>

          <div className={styles.solutionsGrid}>
            <SolutionCard
              icon="professional"
              title="Professional"
              description="We deliver best-in-class solutions across power generation, freight logistics, and infrastructure, backed by decades of experience and ethical business practices that set industry standards."
              index={0}
            />
            <SolutionCard
              icon="quality"
              title="Quality"
              description="Our operations meet global standards, from managing top-performing power plants to providing reliable logistics and support services nationwide. Quality is not negotiable."
              index={1}
            />
            <SolutionCard
              icon="affordability"
              title="Affordability"
              description="We structure projects and partnerships to deliver maximum value and sustainable pricing for governments, communities, and businesses across Nigeria."
              index={2}
            />
            <SolutionCard
              icon="innovation"
              title="Innovation"
              description="We invest in clean energy and modern technologies, like our 1,250 MW Ajebandele project, driving Nigeria's future with sustainable infrastructure and forward-thinking solutions."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section id="values" className={styles.values}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <span className={styles.sectionLabel}>Our Value</span>
            <h2 className={styles.sectionTitle}>Powering Progress with Purpose</h2>
          </div>

          <div className={styles.valuesTimeline}>
            <div className={styles.timelineLine}></div>
            
            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>01</div>
              <div className={styles.valueContent}>
                <h3>Driving Nigeria&apos;s Energy Future</h3>
                <p>We invest in sustainable power generation through Pacific Energy, operating top-performing plants like Omotosho and Olorunsogo, and developing the 1,250 MW Ajebandele plant to boost the national grid.</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>02</div>
              <div className={styles.valueContent}>
                <h3>Delivering Excellence Across Sectors</h3>
                <p>From energy to freight logistics and other diversified ventures, we deliver reliable solutions that support businesses, communities, and Nigeria&apos;s development.</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>03</div>
              <div className={styles.valueContent}>
                <h3>Championing Sustainability</h3>
                <p>We champion clean energy initiatives and modern infrastructure that reduce environmental impact while meeting the country&apos;s growing energy demands.</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueNumber}>04</div>
              <div className={styles.valueContent}>
                <h3>Building Communities</h3>
                <p>With over 2,000 employees nationwide, our operations provide employment, skills development, and economic opportunities that strengthen society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactBackground}>
          <div className={styles.contactOrb}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactHeader}>
              <span className={styles.sectionLabel}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>Ready to Power Your Future?</h2>
              <p className={styles.sectionDescription}>
                We&apos;re here to help. Reach out to discuss partnerships, opportunities, or learn more about our services.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
