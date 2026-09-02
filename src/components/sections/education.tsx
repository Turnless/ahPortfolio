import { Reveal } from "@/components/reveal";
import { certifications, education } from "@/lib/content";

export function Education() {
  return (
    <section
      id="education"
      className="border-b border-(--color-border) bg-(--color-background-raised)"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <h2 className="font-display text-3xl font-light text-(--color-foreground) sm:text-4xl">
            Education &amp; certifications
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-16 sm:grid-cols-[1.4fr_1fr] sm:gap-10">
          <Reveal>
            <h3 className="font-display text-xl font-normal text-(--color-foreground) sm:text-2xl">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm tracking-wide text-(--color-muted)">
              {education.school}, {education.location}
            </p>
            <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
              <span className="text-(--color-accent)">
                CGPA {education.cgpa}
              </span>
              <span className="text-(--color-muted)">
                Graduated {education.graduated}
              </span>
            </div>

            <p className="mt-8 text-xs tracking-[0.15em] text-(--color-muted) uppercase">
              Relevant coursework
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {education.coursework.map((course) => (
                <li
                  key={course}
                  className="flex gap-3 text-sm leading-relaxed text-(--color-foreground)/85"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-(--color-accent)" />
                  {course}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.15em] text-(--color-muted) uppercase">
              Certifications
            </p>
            <ul className="mt-4 space-y-3 border-l border-(--color-border) pl-6">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="text-sm leading-relaxed text-(--color-foreground)/85"
                >
                  {cert}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
