import Image from "next/image";
import { cutoutAlt } from "@/components/copper/product-alt";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/copper/catalog";

// Cutouts are square PNGs on transparent backgrounds.
const CUTOUT_SIZE = 1254;

export function Hero() {
  const products = getProducts();
  const home = products.find((p) => p.id === "copper-home");
  const notes = products.find((p) => p.id === "copper-notes");

  return (
    <section
      id="top"
      data-testid="hero"
      className="bg-secondary text-secondary-foreground overflow-hidden"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col items-start gap-5">
          <p className="text-primary text-sm font-bold tracking-widest uppercase">
            Copper State Labs
          </p>
          <h1 className="font-heading text-4xl leading-tight font-extrabold text-balance sm:text-5xl lg:text-6xl">
            Meet Copper, the AI that knows the desert.
          </h1>
          <p className="font-heading text-xl font-semibold sm:text-2xl">
            From raw ideas to refined answers.
          </p>
          <p className="text-muted-foreground max-w-md text-lg">
            {products.map((p) => p.name).join(" and ")}: an AI speaker for your
            home and a clip-on recorder for your meetings and lectures, from
            Tempe, Arizona.
          </p>
          <Button asChild size="lg" className="mt-2 px-8 text-base">
            <a href="#products">See products</a>
          </Button>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md md:max-w-none">
          {home && (
            <Image
              src={home.cutout}
              alt={cutoutAlt(home)}
              width={CUTOUT_SIZE}
              height={CUTOUT_SIZE}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 768px) 40vw, 80vw"
              className="absolute top-0 left-0 h-auto w-[78%] drop-shadow-2xl"
            />
          )}
          {notes && (
            <Image
              src={notes.cutout}
              alt={cutoutAlt(notes)}
              width={CUTOUT_SIZE}
              height={CUTOUT_SIZE}
              loading="eager"
              sizes="(min-width: 768px) 22vw, 45vw"
              className="absolute right-0 bottom-0 h-auto w-[46%] drop-shadow-2xl"
            />
          )}
        </div>
      </div>
    </section>
  );
}
