import { SIDEBAR } from "../../config";
import { getLanguageFromURL } from "../../languages";
import { useStore } from "@nanostores/react";
import { sidebarState } from "../../store/Sidebar";

const MobileSidebar = ({ currentPage }: { currentPage: string }) => {
  const currentPageMatch = currentPage.slice(1);
  const langCode = getLanguageFromURL(currentPage);
  const $isSideBarOpen = useStore(sidebarState);
  const sidebarSections = SIDEBAR[langCode].reduce((col, item, i) => {
    // If the first item is not a section header, create a new container section.
    if (i === 0) {
      if (!item.header) {
        const pesudoSection = { text: "" };
        col.push({ ...pesudoSection, children: [] });
      }
    }
    if (item.header) {
      col.push({ ...item, children: [] });
    } else {
      col[col.length - 1].children.push(item);
    }
    return col;
  }, []);

  return (
    <>
      {$isSideBarOpen ? (
        <nav
          className="dark:bg-dark-background bg-slate-50 text-black dark:text-slate-50 absolute top-0 left-0 w-full h-[70vh] border overflow-y-scroll prose dark:prose-invert prose-ul:list-none"
          aria-labelledby="grid-left"
        >
          <ul className="pl-6">
            {sidebarSections.map((section) => (
              <li>
                <div>
                  <h2 className="p-1 mb-2 font-bold underline underline-offset-2 text-black dark:text-slate-50 text-xl">
                    {section.text}
                  </h2>
                  <ul>
                    {section.children.map((child) => (
                      <li className="text-black dark:text-slate-50 text-base">
                        <a
                          href={`/${child.link}`}
                          aria-current={`${
                            currentPageMatch === child.link ? "page" : "false"
                          }`}
                          className={`${
                            currentPageMatch === child.link
                              ? "font-semibold"
                              : "font-normal"
                          }`}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default MobileSidebar;
