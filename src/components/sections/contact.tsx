import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
        <Reveal>
          <p className="text-xs tracking-[0.3em] text-(--color-accent) uppercase">
            Available for contract work
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl font-light text-(--color-foreground) sm:text-4xl">
            Reach out directly. No recruiter middlemen required.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="space-y-4 text-sm">
              <ContactLine label="Email">
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-(--color-accent)"
                >
                  {profile.email}
                </a>
              </ContactLine>
              <ContactLine label="Phone">
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-(--color-accent)"
                >
                  {profile.phone}
                </a>
              </ContactLine>
              <ContactLine label="Location">{profile.address}</ContactLine>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-sm">
              <ContactLine label="LinkedIn">
                <a
                  href={profile.linkedin}
                  className="transition-colors hover:text-(--color-accent)"
                >
                  {profile.linkedin}
                </a>
              </ContactLine>
              <ContactLine label="GitHub">
                <a
                  href={profile.github}
                  className="transition-colors hover:text-(--color-accent)"
                >
                  {profile.github}
                </a>
              </ContactLine>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-(--color-border)">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs tracking-wide text-(--color-muted) sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>{profile.name} — {profile.role}</p>
          <p>Add {"{{LINKEDIN_URL}}"} and {"{{GITHUB_URL}}"} before publishing.</p>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 border-b border-(--color-border) pb-4">
      <span className="w-20 shrink-0 text-xs tracking-[0.12em] text-(--color-muted) uppercase">
        {label}
      </span>
      <span className="text-(--color-foreground)/90">{children}</span>
    </div>
  );
}
