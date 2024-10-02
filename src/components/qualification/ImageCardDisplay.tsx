import Image, { StaticImageData } from "next/image";

export function ImageCardDisplay({
  data,
  onClick,
  isMore,
}: {
  data: { imageData: StaticImageData; alt: string };
  onClick?: () => void;
  isMore?: boolean;
}) {
  return (
    <div
      className={`min-w-[96px] h-[96px] flex items-center border-[1px] rounded-xl overflow-hidden cursor-pointer ${
        isMore ? "justify-center" : ""
      }`}
      onClick={() => {
        if (typeof onClick === "function") {
          void onClick();
        }
      }}
    >
      {isMore ? (
        <span className="text-[--label] text-sm">view more</span>
      ) : (
        <Image
          src={data?.imageData?.src}
          alt={data?.alt}
          height={data?.imageData?.height}
          width={data?.imageData?.width}
          className="rounded-md max-w-none max-h-full scale-150"
        />
      )}
    </div>
  );
}
