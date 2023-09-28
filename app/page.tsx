import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center mx-auto gap-5 p-24">
      <Link href="/login">
        <button className="border border-whiite p-4">Login</button>
      </Link>
      <Link href="/register">
        <button className="border border-white p-4">Register</button>
      </Link>
    </main>
  );
}
