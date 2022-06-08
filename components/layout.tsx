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
        <aside className="bg-gray-100 w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-gray-200 rounded hover:bg-gray-400 cursor-pointer ${
                        router.asPath === href && "bg-gray-500 text-white"
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
    </div>
  );
}
