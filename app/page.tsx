import Image from "next/image"

import { TrackedLink } from "@/components/tracked-link"

const bodyClass =
  "max-w-lg font-[family-name:var(--font-sans)] text-[clamp(0.875rem,2vw,1rem)] leading-relaxed text-muted-foreground"

const linkClass = "underline underline-offset-4"

export default function Page() {
  return (
    <main className="stone-wash grid min-h-svh grid-cols-1 overflow-x-hidden lg:grid-cols-2">
      <div className="px-[clamp(2.5rem,5vw,5rem)] pt-[clamp(2.5rem,5vh,4rem)]">
        <h1 className="flex items-baseline gap-0 text-foreground select-none">
          <span className="font-[family-name:var(--font-mea-culpa)] text-[clamp(4rem,15vw,10rem)] leading-none tracking-tight">
            K
          </span>
          <span className="ml-[0.3em] font-[family-name:var(--font-press-start)] text-[clamp(1rem,4vw,2.2rem)] leading-none">
            yle
          </span>
          <span className="ml-[clamp(0.6rem,3vw,2rem)] font-[family-name:var(--font-press-start)] text-[clamp(1rem,4vw,2.2rem)] leading-none">
            Cui
          </span>
        </h1>

        <div className="mt-[clamp(1.5rem,4vh,3rem)] flex flex-col gap-[clamp(0.5rem,2vh,1rem)]">
          <p className={bodyClass}>Be undeniable.</p>
          <p className={bodyClass}>
            when i was 21 i graduated from UC Berkeley with a CS Honors and
            Physics double degree
          </p>
          <p className={bodyClass}>
            then i bootstrapped a startup in Antler&apos;s Residency program
            that did a little more than 3k in revenue, but ultimately nobody
            cared about it.
          </p>
          <p className={bodyClass}>
            then i built product and owned growth at{" "}
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
            A thesis of mine is that the value of most engineering is going to
            zero, what matters much more is growth -- whether you can get people
            to actually care about what you&apos;re building. Otherwise building
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
            <a href="mailto:kyle@kylecui.com" className={linkClass}>
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
              href="https://open.spotify.com/user/31tcd5mcobwwqvhdaxdbfsnupupe?si=f634683176eb4511"
              target="_blank"
              rel="noopener noreferrer"
              className={`whitespace-nowrap ${linkClass}`}
              destination="spotify"
            >
              i love music follow my spotify lol
            </TrackedLink>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-[clamp(1.5rem,5vw,3rem)]">
        <Image
          src="/bracelet.webp"
          alt="Red string bracelet"
          width={500}
          height={500}
          className="h-auto w-[clamp(10rem,25vw,20rem)] select-none"
        />
      </div>
    </main>
  )
}
