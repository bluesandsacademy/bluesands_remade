import "./globals.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "BlueSands STEM Labs | Innovative VR/AR STEM Education",
  description: "Experience cutting-edge Virtual and Augmented Reality in STEM education for secondary schools. Enhance learning with immersive, interactive labs across Physics, Chemistry, and Biology. Boost engagement, improve retention, and prepare students for future careers in science and technology.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        {/* Metadata and other head elements */}
      </head>
      <body>
        <ToastContainer closeOnClick={true} />
        {children}
      </body>
    </html>
  );
}
