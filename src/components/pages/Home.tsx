import { Destinations } from "../layout/Destinations";
import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";
import { Hero } from "../layout/Hero";

// import { GetStartedDialog } from "@/GetStarted/GetStartedDialog";
export function Layout() {
  return (
    <div className="flex h-screen w-full flex-col">
        <Header/>
        <main>
          <Hero/>
          <Destinations/>
        </main>
        <Footer/>
    </div>
  );
}

