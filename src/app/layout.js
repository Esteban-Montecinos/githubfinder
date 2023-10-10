import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import InputSearch from "@/components/input-search";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub Finder",
  description: "un buscador de perfiles de GitHub",
};

export default function RootLayout({ children }) {
  async function handleSumbit(formData) {
    "use server";
    const user = formData.get("user");
    redirect(`/${user}`);
  }
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-white bg-gradient-to-tl from-white via-zinc-600/20 to-white dark:bg-black dark:bg-gradient-to-tl dark:from-black dark:via-zinc-600/20 dark:to-black `}>
        <Providers>
          <main className="flex flex-col items-center justify-center max-w-xl min-h-screen gap-4 p-4 m-auto">
            GitHub Finder
            <form action={handleSumbit} className="w-full">
              <InputSearch />
            </form>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
