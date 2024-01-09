import Link from "next/link";

export default function NotAuth() {
  return (
    <div>
      You are not authenticated. <Link href="/">Back to home</Link>
      <p>
        Hint: send a GET request to "/" with the "RSC" header set to 1. You'll
        be able to see the paid content in the RSC payload.
      </p>
    </div>
  );
}
