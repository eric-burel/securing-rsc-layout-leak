import Link from "next/link";

export default function NotAuth() {
  return (
    <div>
      You are not authenticated. <Link href="/">Back to home</Link>
    </div>
  );
}
