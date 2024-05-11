import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/about">
        <button>go to /About</button>
      </Link>
      <Link href="/articalList">
      <button>go to articalList</button>
      </Link>
    </>
  );
}
