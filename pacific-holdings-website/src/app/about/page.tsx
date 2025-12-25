import styles from './about.module.css';
import AnimatedCounter from '@/components/AnimatedCounter';

export const metadata = {
  title: 'About Us | Pacific Holdings Limited',
  description: 'Learn about Pacific Holdings Limited - a diversified Nigerian conglomerate with over 25 years of excellence in power generation, freight logistics, and infrastructure.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridPattern}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>About Us</span>
          <h1 className={styles.heroTitle}>Our Story of Excellence</h1>
          <p className={styles.heroSubtitle}>
            From humble beginnings in 1983 to becoming one of Nigeria&apos;s most accomplished 
            privately held multi-sectoral businesses.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className={styles.overview}>
        <div className={styles.container}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewContent}>
              <h2 className={styles.sectionTitle}>Our Diversified Conglomerate</h2>
              <p className={styles.text}>
                Pacific Holdings Limited is a diversified conglomerate in Lagos, Nigeria with an 
                exceptional reputation for ethical, progressive, and global business best practices.
              </p>
              <p className={styles.text}>
                From its humble beginnings in December 1983 as a single business operation, Pacific 
                Holdings has successfully expanded its scope of business across industries including 
                Banking (Pacific Merchant Bank), Education, Civil Engineering, Energy & Power Generation, 
                Manufacturing, Agriculture, Trading, Freight Services, Gas, and Real Estate.
              </p>
              <p className={styles.text}>
                The company is proud of its unique history and extraordinary growth over the years, 
                which has further cemented its place amongst Nigeria&apos;s most accomplished and esteemed 
                privately held multi-sectoral businesses.
              </p>
            </div>
            <div className={styles.overviewStats}>
              <AnimatedCounter end={25} suffix="+" label="Years of Excellence" />
              <AnimatedCounter end={2000} suffix="+" label="Employees Nationwide" isGold />
              <AnimatedCounter end={670} suffix=" MW" label="Installed Capacity" />
              <AnimatedCounter end={3} label="Major Power Projects" isGold />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className={styles.history}>
        <div className={styles.container}>
          <div className={styles.historyHeader}>
            <span className={styles.sectionLabel}>Our Journey</span>
            <h2 className={styles.sectionTitle}>A Brief History</h2>
          </div>

          <div className={styles.timeline}>
            <div className={styles.timelineTrack}></div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>1983</div>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>The Beginning</h3>
                <p>
                  On December 13th, 1983, the Vision of the Pacific Group of Companies was birthed 
                  through the establishment of Pacific Drilling Company, a limited liability company 
                  which specialized in geophysical surveys, drilling of boreholes, and delivery of 
                  water treatment services.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>1990</div>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>Becoming a Conglomerate</h3>
                <p>
                  By 1990, Pacific had added 3 more businesses to its rapidly growing portfolio 
                  and successfully transitioned from being a single business into an emerging 
                  conglomerate. Pacific Holdings Limited was incorporated on December 28th, 1990 
                  to group all business concerns under one umbrella.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2000s</div>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>Diversification & Growth</h3>
                <p>
                  Expansion into multiple sectors including Banking, Education, Civil Engineering, 
                  Manufacturing, Agriculture, Trading, and Real Estate. Building a strong portfolio 
                  of companies that drive value and national development.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2010s</div>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>Energy Sector Leadership</h3>
                <p>
                  Strategic entry into Nigeria&apos;s power sector with the acquisition of two of 
                  the most important power generation plants in the country - Omotosho (335 MW) 
                  and Olorunsogo (335 MW) plants, ranked amongst the best-performing IPP facilities.
                </p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>Today</div>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3>Powering the Future</h3>
                <p>
                  Pacific Holdings continues to explore business opportunities critical to life 
                  in Nigeria. Currently developing the 1,250 MW Ajebandele Power Project to 
                  significantly boost the national grid and drive sustainable energy solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 14V24L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To deliver innovative, high-impact solutions across energy, freight, and 
                infrastructure sectors that shape lives, drive economic growth, and contribute 
                to Nigeria&apos;s development with ethical and progressive business practices.
              </p>
            </div>
            
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 8L28 16L36 17L30 23L31.5 31L24 27L16.5 31L18 23L12 17L20 16L24 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be Africa&apos;s leading diversified conglomerate, recognized for excellence 
                in sustainable energy solutions, reliable logistics services, and transformative 
                infrastructure development that powers progress and prosperity.
              </p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 8V40M8 24H40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, excellence, innovation, and community. We approach every venture 
                with a deep understanding of the market and commitment to delivering value 
                to all stakeholders while making a positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Partner With Us?</h2>
            <p>
              Discover how Pacific Holdings can help power your next venture.
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
