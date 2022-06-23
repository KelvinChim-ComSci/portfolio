import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold">About</h1>
      <span className="text-7xl">💬</span>
      <Link href="https://github.com/KelvinChim-ComSci/">
        <AiFillGithub size={"2rem"} className="cursor-pointer" />
      </Link>
    </div>
  );
}
