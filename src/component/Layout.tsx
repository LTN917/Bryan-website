import Navbar from "./Navbar";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="layout-display">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
