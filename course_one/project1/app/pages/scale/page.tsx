import scaleImg from "@/app/images/scale.jpg";
import Image from "next/image";

export default function ScalePage() {
  return (
    <div>
      <Image src={scaleImg} alt="" /> Scale
    </div>
  );
}
