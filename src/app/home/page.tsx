import SearchBar from "./searchbar";
import WebsiteMarquee from "./marquee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-4 text-4xl font-bold">UCI App Hub</h1>
      <p className="mb-8 text-xl text-gray-600">Your one-stop-shop for all UCI-related apps and websites</p>
      <SearchBar />
      <WebsiteMarquee />
    </main>
  )
}

  