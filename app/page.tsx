import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="mywallet://?foo=bar">open app mywallet with link</Link>
      <br />
      <a href="mywallet://?foo=bar">Open my app</a>
      <br />
      <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp">
        trustapp
      </a>
    </main>
  );
}
