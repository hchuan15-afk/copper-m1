import type { Product, ProductId } from "@/lib/copper/catalog";

// What each cutout shows; the product name and type come from the catalog.
const CUTOUT_LOOK: Record<ProductId, string> = {
  "copper-home": "with a woven copper shell and a round clock display",
  "copper-notes": "in brushed copper with a glowing amber ring",
};

/** Alt text for a product's cutout image. */
export function cutoutAlt(product: Product): string {
  return `${product.name} ${product.type} ${CUTOUT_LOOK[product.id]}`;
}
