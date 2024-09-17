import Hero from "@/components/hero";
import ReliaImage from "@/app/images/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={ReliaImage}
      imgAlt="reliabilty"
      title="We are reliable all the time"
    />
  );
}
