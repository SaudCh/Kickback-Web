import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen bg-surface text-white ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
