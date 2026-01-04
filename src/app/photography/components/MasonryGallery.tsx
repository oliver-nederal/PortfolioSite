"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function MasonryGallery({
  images
}: {
  images: { key: string; url: string }[];
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      setWidth(document.documentElement.clientWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width === 0) return null; // wait for client

  let cols = 3;
  if (width <= 500) cols = 1;
  else if (width <= 800) cols = 2;

  return (
    <Masonry
      breakpointCols={{ default: 3, 800: 2, 500: 1 }}
      className="flex gap-4"
      columnClassName="gap-4 flex flex-col"
    >
      {images.map((img) => (
        <Image
          key={img.key}
          src={img.url}
          alt={"image " + img.key}
          height={400}
          width={(width / cols)}
          className="rounded-lg"
          />
      ))}
    </Masonry>
  );
}
