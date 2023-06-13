import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="flex h-full flex-col p-6">
      <h1 className="text-4xl mb-5 font-bold">Contact:</h1>
      <div className="flex flex-row gap-2">
        <Link href="https://github.com/KelvinChim-ComSci/">
          <AiFillGithub size={"2rem"} className="cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/ka-chun-chim/">
          <AiFillLinkedin size={"2rem"} className="cursor-pointer" />
        </Link>
        <Link href="mailto:kelvin2000cc@gmail.com">
          <AiFillMail size={"2rem"} className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
