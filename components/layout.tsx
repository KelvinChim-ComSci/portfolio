import Link from "next/link";
import { useRouter } from "next/router";

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

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-gradient-to-r from-gray-200 w-full md:w-80">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2 ml-0" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex px-8 py-2 hover:bg-gradient-to-r gray-400 cursor-pointer ${
                        router.asPath === href &&
                        "bg-gradient-to-r from-gray-400 to-white text-white"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
      <footer className="py-2 bg-gray-300">Copyright somthing</footer>
    </div>
  );
}
