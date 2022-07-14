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
        </aside>
        <main className="flex-1 bg-zinc-50 dark:bg-slate-800 sm:pr-80 sm:pl-40">
          {children}
        </main>
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
