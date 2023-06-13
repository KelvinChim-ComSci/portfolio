export interface work {
  title: string;
  link: URL;
  description: string;
  img?: any;
}

import CUSimulator from "public/static/images/CUSimulator.png";
import prevJobExample from "public/static/images/prevJobExample.png";

export const workItems: work[] = [
  {
    title: "CU Simulator",
    link: new URL("https://csci3100-game.herokuapp.com"),
    description: `A Point-and-click RPG game about the University life of a student, created as a school project by me and my groupmates. 
      The project utilized MERN stack and various node modules to create a simple web game, which also includes instant messaging.`,
    img: CUSimulator,
  },
  {
    title: "Work From Previous Job (Inspekly Portal)",
    link: new URL("https://portal.inspekly.com"),
    description: `The Web Portal for the previous Job I worked on, created using React.JS and Typescript. 
    It also utilizes Firebase Messaging, AWS Email System and real-time updating components for clients.`,
    img: prevJobExample,
  },
];
