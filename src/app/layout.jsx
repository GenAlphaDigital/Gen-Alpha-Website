import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./SmoothScrolling";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  weight: ["300", "400", "700", "100", "200", "500", "600", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Gen Alpha Digitals",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
    </html>
  );
}
