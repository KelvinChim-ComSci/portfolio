import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <div className="flex h-full flex-col p-6">
      <h1 className="text-4xl mb-5 font-bold">About Me: </h1>
      <div id="backgroundInfo" className="flex grow"></div>
      <div id="relatedFields" className="flex grow">
        <Link href="https://github.com/KelvinChim-ComSci/">
          <AiFillGithub size={"2rem"} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
