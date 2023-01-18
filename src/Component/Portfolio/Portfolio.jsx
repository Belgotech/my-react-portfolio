import "./Portfolio.css";
import IMG1 from "../../assets/portfolio6.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio1.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Belgotech",
    demo: "https://belgotech.netlify.app",
    github: "https://github.com/belgotech",
  },

  {
    id: 2,
    Image: IMG2,
    title: "Bio-Track",
    demo: "https://biotrack.netlify.app",
    github: "https://github.com/belgotech",
  },

  {
    id: 3,
    Image: IMG3,
    title: "Belgo-Todo",
    description: "This is a todo app used to keep record of todos, built with reatjs and css",
    demo: "https://belgotodo.netlify.app",
    github: "https://github.com/belgotech",
  },

  {
    id: 4,
    Image: IMG4,
    title: "Pig Game",
    description: "This is a pig game, built with javascript and css",
    demo: "https://belgogame.netlify.app",
    github: "https://github.com/belgotech",
  },

  {
    id: 5,
    Image: IMG5,
    title: "Beloved Portfolio",
    description: "This is my portfolio where i showcase my works and projects, built with reactjs and css",
    demo: "https://belovedobiora.netlify.app",
    github: "https://github.com/belgotech",
  },

  {
    id: 6,
    Image: IMG6,
    title: "Belgotech",
    description: "",
    demo: "https://belgotech.netlify.app",
    github: "https://github.com/belgotech",
  },
];

//react animation libray

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>Some OF My Works</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, Image, title, description, demo, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p href={description}></p>
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                live Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
