import { Tabs } from "./Tabs";
import Link from "next/link";
export default function TabButtons({ activeTab }: { activeTab: string }) {
  const inActiveIconClassName =
    "w-5 h-5 mr-2 text-muted-foreground group-hover:text-gray-500 ";
  const activeIconClassName = "w-5 h-5 mr-2 text-primary";

  return (
    <>
      <div className="border-b bg-background border-gray-200 dark:border-gray-700 w-full sticky top-[60px] z-10">
        <ul className="flex sm:justify-center overflow-x-scroll sm:overflow-x-auto w-full -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {Tabs.map((Tab) => {
            if (activeTab === Tab.title.toLowerCase()) {
              return (
                <li className="mr-2" key={Tab.title}>
                  <button
                    className="inline-flex items-center justify-center p-3 sm:p-4 text-primary border-b-2 border-primary rounded-t-lg active group transition-all"
                    aria-current="page"
                  >
                    <Tab.icon className={activeIconClassName} />
                    {Tab.title[0].toUpperCase() + Tab.title.slice(1)}
                  </button>
                </li>
              );
            } else {
              return (
                <li className="mr-2" key={Tab.title}>
                  <Link
                    scroll={false}
                    href={`/about/${Tab.title.toLowerCase()}`}
                    className="inline-flex items-center justify-center p-3 sm:p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group transition-all"
                  >
                    <Tab.icon className={inActiveIconClassName} />
                    {Tab.title[0].toUpperCase() + Tab.title.slice(1)}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
