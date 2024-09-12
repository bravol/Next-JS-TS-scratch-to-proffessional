import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/pages/performance">Performance</Link>
      <Link href="/pages/reliability">Reliability</Link>
      <Link href="/pages/scale">Scale</Link>
    </div>
  );
}
