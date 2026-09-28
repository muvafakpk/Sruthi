import "./App.css";

function App() {
  return (
    <main className="invitation">

      {/* Top Section */}
      <section className="hero">
        <div className="hero-decoration">✦</div>

        <p className="small-title">TOGETHER WITH THEIR FAMILIES</p>

        <h1>Engagement</h1>
        <h2>Ceremony</h2>

        <div className="gold-line">
          <span>◆</span>
        </div>

        <p className="intro">
          With the blessings of the Almighty and the loving memories of
          our elders, we cordially invite you to celebrate the engagement
          of
        </p>
      </section>

      {/* Main Content */}
      <section className="content">

        {/* Groom */}
        <div className="person">
          <p className="person-label">GROOM</p>

          <h3>Akhil K</h3>

          <p className="family">
            S/o Late K. Prabhakaran &amp; Kamalakshi
            <br />
            Kunnumal, Kottikulam
          </p>
        </div>

        {/* Ring */}
        <div className="ring-divider">
          <span>💍</span>
        </div>

        {/* Bride */}
        <div className="person">
          <p className="person-label">BRIDE</p>

          <h3>Shamini K</h3>

          <p className="family">
            D/o Late Raghavan &amp; Yashoda
          </p>
        </div>

        {/* Details */}
        <div className="details">

          <div className="detail-card">
            <span className="detail-icon">01</span>
            <p className="detail-title">DATE</p>
            <p className="detail-value">October 01, 2026</p>
          </div>

          <div className="detail-card">
            <span className="detail-icon">10:30</span>
            <p className="detail-title">MUHURTHAM</p>
            <p className="detail-value">
              10:30 AM – 11:30 AM
            </p>
          </div>

          <div className="detail-card venue-card">
            <span className="detail-icon">⌖</span>
            <p className="detail-title">VENUE</p>

            <p className="detail-value">
              Dhara Convention Center
            </p>

            <p className="location">
              Kudlu, Keralam
            </p>

            <a
              href="https://share.google/1bVpiLYNbgZHVDpPw"
              target="_blank"
              rel="noopener noreferrer"
              className="location-button"
            >
              View Location
              <span>↗</span>
            </a>
          </div>

        </div>

        {/* Message */}
        <div className="message">
          <div className="message-line"></div>

          <p>
            Your presence and blessings will make this joyful occasion
            even more memorable as our families come together to celebrate
            the beginning of a beautiful journey.
          </p>

          <div className="message-line"></div>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer">

        <p className="quote">
          “Two hearts, one promise,
          <br />
          a lifetime of togetherness.”
        </p>

        <div className="footer-divider">
          <span>✦</span>
        </div>

        <p className="regards">WITH WARM REGARDS</p>

        <p className="family-name">
          Akhil &amp; Family
        </p>

      </footer>

    </main>
  );
}

export default App;