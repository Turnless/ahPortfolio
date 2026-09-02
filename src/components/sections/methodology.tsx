import { Reveal, ShutterReveal } from "@/components/reveal";
import { methodology } from "@/lib/content";

export function Methodology() {
  return (
    <section
      id="method"
      className="border-b border-(--color-border) bg-(--color-background-raised)"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="mb-3 text-xs tracking-[0.3em] text-(--color-accent) uppercase">
            How the work gets done
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-light text-(--color-foreground) sm:text-4xl">
            Evaluation methodology
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-(--color-muted)">
            The process behind every task, not just the score at the end of
            it.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-(--color-border) bg-(--color-border) sm:grid-cols-2 lg:grid-cols-5">
          {methodology.map((step, i) => (
            <ShutterReveal key={step.step} delay={i * 0.06}>
              <div className="h-full bg-(--color-background-raised) p-6">
                <span className="font-display text-3xl font-light text-(--color-accent)">
                  {step.step}
                </span>
                <h3 className="mt-4 text-base font-medium text-(--color-foreground)">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-(--color-muted)">
                  {step.description}
                </p>
              </div>
            </ShutterReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
