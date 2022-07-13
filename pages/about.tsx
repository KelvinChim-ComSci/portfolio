import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <div className="flex h-full flex-col p-6">
      <h1 className="text-4xl mb-5 font-bold">About Me:</h1>
      <div id="backgroundInfo" className="flex grow">
        I am a software developer just graduated from University. Currently
        working as a full-time frontend developer, I wish one day I can work in
        the gaming industry and develop memorable games in the future.
      </div>
      <div id="relatedFields" className="flex grow">
        Previous Experience:
        <ul>
          <li>
            Major in Mathematics, Computation and Applied Mathematics Stream
            <br />
            Minor in Computer Science
            <br />
            The Chinese University of Hong Kong
          </li>
          <li></li>
        </ul>
        <Link href="https://github.com/KelvinChim-ComSci/">
          <AiFillGithub size={"2rem"} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
