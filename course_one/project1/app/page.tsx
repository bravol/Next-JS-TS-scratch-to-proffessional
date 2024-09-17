import homeImg from "@/app/images/home.jpg";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt="cae factory"
      title="Proffessional cloud hosting"
    />
  );
}
