import Image from "next/image";
import picture from "public/static/images/personalPicture4.jpeg";

export default function Home() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div
        className="flex flex-col md:flex-row align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="flex flex-col md:flex-row h-full w-full border-2">
          <div
            className="flex flex-col justify-center p-4 md:w-1/2"
            style={{ left: "20%", top: "40%" }}
          >
            <div className="font-bold text-xl text-slate-400">
              Hello there! I&apos;m
            </div>
            <div className="font-bold text-6xl text-black dark:text-white">
              Kelvin Chim
            </div>
            <div className="font-bold text-xl text-slate-400">
              Based in Hong Kong,
            </div>
            <div className="font-bold text-xl text-slate-400">
              I&apos;m a software engineer.
            </div>
          </div>
          <div className="relative md:rounded-full w-full h-full md:w-1/2 overflow-hidden ">
            <Image
              fill
              src={picture}
              alt="Me back when I graduated"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
