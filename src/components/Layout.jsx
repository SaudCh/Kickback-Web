import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, className = "" }) {
  return (
    <div className={`min-h-screen bg-paper text-ink ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
