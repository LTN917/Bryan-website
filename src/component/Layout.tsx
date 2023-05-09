import Navbar from "./Navbar";
import Footer from "./Footer";
import "tailwindcss/tailwind.css";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="layout-display">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
