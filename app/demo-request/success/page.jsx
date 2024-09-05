import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Success() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold">Success 😊</h1>
        <p className="text-3xl">
          Your demo request has been successfully processed. A Representative
          will contact you soon.
        </p>
      </div>
      <Footer />
    </div>
  );
}
