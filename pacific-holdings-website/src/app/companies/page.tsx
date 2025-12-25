import Image from 'next/image';
import styles from './companies.module.css';

export const metadata = {
  title: 'Our Companies | Pacific Holdings Limited',
  description: 'Explore Pacific Holdings companies - Pacific Energy with Omotosho, Olorunsogo, and Ajebandele power plants, and Pacific Freightliners for modern freight solutions.',
};

export default function CompaniesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridPattern}></div>
          <div className={styles.gradientOrb}></div>
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>Our Portfolio</span>
          <h1 className={styles.heroTitle}>Our Companies</h1>
          <p className={styles.heroSubtitle}>
            Pacific Holdings consists of two major entities with interests in Freight Services 
            and Energy/Power Generation sectors, driving Nigeria&apos;s development.
          </p>
        </div>
      </section>

      {/* Pacific Energy Section */}
      <section id="pacific-energy" className={styles.companySection}>
        <div className={styles.container}>
          <div className={styles.companyHeader}>
            <div className={styles.companyBadge}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M18 2L8 18H16L14 30L24 14H16L18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className={styles.sectionLabel}>Energy & Power Generation</span>
              <h2 className={styles.companyTitle}>Pacific Energy Company Ltd</h2>
            </div>
          </div>
          
          <p className={styles.companyDescription}>
            Pacific Energy owns and operates two of Nigeria&apos;s most important power plants, 
            ranked amongst the best-performing Independent Power Producer (IPP) facilities in the country. 
            We are committed to powering Nigeria&apos;s future through sustainable, reliable energy solutions.
          </p>

          <div className={styles.plantsGrid}>
            {/* Omotosho Power Plant */}
            <div id="omotosho" className={styles.plantCard}>
              <div className={styles.plantImageWrapper}>
                <Image 
                  src="/images/omotosho.png" 
                  alt="Omotosho Power Plant" 
                  fill 
                  className={styles.plantImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.plantHeader}>
                <div className={styles.plantStatus}>Operational</div>
                <div className={styles.plantCapacity}>335 MW</div>
              </div>
              <div className={styles.plantContent}>
                <h3>Omotosho Power Plant</h3>
                <p className={styles.plantSubtitle}>Omotosho Electric Energy Company</p>
                <p className={styles.plantDescription}>
                  One of Nigeria&apos;s most important and strategic power generation facilities. 
                  Located in Ondo State, this plant consistently ranks among the best-performing 
                  IPP facilities in the country, delivering reliable electricity to millions.
                </p>
                <div className={styles.plantMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Location</span>
                    <span className={styles.metaValue}>Ondo State, Nigeria</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Type</span>
                    <span className={styles.metaValue}>Gas Turbine Power Plant</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Status</span>
                    <span className={`${styles.metaValue} ${styles.statusGreen}`}>Fully Operational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Olorunsogo Power Plant */}
            <div id="olorunsogo" className={styles.plantCard}>
              <div className={styles.plantImageWrapper}>
                <Image 
                  src="/images/olorunsogo.png" 
                  alt="Olorunsogo Power Plant" 
                  fill 
                  className={styles.plantImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.plantHeader}>
                <div className={styles.plantStatus}>Operational</div>
                <div className={styles.plantCapacity}>335 MW</div>
              </div>
              <div className={styles.plantContent}>
                <h3>Olorunsogo Power Plant</h3>
                <p className={styles.plantSubtitle}>Sepco-Pacific Energy Partners Ltd</p>
                <p className={styles.plantDescription}>
                  A cornerstone of Nigeria&apos;s power infrastructure, delivering reliable electricity 
                  to support national development. This strategic facility operates as one of the 
                  country&apos;s top-performing independent power plants.
                </p>
                <div className={styles.plantMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Location</span>
                    <span className={styles.metaValue}>Ogun State, Nigeria</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Type</span>
                    <span className={styles.metaValue}>Gas Turbine Power Plant</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Status</span>
                    <span className={`${styles.metaValue} ${styles.statusGreen}`}>Fully Operational</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ajebandele Power Plant */}
            <div id="ajebandele" className={`${styles.plantCard} ${styles.upcoming}`}>
              <div className={styles.plantImageWrapper}>
                <Image 
                  src="/images/ajebandele.png" 
                  alt="Ajebandele Power Project" 
                  fill 
                  className={styles.plantImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.plantHeader}>
                <div className={`${styles.plantStatus} ${styles.statusUpcoming}`}>In Development</div>
                <div className={styles.plantCapacity}>1,250 MW</div>
              </div>
              <div className={styles.plantContent}>
                <h3>Ajebandele Power Project</h3>
                <p className={styles.plantSubtitle}>Pacific Energy Company Ltd</p>
                <p className={styles.plantDescription}>
                  Our flagship development project set to significantly boost Nigeria&apos;s national 
                  grid capacity. This ambitious project represents our commitment to clean energy 
                  and sustainable infrastructure development.
                </p>
                <div className={styles.plantMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Location</span>
                    <span className={styles.metaValue}>Ogun State, Nigeria</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Type</span>
                    <span className={styles.metaValue}>Combined Cycle Power Plant</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Status</span>
                    <span className={`${styles.metaValue} ${styles.statusGold}`}>Under Development</span>
                  </div>
                </div>
                <div className={styles.projectHighlight}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12 8H18L13 12L15 18L10 14L5 18L7 12L2 8H8L10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>Flagship Project - Will significantly boost national grid capacity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Stats */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>670 MW</span>
              <span className={styles.statLabel}>Current Installed Capacity</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1,920 MW</span>
              <span className={styles.statLabel}>Total Capacity (with Ajebandele)</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Top 5</span>
              <span className={styles.statLabel}>Ranked IPP in Nigeria</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pacific Freightliners Section */}
      <section id="freightliners" className={styles.companySection}>
        <div className={styles.container}>
          <div className={styles.companyHeader}>
            <div className={`${styles.companyBadge} ${styles.badgeGold}`}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 14H26L30 18V22H22V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="2"/>
                <circle cx="26" cy="24" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <span className={styles.sectionLabel}>Freight & Logistics</span>
              <h2 className={styles.companyTitle}>Pacific Freightliners Limited</h2>
            </div>
          </div>

          <div className={styles.freightGrid}>
            <div className={styles.freightContent}>
              <p className={styles.companyDescription}>
                Pacific Freightliners Limited offers modern trucking and freight solutions to move 
                goods efficiently across Nigeria. We support industrial and commercial clients with 
                reliable, safe, and timely logistics services.
              </p>
              
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Nationwide Coverage</h4>
                    <p>Comprehensive freight services across all regions of Nigeria</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Modern Fleet</h4>
                    <p>State-of-the-art trucks and equipment for efficient operations</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Industrial & Commercial</h4>
                    <p>Supporting businesses with reliable logistics solutions</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h4>Safety First</h4>
                    <p>Commitment to safe handling and timely delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.freightVisual}>
              <div className={styles.visualImageWrapper}>
                <Image 
                  src="/images/freightliners.png" 
                  alt="Pacific Freightliners Fleet" 
                  fill 
                  className={styles.visualImage}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.visualContentText}>
                  <h3>Moving Nigeria Forward</h3>
                  <p>Reliable logistics solutions that keep businesses running</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diversified Interests Section */}
      <section className={styles.diversifiedSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Legacy</span>
            <h2 className={styles.companyTitle}>Diversified Business Interests</h2>
            <p className={styles.sectionDescription}>
              With a legacy of operations spanning multiple sectors, Pacific Holdings has built a 
              strong portfolio of companies that drive value and national development.
            </p>
          </div>

          <div className={styles.sectorsGrid}>
            <div className={styles.sectorCard}>
              <div className={styles.sectorIcon}>🏦</div>
              <h4>Banking</h4>
              <p>Pacific Merchant Bank</p>
            </div>
            <div className={styles.sectorCard}>
              <div className={styles.sectorIcon}>🎓</div>
              <h4>Education</h4>
              <p>Educational Institutions</p>
            </div>
            <div className={styles.sectorCard}>
              <div className={styles.sectorIcon}>🏗️</div>
              <h4>Civil Engineering</h4>
              <p>Infrastructure Development</p>
            </div>
            <div className={styles.sectorCard}>
              <div className={styles.sectorIcon}>🏭</div>
              <h4>Manufacturing</h4>
              <p>Industrial Production</p>
            </div>
            <div className={styles.sectorCard}>
              <div className={styles.sectorIcon}>🌾</div>
              <h4>Agriculture</h4>
              <p>Agricultural Operations</p>
            </div>
            <div className={styles.sectorCard}>
              <div className={styles.sectorIcon}>🏠</div>
              <h4>Real Estate</h4>
              <p>Property Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Interested in Our Services?</h2>
            <p>
              Let&apos;s discuss how Pacific Holdings can support your business needs.
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              <span>Contact Us Today</span>
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
