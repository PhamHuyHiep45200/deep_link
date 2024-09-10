import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="jrewallet://?clientId=client&callbackUrl=calbee://&key=asdf-ghfg-tyug-jcvfk">open app mywallet with link</Link>
      <br />
      <a href="jrewallet://?clientId=client&callbackUrl=calbee://&key=asdf-ghfg-tyug-jcvfk">Open my app</a>
      <br />
      <a href="https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp">
        trustapp
      </a>
    </main>
  );
}
