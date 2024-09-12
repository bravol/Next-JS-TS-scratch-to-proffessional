import homeImg from "@/app/images/home.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <p>Home Page</p>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="car factory"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
