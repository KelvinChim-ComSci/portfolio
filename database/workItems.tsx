export interface work {
  title: string;
  link: URL;
  description: string;
  img?: string;
}

export const workItems: work[] = [
  {
    title: "CU Simulator",
    link: new URL("https://csci3100-game.herokuapp.com"),
    description: `A Point-and-click RPG game about the University life of a student, created as a school project by me and my groupmates. 
      The project utilized MERN stack and various node modules to create a simple web game, which also includes instant messaging.`,
    img: "CUSimulator",
  },
];
