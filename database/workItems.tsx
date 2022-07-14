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
      "A Point-and-click RPG game about the University life of a student, created as a school project by me and my groupmates.",
  },
];
