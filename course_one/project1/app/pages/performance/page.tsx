import Hero from "@/components/hero";
import PerfoImage from "@/app/images/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgData={PerfoImage}
      imgAlt="welding"
      title="We serve high perfomance applications"
    />
  );
}
