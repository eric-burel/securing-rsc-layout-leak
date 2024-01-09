import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
  redirect("/not-authenticated");
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
