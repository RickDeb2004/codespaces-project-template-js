/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "EvoLoadBalancer",
    techstack: "Go,System Design Fundamentals",
    description:
      "It's basically a load-balancer which has some advance feature with improved load balancing algorithm and having health awareness of servers",
    url: "https://github.com/RickDeb2004/EvoLoadBalancer",
  },
  {
    title: "PowerCache",
    techstack: "Go ,System Design Fundamentals",
    description:
      "It's a cache server which has some advance feature with improved caching algorithm and having health awareness of servers",
    url: "https://github.com/RickDeb2004/PowerCache ",
  },
  {
    title: "securE-mail",
    techstack: "Go",
    description:
      "It works as email verification system which is used to verify the email address of the user and domain of the mails and also check the personal info about the owner of the mail ",
    url: "https://github.com/RickDeb2004/securE-mail",
  },
  {
    title: "FireDataBase",
    techstack: "Firebase, MERN,REST API ",
    description: "Making Database using Firebase",
    url: "https://github.com/RickDeb2004/SPAMBYTES-HACKFEST/tree/master",
  },
  {
    title: "MERN-Stack-Project",
    techstack: "MERN",
    description: "A MERN Stack Project",
    url: "https://github.com/RickDeb2004/MONDAY-MORNING-_TASK-BACKEND",
  },
  {
    title: "Discord Bot",
    techstack: "Go",
    description:
      "This bot project is designed to create a Discord bot with various features. The project consists of multiple files, including main.go, bot.go, config.go, and additional files for utility, poll, quiz and custom embed functionality.",
    url: "https://github.com/RickDeb2004/bot",
  },
  {
    title: "Power-project",
    techstack: "Go,Cs Fundamentals",
    description: "I have made very advanced distributed system with load balancer and cache",
    url: "https://github.com/RickDeb2004/power-project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
