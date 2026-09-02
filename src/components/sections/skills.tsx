import { Reveal } from "@/components/reveal";
import { skills } from "@/lib/content";

export function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="border-b border-(--color-border)">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <h2 className="font-display text-3xl font-light text-(--color-foreground) sm:text-4xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {groups.map(([group, list], i) => (
            <Reveal key={group} delay={i * 0.08}>
              <h3 className="border-b border-(--color-border) pb-4 text-sm tracking-[0.12em] text-(--color-accent) uppercase">
                {group}
              </h3>
              <ul className="mt-5 space-y-3">
                {list.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm leading-relaxed text-(--color-foreground)/85"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
