import Image from "next/image";

const bodyClass =
  "max-w-lg text-left font-[family-name:var(--font-sans)] text-[clamp(0.75rem,2vw,1rem)] leading-relaxed text-muted-foreground";

export default function Page() {
  return (
    <div className="stone-wash relative min-h-svh px-[clamp(2.5rem,5vw,5rem)] pt-[clamp(3rem,7vh,5rem)] pb-[clamp(2rem,5vh,4rem)]">
      <div className="flex flex-col gap-[clamp(2rem,5vw,4rem)] lg:grid lg:grid-cols-2 lg:items-center lg:gap-0">
        <div className="flex flex-col items-start">
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
              <a
                href="https://fish.audio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Fish Audio
              </a>
              , taking us from 3M to 12M ARR during my four months there.
            </p>
            <p className={bodyClass}>
              A thesis of mine is that the value of most engineering
              is going to zero, what matters much more is growth -- whether you
              can get people to actually care about what you&apos;re building.
              Otherwise building is just intellectual masturbation. I&apos;m
              obsessed with systematizing growth now, specifically in consumer
              applications.
            </p>
            <p className={bodyClass}>
              I&apos;m 23 now, it&apos;s the year of the fire horse, and
              i&apos;m not stopping
            </p>
            <p className={bodyClass}>
              <a
                href="mailto:kyle@kylecui.com"
                className="underline underline-offset-4"
              >
                kyle@kylecui.dev
              </a>
              <span className="mx-3">|</span>
              <a
                href="https://x.com/kile_sway"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                @kile_sway
              </a>
              <span className="mx-3">|</span>
              <a
                href="https://open.spotify.com/user/31tcd5mcobwwqvhdaxdbfsnupupe?si=f634683176eb4511"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap underline underline-offset-4"
              >
                i love music follow my spotify lol
              </a>
            </p>
          </div>
        </div>

        <Image
          src="/bracelet.webp"
          alt="Red string bracelet"
          width={500}
          height={500}
          className="h-auto w-[clamp(10rem,25vw,20rem)] self-center select-none lg:justify-self-center"
        />
      </div>
    </div>
  );
}
