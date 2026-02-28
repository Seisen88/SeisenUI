"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Get all h2 and h3 headings from the main content area only (not sidebar)
    const mainContent = document.querySelector("main") || document.querySelector(".max-w-4xl");
    if (!mainContent) return;

    const elements = Array.from(
      mainContent.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const headingData: Heading[] = elements.map((element) => ({
      id: element.id || element.textContent?.toLowerCase().replace(/\s+/g, "-") || "",
      text: element.textContent || "",
      level: parseInt(element.tagName.substring(1)),
    }));

    // Add IDs to headings if they don't have them
    elements.forEach((element, index) => {
      if (!element.id) {
        element.id = headingData[index].id;
      }
    });

    setHeadings(headingData);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        // Find all currently intersecting headings
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
          }))
          .sort((a, b) => a.top - b.top);

        // Set the topmost visible heading as active
        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0].id);
        }
      },
      { 
        rootMargin: "-80px 0px -80% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block fixed right-8 top-24 w-64">
      <div className="text-sm">
        <p className="text-white font-semibold mb-3 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          On this page
        </p>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={heading.level === 3 ? "ml-4" : ""}
              >
                <a
                  href={`#${heading.id}`}
                  className={`block py-1 text-sm transition-colors hover:text-[#00c864] ${
                    activeId === heading.id
                      ? "text-[#00c864] border-l-2 border-[#00c864] pl-3 -ml-[2px]"
                      : "text-[#a0a0a0] pl-3"
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
