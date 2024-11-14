import Library from "@/components/Library";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import localFont from "next/font/local";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const sukhumvit = localFont({
  src: [
    { path: "./fonts/SukhumvitSet-Thin.ttf", weight: "100", style: "thin" },
    { path: "./fonts/SukhumvitSet-Light.ttf", weight: "300", style: "light" },
    { path: "./fonts/SukhumvitSet-Text.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SukhumvitSet-Medium.ttf", weight: "500", style: "medium" },
    { path: "./fonts/SukhumvitSet-SemiBold.ttf", weight: "600", style: "semibold" },
    { path: "./fonts/SukhumvitSet-Bold.ttf", weight: "700", style: "bold" },
  ],
  variable: "--font-sukhumvit",
  weight: "100 300 400 500 600 700",
});

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${sukhumvit.variable} font-sukhumvit`}>
        <Navbar />
        <div className={`flex h-[calc(100vh-100px)]`}>
          <Library />
          <Component {...pageProps} />
        </div>
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
