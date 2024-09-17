import scaleImg from "@/app/images/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Scale image"
      title="Scale your app to infinity"
    />
  );
}
