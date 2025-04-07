
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryLinks from "@/components/CategoryLinks";
import MarketplaceSection from "@/components/MarketplaceSection";
import DonationSection from "@/components/DonationSection";
import CampaignsSection from "@/components/CampaignsSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategoryLinks />
        <HowItWorksSection />
        <MarketplaceSection />
        <DonationSection />
        <CampaignsSection />
        <ImpactDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
