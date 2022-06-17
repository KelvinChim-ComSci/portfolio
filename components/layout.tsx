import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Layout({ children }: any) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const menuItems: { href: string; title: string }[] = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/work",
      title: "Work",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ];

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
              className="-z-10 absolute bg-neutral-400 dark:bg-neutral-300"
            ></div>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li
                  className={`p-2 pl-0 font-semibold float-left sm:float-none ${
                    router.asPath === href &&
                    "bg-gradient-to-r from-neutral-400 to-neutral-300"
                  }`}
                  key={title}
                >
                  <Link href={href}>
                    <a
                      className={`select-none flex px-8 py-2 font-semibold text-black dark:text-white cursor-pointer `}
                    >
                      {title}
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
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? sun : moon}
          </button>
        </div>
        <div className="text-right text-sm">
          &copy; Created by Kelvin Chim. Last Updated at: 15/6/2022.
        </div>
      </footer>
    </div>
  );
}
