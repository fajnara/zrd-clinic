import { renderOgImage, ogSize, ogContentType, ogAlt } from "@/lib/ogImage";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

// Next otomatis mengisi <meta name="twitter:image">.
export default function TwitterImage() {
  return renderOgImage();
}
