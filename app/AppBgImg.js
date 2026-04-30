import Image from "next/image";
import bgImage from "@/public/photo18.jpg"; // Local image

export default function AppBgImg() {
  return (
    <Image
      src={bgImage}
      alt="Background"
      placeholder="blur"
      fill
      sizes="25vw"
      style={{
        objectFit: "scale-down",
        zIndex: -1
      }}
    />
  );
}
