import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Shh.. It's a secret",
    description:
      "Something of a companion app for tabletop RPGs. Hope it turns out well!",
  },
];

export default function Projects() {
  const [open, setOpen] = useState(true);
  const contentRef = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Measure content height for smooth expand/collapse
    setMaxHeight(open ? el.scrollHeight : 0);
  }, [open]);

  // Optional: keep height correct if fonts load / window resizes
  useEffect(() => {
    const onResize = () => {
      const el = contentRef.current;
      if (!el) return;
      if (open) setMaxHeight(el.scrollHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <section className="px-8 py-4">
      <div className="max-w-3xl mx-auto">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-3 text-left mb-6"
          aria-expanded={open}
        >
          {/* Arrow on the left */}
          <span
            className={`text-2xl select-none transition-transform duration-200 ${
              open ? "rotate-90" : "rotate-0"
            }`}
            aria-hidden="true"
          >
            &gt;
          </span>

          <h2 className="text-3xl md:text-4xl font-bold">
            What I'm working on
          </h2>
        </button>

        {/* Smooth collapse/expand */}
        <div
          className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
          style={{ maxHeight }}
        >
          <ul ref={contentRef} className="space-y-8">
            {projects.map((p, index) => (
              <li key={index} className="rounded-xl px-12 text-[#547792]">
                <h3 className="text-2xl font-bold italic mb-2">{p.title}</h3>
                <p className="text-xl opacity-80">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
