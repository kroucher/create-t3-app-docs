import { useState, useEffect, useRef } from "react";
import { MarkdownHeading } from "astro";

const TableOfContents = ({ headings }: { headings: MarkdownHeading[] }) => {
  const itemOffsets = useRef([]);
  const [activeId, setActiveId] = useState<string>(undefined);
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("article :is(h1, h2, h3, h4)");
      itemOffsets.current = Array.from(titles).map((title) => ({
        id: title.id,
        topOffset: title.getBoundingClientRect().top + window.scrollY,
      }));
    };

    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);

    return () => {
      window.removeEventListener("resize", getItemOffsets);
    };
  }, []);

  return (
    <div className="w-full pl-2 sm:pl-0">
      <h2 className="text-lg my-4 font-semibold">On this page</h2>
      <ul className="border-l-2 border-slate-800 dark:border-brand-primary my-1">
        <li
          className={`pl-4 depth-2 ${
            activeId === "overview" ? "active" : ""
          }`.trim()}
        >
          <a href="#overview">Overview</a>
        </li>
        {headings
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map((heading, i) => {
            return (
              <li
                key={i}
                className={`pl-4 list-none depth-${heading.depth} ${
                  activeId === heading.slug ? "" : ""
                }`.trim()}
              >
                <a href={`#${heading.slug}`}>{heading.text}</a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default TableOfContents;
