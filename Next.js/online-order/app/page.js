import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Online Ordering System</h1>
      <p>Welcome to our food shop.</p>
      <Link href="/menu">Go to Menu</Link>
    </div>
  );
}
