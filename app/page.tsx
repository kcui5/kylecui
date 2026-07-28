import Script from "next/script"

import { TrackedLink } from "@/components/tracked-link"

const bodyClass =
  "max-w-sm font-[family-name:var(--font-sans)] text-[clamp(0.8rem,2vw,0.91rem)] leading-relaxed tracking-tight text-muted-foreground"

const linkClass = "underline underline-offset-4"

export default function Page() {
  return (
    <main className="stone-wash grid min-h-svh grid-cols-1 overflow-x-hidden lg:grid-cols-2">
      <div className="px-[clamp(2.5rem,5vw,5rem)] pt-[clamp(2.5rem,5vh,4rem)] lg:pl-[clamp(5rem,10vw,12rem)]">
        <h1
          aria-label="Kyle Cui"
          className="flex items-baseline gap-0 text-foreground select-none"
        >
          <span className="font-[family-name:var(--font-mea-culpa)] text-[clamp(3rem,11vw,6rem)] leading-none tracking-tight">
            K
          </span>
          <span className="ml-[0.3em] font-[family-name:var(--font-press-start)] text-[clamp(0.75rem,3vw,1.25rem)] leading-none">
            yle
          </span>
          <span className="ml-[clamp(0.6rem,3vw,2rem)] font-[family-name:var(--font-press-start)] text-[clamp(0.75rem,3vw,1.25rem)] leading-none">
            Cui
          </span>
        </h1>

        <div className="mt-[clamp(1.5rem,4vh,3rem)] flex flex-col gap-[clamp(0.35rem,1.4vh,0.75rem)]">
          <p className={bodyClass}>Be undeniable.</p>
          <p className={bodyClass}>currently exploring AI consumer</p>
          <p className={bodyClass}>
            previously co-founded{" "}
            <TrackedLink
              href="https://bonemeal.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              destination="bonemeal_ai"
            >
              Bonemeal
            </TrackedLink>
            , where we went 0 to 100k ARR in a month.
          </p>
          <p className={bodyClass}>
            before that, i built product and owned growth at{" "}
            <TrackedLink
              href="https://fish.audio"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              destination="fish_audio"
            >
              Fish Audio
            </TrackedLink>
            , taking us from 3M to 12M ARR during my four months there.
          </p>
          <p className={bodyClass}>
            before fish, i bootstrapped a startup that was
            acquired by a frontier AI lab
          </p>
          <p className={bodyClass}>
            i graduated from UC Berkeley with a CS and
            Physics double degree
          </p>
          
          
          <p className={bodyClass}>
            A thesis of mine is that the value of most engineering is going to
            zero, what matters much more is growth -- whether you can get people
            to actually care about what you&apos;re building. Otherwise, building
            is just intellectual masturbation. I&apos;m obsessed with
            systematizing growth now, specifically in consumer applications.
          </p>
          <p className={bodyClass}>
            I&apos;m 23 now, it&apos;s the year of the fire horse, and i&apos;m
            not stopping
          </p>
          <p
            className={`${bodyClass} flex flex-wrap items-center gap-x-3 gap-y-1`}
          >
            <a href="mailto:kyle@kylecui.dev" className={linkClass}>
              kyle@kylecui.dev
            </a>
            <span aria-hidden="true">|</span>
            <TrackedLink
              href="https://x.com/kile_sway"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              destination="twitter"
            >
              @kile_sway
            </TrackedLink>
            <span aria-hidden="true">|</span>
            <TrackedLink
              href="https://github.com/kcui5"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              destination="github"
            >
              github
            </TrackedLink>
            <span aria-hidden="true">|</span>
            <TrackedLink
              href="https://open.spotify.com/user/31tcd5mcobwwqvhdaxdbfsnupupe?si=f634683176eb4511"
              target="_blank"
              rel="noopener noreferrer"
              className={`whitespace-nowrap ${linkClass}`}
              destination="spotify"
            >
              i love music
            </TrackedLink>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-[clamp(1.5rem,5vw,3rem)] lg:items-end lg:justify-end">
        <pre
          id="horse-anim"
          style={{
            fontFamily: "monospace",
            lineHeight: 1,
            whiteSpace: "pre",
            fontSize: "clamp(2px, calc((100vw - 5rem) / 120), 4px)",
          }}
        />
        <Script src="/horse-anim.js" strategy="afterInteractive" />
      </div>
    </main>
  )
}
