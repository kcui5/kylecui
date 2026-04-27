import Link from "next/link";

export default function Page() {
  return (
    <div className="stone-wash relative flex h-svh flex-col items-center justify-center overflow-hidden px-6">
      <h1 className="flex items-baseline gap-0 text-foreground select-none">
        <span className="font-[family-name:var(--font-mea-culpa)] text-[clamp(4rem,15vw,10rem)] leading-none tracking-tight">
          K
        </span>
        <span className="ml-[0.3em] font-[family-name:var(--font-press-start)] text-[clamp(1rem,4vw,2.2rem)] leading-none">
          yle
        </span>
        <span className="mx-[clamp(0.6rem,3vw,2rem)]" />
        <span className="font-[family-name:var(--font-mea-culpa)] text-[clamp(4rem,15vw,10rem)] leading-none tracking-tight">
          C
        </span>
        <span className="ml-[0.3em] font-[family-name:var(--font-press-start)] text-[clamp(1rem,4vw,2.2rem)] leading-none">
          ui
        </span>
      </h1>

      <p className="mt-[clamp(1.5rem,4vh,3rem)] max-w-md text-center font-[family-name:var(--font-sans)] text-[clamp(0.75rem,2vw,1rem)] leading-relaxed text-muted-foreground">
        Lorem ipsum dolor sit amet — replace this with your own excerpt.
      </p>

      {/* Decorative element — bottom right */}
      <div className="absolute right-6 bottom-6 flex items-end gap-[3px] opacity-40 sm:right-10 sm:bottom-10">
        <div className="h-3 w-[3px] rounded-full bg-foreground" />
        <div className="h-6 w-[3px] rounded-full bg-foreground" />
        <div className="h-10 w-[3px] rounded-full bg-foreground" />
        <div className="h-16 w-[3px] rounded-full bg-foreground" />
        <div className="h-10 w-[3px] rounded-full bg-foreground" />
        <div className="h-6 w-[3px] rounded-full bg-foreground" />
        <div className="h-3 w-[3px] rounded-full bg-foreground" />
      </div>
    </div>
  );
}
