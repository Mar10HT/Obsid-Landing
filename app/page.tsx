import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { DashboardPreview } from "@/components/dashboard-preview";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <DashboardPreview />
      <HowItWorks />
      <Features />
      <Pricing />
      <FinalCta />
      <Footer />
    </main>
  );
}
