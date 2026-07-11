import { useCallback, useState } from "react";
import {
  MdArrowBack,
  MdArrowForward,
  MdCalendarToday,
  MdEmojiEvents,
  MdLocationOn,
} from "react-icons/md";
import { achievements } from "../data/portfolio";
import "./styles/PortfolioSections.css";

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((index) =>
      index === 0 ? achievements.length - 1 : index - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((index) =>
      index === achievements.length - 1 ? 0 : index + 1
    );
  }, []);

  return (
    <section className="achievements-section section-container" id="achievements">
      <div className="portfolio-section-heading">
        <span>Wins & Milestones</span>
        <h2>
          <strong>Achievements</strong>
        </h2>
        <p>Hackathon podiums, open-source wins, and creative milestones.</p>
      </div>

      <div className="achievement-carousel">
        <button
          className="carousel-arrow carousel-arrow-left"
          onClick={goToPrev}
          aria-label="Previous achievement"
          data-cursor="disable"
        >
          <MdArrowBack />
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          onClick={goToNext}
          aria-label="Next achievement"
          data-cursor="disable"
        >
          <MdArrowForward />
        </button>

        <div className="achievement-track-wrap">
          <div
            className="achievement-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {achievements.map((item) => (
              <article className="achievement-slide" key={item.title}>
                <div className="achievement-card">
                  <div className="achievement-copy">
                    <div className="achievement-icon">
                      <MdEmojiEvents />
                    </div>
                    <span className="achievement-result">{item.result}</span>
                    <h3>{item.title}</h3>
                    <div className="achievement-meta">
                      <span>
                        <MdCalendarToday /> {item.date}
                      </span>
                      <span>
                        <MdLocationOn /> {item.location}
                      </span>
                    </div>
                    <h4>Project: {item.project}</h4>
                    <p>{item.description}</p>
                    <div className="achievement-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="achievement-photo">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <strong>{item.result}</strong>
                      <span>{item.title}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="carousel-dots">
          {achievements.map((item, index) => (
            <button
              key={item.title}
              className={`carousel-dot ${
                index === currentIndex ? "carousel-dot-active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${item.title}`}
              data-cursor="disable"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
