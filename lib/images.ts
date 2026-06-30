import fs from "fs";
import path from "path";
import manifest from "@/data/image-manifest.json";

export interface ImageSlot {
  id: string;
  file: string;
  aspect: string;
  content: string;
  alt: string;
}

const slots = manifest.slots as ImageSlot[];

export function getSlot(id: string): ImageSlot {
  const slot = slots.find((s) => s.id === id);
  if (!slot) throw new Error(`Unknown image slot: ${id}`);
  return slot;
}

/**
 * Checks at render time whether Sami's real photo exists in /public yet.
 * If not, SmartImage shows a palette-toned placeholder instead of a 404.
 * Runs on the server during static generation — no client JS.
 */
export function slotImageExists(slot: ImageSlot): boolean {
  try {
    return fs.existsSync(
      path.join(process.cwd(), "public", "assets", "images", slot.file),
    );
  } catch {
    return false;
  }
}

/** "16:9" -> 16/9, for CSS aspect-ratio. */
export function aspectToRatio(aspect: string): number {
  const [w, h] = aspect.split(":").map(Number);
  return w && h ? w / h : 1;
}
