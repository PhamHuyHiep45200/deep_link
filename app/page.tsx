import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="mywallet://?foo=bar">open app mywallet with link</Link>
      <br />
      <a href="mywallet://?foo=bar">Open my app</a>
    </main>
  );
}
