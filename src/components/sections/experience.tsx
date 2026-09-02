import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="border-b border-(--color-border)">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <h2 className="font-display text-3xl font-light text-(--color-foreground) sm:text-4xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0">
          {experience.map((role, i) => (
            <Reveal key={role.title} delay={i * 0.08}>
              <div
                className={`grid grid-cols-1 gap-4 border-t border-(--color-border) py-10 sm:grid-cols-[200px_1fr] sm:gap-10 ${
                  role.minor ? "opacity-80" : ""
                }`}
              >
                <div>
                  <p className="text-xs tracking-[0.15em] text-(--color-accent) uppercase">
                    {role.period}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-normal text-(--color-foreground) sm:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm tracking-wide text-(--color-muted)">
                    {role.org}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-(--color-foreground)/85"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-(--color-accent)" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
