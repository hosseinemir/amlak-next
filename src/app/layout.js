import "./globals.css";
import "./custom.css";
import { yekan } from "@/utils/fonts";
import Layout from "@/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "تامین ایکس | املاک",
  description: "خرید و فروش املاک",
  icons:{icon:"./favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
