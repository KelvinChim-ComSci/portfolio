import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Layout({ children }: any) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [deviceSize, changeDeviceSize] = useState(-1);
  const smBreakpoint = 640;
  const gradientDirection =
    deviceSize < smBreakpoint
      ? "bg-gradient-to-t from-neutral-500 to-neutral-300"
      : "bg-gradient-to-r from-neutral-500 to-neutral-300";
  const menuItems: { href: string; title: string; icon: any }[] = [
    {
      href: "/",
      title: "Homepage",
      icon: (
        <svg className="w-6 h-6 top-2/4 left-2/4" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
          />
        </svg>
      ),
    },
    {
      href: "/about",
      title: "About",
      icon: (
        <svg className="w-6 h-6 top-2/4 left-2/4" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M1.5,4V5.5C1.5,9.65 3.71,13.28 7,15.3V20H22V18C22,15.34 16.67,14 14,14C14,14 13.83,14 13.75,14C9,14 5,10 5,5.5V4M14,4A4,4 0 0,0 10,8A4,4 0 0,0 14,12A4,4 0 0,0 18,8A4,4 0 0,0 14,4Z"
          />
        </svg>
      ),
    },
    {
      href: "/work",
      title: "Work",
      icon: (
        <svg className="w-6 h-6 top-2/4 left-2/4" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"
          />
        </svg>
      ),
    },
    {
      href: "/contact",
      title: "Contact",
      icon: (
        <svg className="w-6 h-6 top-2/4 left-2/4" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"
          />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    setMounted(true);
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
  const sun = (
    <svg className="w-6 h-6 top-2/4 left-2/4" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M3.55 19.09L4.96 20.5L6.76 18.71L5.34 17.29M12 6C8.69 6 6 8.69 6 12S8.69 18 12 18 18 15.31 18 12C18 8.68 15.31 6 12 6M20 13H23V11H20M17.24 18.71L19.04 20.5L20.45 19.09L18.66 17.29M20.45 5L19.04 3.6L17.24 5.39L18.66 6.81M13 1H11V4H13M6.76 5.39L4.96 3.6L3.55 5L5.34 6.81L6.76 5.39M1 13H4V11H1M13 20H11V23H13"
      />
    </svg>
  );
  const moon = (
    <svg className="w-6 h-6 top-2/4 left-2/4" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
      />
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col-reverse sm:flex-row flex-1">
        <aside className="bg-zinc-300 dark:bg-slate-800 opacity-50 w-full sm:w-80">
          <nav className="mt-0 sm:mt-24">
            <div
              id="overlay"
              className="-z-10 absolute bg-neutral-400 dark:bg-neutral-300 pc"
            ></div>
            <ul className="flex justify-center sm:inline">
              {menuItems.map(({ href, title, icon }) => (
                <li
                  className={`p-2 pl-0 font-semibold float-left sm:float-none ${
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
        <main className="flex-1 bg-zinc-50 dark:bg-slate-800">{children}</main>
      </div>
      <footer className="flex justify-between items-center select-none p-2 bg-zinc-400 dark:bg-slate-700 text-black text-opacity-50 dark:text-white dark:text-opacity-50">
        <div className="flex items-center">
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {!mounted ? " " : theme === "dark" ? sun : moon}
          </button>
        </div>
        <div className="text-right text-sm">
          &copy; Created by Kelvin Chim. Last Updated at: 15/6/2022.
        </div>
      </footer>
    </div>
  );
}
