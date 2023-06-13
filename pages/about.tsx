import Image from "next/image";

export default function About() {
  return (
    <div className="flex h-full flex-col p-6">
      <h1 className="text-4xl mb-5 font-bold">About Me:</h1>
      <div
        className="flex flex-col md:flex-row align-items-center"
        style={{ height: "80vh" }}
      >
        <div id="backgroundInfo" className="w-full">
          I&apos;m an enthusiastic software developer just graduated from
          University. As I delve into anything I&apos;m interested in, I
          optimize most aspect related to it. Aiming high on creating something
          meticulous, I look forward to a day I can create perfect products.
          <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-6">
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Graduated at The Chinese University of Hong Kong
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Major in Mathematics (Computer & Applied Mathematics Stream),
                Minor in Computer Science, graduated with Second Upper Class
                Honour.
              </p>
            </li>
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2022
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Started Frontend Developing journey at Visionaries 777 Limited
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Focused on building the web portal of a Preventive Maintainance
                App, Inspekly, using React Typescript. Revamped the main web
                portal and added new features on top of the app using Firebase
                and other technologies.
              </p>
            </li>
          </ol>
        </div>
        <div className="relative w-full md:w-1/2">
          <Image
            fill
            src="/static/images/personalPicture7.jpeg"
            alt="Me back when I graduated"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
