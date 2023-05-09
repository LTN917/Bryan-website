import Navbar from "./Navbar";
import "tailwindcss/tailwind.css";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="layout-display">
      <Navbar />
      {children}
    </div>
  );
}
