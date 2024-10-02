"use client";
import { StaticImageData } from "next/image";
import { useState } from "react";
import Viewer from "react-viewer";
import "./styles.scss";
import { ImageDecorator } from "react-viewer/lib/ViewerProps";
import { ImageCardDisplay } from "./ImageCardDisplay";
export function ProjectImages({
  images = [],
}: {
  images: { imageData: StaticImageData; alt }[];
}) {
  const [visibled, setVisibled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="flex gap-2 items-center">
        {images?.slice(0, 4)?.map((e, index) => (
          <ImageCardDisplay
            key={index}
            data={e}
            onClick={() => {
              setVisibled(true);
              setActiveIndex(index < 3 ? index : 0);
            }}
            isMore={index > 2}
          />
        ))}
      </div>
      <Viewer
        className="image-display"
        visible={visibled}
        images={
          images?.map(
            (e) =>
              ({
                src: e.imageData?.src,
                alt: e.alt,
              } as unknown as ImageDecorator)
          ) || []
        }
        activeIndex={activeIndex}
        onClose={() => {
          setVisibled(false);
        }}
        onMaskClick={() => {
          setVisibled(false);
        }}
      />
    </>
  );
}
