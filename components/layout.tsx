import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { menuItems } from "./menuItems";
import DarkModeToggle from "./darkModeToggle";

export default function Layout({ children }: any) {
  const router = useRouter();
  const [deviceSize, changeDeviceSize] = useState(-1);
  const smBreakpoint = 640;
  const gradientDirection =
    deviceSize < smBreakpoint
      ? "bg-gradient-to-t from-neutral-500 to-neutral-300"
      : "bg-gradient-to-r from-neutral-500 to-neutral-300";

  useEffect(() => {
    const overlay: HTMLElement = document.getElementById("overlay")!;
    const navItems: NodeListOf<Element> =
      document.querySelectorAll("nav ul li")!;

    navItems.forEach((item) => {
      item.addEventListener("mouseover", (e) => {
        e.preventDefault();
        overlay.classList.add("active");
        let position = item.getBoundingClientRect();
        overlay.style.top = position.y.toString() + "px";
        overlay.style.left = position.x.toString() + "px";
        overlay.style.height = position.height.toString() + "px";
        overlay.style.width = position.width.toString() + "px";
      });

      item.addEventListener("mouseout", () => {
        overlay?.classList.remove("active");
      });
    });
  }, []);

  useEffect(() => {
    if (deviceSize === -1) changeDeviceSize(window.innerWidth);
    const resizeWidth = () => changeDeviceSize(window.innerWidth);
    window.addEventListener("resize", resizeWidth);

    return () => window.removeEventListener("resize", resizeWidth);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col-reverse sm:flex-row flex-1">
        <aside className="bg-zinc-300 dark:bg-slate-900 opacity-100 sm:opacity-50 w-full sm:w-80 sticky bottom-0">
          <nav className="mt-0 sm:mt-24">
            <div
              id="overlay"
              className="-z-10 absolute bg-neutral-400 dark:bg-neutral-300 pc hidden sm:block"
            ></div>
            <ul className="flex justify-center sm:inline">
              {menuItems.map(({ href, title, icon }) => (
                <li
                  className={`p-2 sm:pl-0 font-semibold float-left sm:float-none ${
                    router.asPath === href && gradientDirection
                  }`}
                  key={title}
                >
                  <Link href={href}>
                    <a
                      className={`select-none flex px-8 py-2 font-semibold text-black dark:text-white cursor-pointer `}
                    >
                      {deviceSize === -1
                        ? "..."
                        : deviceSize < smBreakpoint
                        ? icon
                        : title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
        </aside>
        <main className="flex-1 bg-zinc-50 dark:bg-slate-800">{children}</main>
      </div>
      <footer className="flex justify-between items-center select-none p-2 bg-zinc-400 dark:bg-slate-700 text-black text-opacity-50 dark:text-white dark:text-opacity-50">
        <DarkModeToggle />
        <div className="text-right text-sm">
          &copy; Created by Kelvin Chim. Last Updated at: 21/6/2022.
        </div>
      </footer>
    </div>
  );
}
