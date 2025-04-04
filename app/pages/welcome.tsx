import { TestButton } from "~/components/TestButton";
import logoDark from "..//assets/logo-dark.svg";
import logoLight from "..//assets/logo-light.svg";

export function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans flex">
      {/* Sidebar */}
      <aside className="w-64 p-6 backdrop-blur-md bg-white/5 border-r border-white/10">
        <h1 className="text-2xl font-bold mb-10">Welcome</h1>
        <ul className="space-y-4 text-sm">
          <SidebarLink href="/home" icon="🏠" label="Home" />
          <SidebarLink href="/dashboard" icon="🗂️" label="Dashboard" />
          <SidebarLink href="/profile" icon="📖" label="Profile" />
          <SidebarLink href="/modules" icon="📚" label="Modules" />
          <SidebarLink href="/networking" icon="🤝" label="Networking" />
          <SidebarLink href="/settings" icon="⚙️" label="Settings" />
          
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 space-y-10">
        {/* Logo and Navigation Buttons */}
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <img
              src={logoLight}
              alt="Logo Light"
              className="block w-full dark:hidden"
            />
            <img
              src={logoDark}
              alt="Logo Dark"
              className="hidden w-full dark:block"
            />
          </div>

          <TestButton />
        </header>

        {/* What's Next Section */}
        <div className="flex justify-center">
          <div className="max-w-[300px] w-full space-y-6 px-4">
            <nav className="rounded-3xl border border-white/10 p-6 space-y-4 bg-white/10 backdrop-blur-md">
              <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
                What's next?
              </p>
              <ul>
                {resources.map(({ href, text, icon }) => (
                  <li key={href}>
                    <a
                      className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {icon}
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

// 🧭 Sidebar Link
function SidebarLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <li className="flex items-center gap-2 hover:translate-x-1 transition cursor-pointer">
      <a href={href} className="flex items-center gap-2">
        <span>{icon}</span> {label}
      </a>
    </li>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://rmx.as/discord",
    text: "Join Discord",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M15.0686 1.25995L14.5477 1.17423L14.2913 1.63578C14.1754 1.84439 14.0545 2.08275 13.9422 2.31963C12.6461 2.16488 11.3406 2.16505 10.0445 2.32014C9.92822 2.08178 9.80478 1.84975 9.67412 1.62413L9.41449 1.17584L8.90333 1.25995C7.33547 1.51794 5.80717 1.99419 4.37748 2.66939L4.19 2.75793L4.07461 2.93019C1.23864 7.16437 0.46302 11.3053 0.838165 15.3924L0.868838 15.7266L1.13844 15.9264C2.81818 17.1714 4.68053 18.1233 6.68582 18.719L7.18892 18.8684L7.50166 18.4469C7.96179 17.8268 8.36504 17.1824 8.709 16.4944"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];
