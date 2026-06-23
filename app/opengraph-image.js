import { renderOgImage, ogSize, ogContentType, ogAlt } from "@/lib/ogImage";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

// Next otomatis mengisi <meta property="og:image"> (URL absolut via metadataBase).
export default function OpengraphImage() {
  return renderOgImage();
}
