import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const targetDate = new Date("2026-10-01T10:30:00+05:30").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="invitation">

      {/* Decorative Background */}
      <div className="decor decor-one">✦</div>
      <div className="decor decor-two">✧</div>
      <div className="decor decor-three">✦</div>

      {/* HERO */}
      <section className="hero">

        <div className="top-symbol">✦</div>

        <p className="eyebrow">
          TOGETHER WITH THEIR FAMILIES
        </p>

        <h1>Engagement</h1>
        <h2>Ceremony</h2>

        <div className="ornament">
          <span></span>
          <b>◆</b>
          <span></span>
        </div>

        <p className="hero-text">
          With the blessings of the Almighty and the loving memories
          of our elders, we cordially invite you to celebrate the
          engagement of
        </p>

      </section>


      {/* COUPLE PHOTO */}
      <section className="couple-section">

        <div className="photo-decoration photo-left">
          ✦
        </div>

        <div className="photo-frame">

          <div className="photo-inner">
            <img
              src="/Akhil.webp"
              alt="Akhil and Shamini"
            />
          </div>

          <div className="photo-corner top-left"></div>
          <div className="photo-corner top-right"></div>
          <div className="photo-corner bottom-left"></div>
          <div className="photo-corner bottom-right"></div>

        </div>

        <div className="photo-decoration photo-right">
          ✧
        </div>

      </section>


      {/* COUPLE NAMES */}
      <section className="couple-names">

        <div className="person">
          <p className="label">GROOM</p>

          <h3>Akhil K</h3>

          <p>
            S/o Late K. Prabhakaran &amp; Kamalakshi
            <br />
            Kunnumal, Kottikulam
          </p>
        </div>

        <div className="ampersand">
          <span>&amp;</span>
        </div>

        <div className="person">
          <p className="label">BRIDE</p>

          <h3>Shamini K</h3>

          <p>
            D/o Late Raghavan &amp; Yashoda
          </p>
        </div>

      </section>


      {/* DATE */}
      <section className="event-date">

        <p className="label">SAVE THE DATE</p>

        <h3>01 • 10 • 2026</h3>

        <p>Thursday</p>

      </section>


      {/* COUNTDOWN */}
      <section className="countdown-section">

        <p className="countdown-title">
          COUNTING DOWN TO OUR SPECIAL DAY
        </p>

        <div className="countdown">

          <div className="count-box">
            <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
            <span>DAYS</span>
          </div>

          <div className="separator">:</div>

          <div className="count-box">
            <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
            <span>HOURS</span>
          </div>

          <div className="separator">:</div>

          <div className="count-box">
            <strong>
              {String(timeLeft.minutes).padStart(2, "0")}
            </strong>
            <span>MINUTES</span>
          </div>

          <div className="separator">:</div>

          <div className="count-box">
            <strong>
              {String(timeLeft.seconds).padStart(2, "0")}
            </strong>
            <span>SECONDS</span>
          </div>

        </div>

      </section>


      {/* DETAILS */}
      <section className="details">

        <div className="detail">

          <div className="detail-icon">
            ◇
          </div>

          <span className="detail-label">
            MUHURTHAM
          </span>

          <strong>
            10:30 AM – 11:30 AM
          </strong>

        </div>


        <div className="detail">

          <div className="detail-icon">
            ♧
          </div>

          <span className="detail-label">
            VENUE
          </span>

          <strong>
            Dhara Convention Center
          </strong>

          <small>
            Kudlu, Keralam
          </small>

          <a
            href="https://share.google/1bVpiLYNbgZHVDpPw"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location ↗
          </a>

        </div>

      </section>


      {/* MESSAGE */}
      <section className="message">

        <div className="small-ornament">
          ✦
        </div>

        <p>
          Your presence and blessings will make this joyful occasion
          even more memorable as our families come together to celebrate
          the beginning of a beautiful journey.
        </p>

        <div className="small-ornament">
          ✦
        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <p className="quote">
          “Two hearts, one promise,
          <br />
          a lifetime of togetherness.”
        </p>

        <div className="footer-line">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        <p className="warm">
          WITH WARM REGARDS
        </p>

        <h4>
          Akhil &amp; Family
        </h4>

      </footer>

    </main>
  );
}

export default App;