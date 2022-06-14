import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Layout({ children }: any) {
  const router = useRouter();
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
        <aside className="bg-slate-200 opacity-50 w-full md:w-80">
          <nav className="mt-24">
            <div id="overlay" className="-z-10 absolute bg-slate-400"></div>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li
                  className={`p-2 pl-0 ${
                    router.asPath === href &&
                    "bg-gradient-to-r from-gray-400 to-slate-300 text-white"
                  }`}
                  key={title}
                >
                  <Link href={href}>
                    <a
                      className={`flex px-8 py-2 hover:bg-gradient-to-r gray-400 cursor-pointer `}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 bg-slate-50">{children}</main>
      </div>
      <footer className="py-2 bg-gray-300/50">Copyright somthing</footer>
    </div>
  );
}
