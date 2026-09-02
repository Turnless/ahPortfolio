import { CountUp } from "@/components/count-up";
import { Reveal } from "@/components/reveal";
import { stats } from "@/lib/content";

export function TrackRecord() {
  return (
    <section
      aria-label="Track record"
      className="border-b border-(--color-border) bg-(--color-background-raised)"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="border-l border-(--color-border) pl-6">
                <div className="font-display text-5xl font-light text-(--color-accent) sm:text-6xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm tracking-wide text-(--color-muted)">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
