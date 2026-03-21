import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustedBy } from "@/components/trusted-by";
import { StatsBar } from "@/components/stats-bar";
import { DashboardPreview } from "@/components/dashboard-preview";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Security } from "@/components/security";
import { Integrations } from "@/components/integrations";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <StatsBar />
      <DashboardPreview />
      <HowItWorks />
      <Features />
      <Security />
      <Integrations />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
