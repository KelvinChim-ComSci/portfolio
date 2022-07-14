export interface work {
  title: string;
  link: URL;
  description: string;
  img?: any;
}

export const workItems: work[] = [
  {
    title: "CU Simulator",
    link: new URL("https://csci3100-game.herokuapp.com"),
    description:
      "A game for school project, created by me and my groupmates.Point-and-click RPG game about the University life of a student.",
  },
];
