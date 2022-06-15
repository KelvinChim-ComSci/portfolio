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

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-zinc-300 dark:bg-slate-800 opacity-50 w-full md:w-80">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            toggle
          </button>
          <nav className="mt-24">
            <div id="overlay" className="-z-10 absolute bg-neutral-300"></div>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li
                  className={`p-2 pl-0 font-semibold ${
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
      <footer className="select-none p-2 bg-zinc-400 dark:bg-slate-700 text-right text-sm text-black dark:text-white">
        &copy; Created by Kelvin Chim. Last Updated at: 15/6/2022.
      </footer>
    </div>
  );
}
