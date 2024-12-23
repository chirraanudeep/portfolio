import "./Hero.css";
import profilePhoto from "../../assets/PHOTO.jpg";
import resume from "../../assets/main cv.pdf";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, Myself Chirra Anudeep Goud</h1>
          <p>
            A passionate Full Stack Developer building responsive and user-friendly applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-button">View Projects</a>
            <a href={resume} className="secondary-button" download="Anudeep_Goud_Resume">
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePhoto} alt="Anudeep Goud" />
        </div>
      </div>
    </section>
  );
}
