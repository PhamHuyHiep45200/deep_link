import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="JREWallet://?foo=bar">open app mywallet with link</Link>
      <br />
      <a href="JREWallet://?foo=bar">Open my app</a>
      <br />
      <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp">
        trustapp
      </a>
    </main>
  );
}
