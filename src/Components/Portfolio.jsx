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
    title: "Project Lavender",
    techstack: "Firebase, MERN, GPAY",
    description:
      "This is a responsive website for a charitable trust which includes feature of payment integration, user authentication, admin panel, etc. ",
    url: "https://github.com/RickDeb2004/RamLakhanCharity",
  },
  {
    title: "AutomateGit",
    techstack: "Go, Git",
    description:
      "This project provides a set of tools to streamline your Git workflow and enhance productivity. It allows you to automate common Git actions, such as adding, committing, and pushing changes, while providing features like dynamic commit messages, interactive prompts, and logging.",
    url: "https://github.com/RickDeb2004/git-automate",
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
  {
    title: "Health-Check-Tool",
    techstack: "Go",
    description:
      "This tool is used to check the health of the server and also check the health of the website",
    url: "https://github.com/RickDeb2004/Health-check-tool",
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
