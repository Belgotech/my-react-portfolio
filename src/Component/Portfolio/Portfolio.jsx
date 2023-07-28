import "./Portfolio.css";
import IMG1 from "../../assets/por.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/jobby.png";
import IMG4 from "../../assets/portfolio3.png";
import IMG5 from "../../assets/portfolio.png";
import IMG6 from "../../assets/portfolio4.png";
import IMG7 from "../../assets/portfolio6.png";

const data = [
  {
    id: 7,
    Image: IMG1,
    title: "Krypt",
    description: "Krypt allows you send real-life Etherum(ropsten test) to anyone across the world, smart contract written in solidity, deployment script Javascript and UI React-JS and tailwind ",
    demo: "https://kryptb.netlify.app",
    github: "https://github.com/Belgotech/web_3",
    // learn: "/PortfolioDetails1",
  },
  {
    id: 1,
    Image: IMG2,
    title: "Chopings Recipe",
    description: "This project shows the power of integration using REST, built with html, css and Javascript ",
    demo: "https://chopingsrecipe.netlify.app",
    github: "https://github.com/Belgotech/Chopings-Resturant-",
    // learn: "/PortfolioDetails1",
  },

  {
    id: 5,
    Image: IMG3,
    title: "Jobby",
    description: "This is a React application showing all the functions and features of React-router-dom",
    demo: "https://jobbyb.netlify.app",
    github: "https://github.com/Belgotech/jobby",
    // learn: "/PortfolioDetails1",
  },
  {
    id: 2,
    Image: IMG4,
    title: "Belgo-Todo",
    description: "This is a todo app used to keep record of todos, built with reatjs and css",
    demo: "https://belgotodo.netlify.app",
    github: "https://github.com/Belgotech/Basic-Crude-Application",
    // learn: "/PortfolioDetails1",
  },
  {
    id: 3,
    Image: IMG5,
    title: "BelgoStore",
    description: "This is an ecomerce built with React and Css",
    demo: "https://belgostore.netlify.app",
    github: "https://github.com/belgotech/ecomerce",
    // learn: "/PortfolioDetails1",
  },

  

  {
    id: 4,
    Image: IMG6,
    title: "Pig Game",
    description: "This is a pig game, built with javascript and css",
    demo: "https://belgogame.netlify.app",
    github: "https://github.com/Belgotech/pig-game",
    // learn: "/PortfolioDetails1",
  },


  {
    id: 6,
    Image: IMG7,
    title: "Belgotech",
    description: "This is a bootsrap application",
    demo: "https://belgotech.netlify.app",
    github: "https://github.com/belgotech",
    // learn: "/PortfolioDetails1",
  },
];




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
              <p>{description}</p>
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                live Demo
              </a>
              {/* <a href={learn}>learn more</a> */}
              {/* <a href="">About</a> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
