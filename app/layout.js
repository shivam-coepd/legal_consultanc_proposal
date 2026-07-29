import "./globals.css";

export const metadata = {
  title: "Legal Consultancy Website Proposal | APT Digital Express",
  description:
    "WordPress website development proposal for a legal consultancy, prepared by APT Digital Express.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07182e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
