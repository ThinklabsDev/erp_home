'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TrustSection } from '@/components/TrustSection';
import { PainPointsSection } from '@/components/PainPointsSection';
import { FeatureHighlights } from '@/components/FeatureHighlights';
import { DeploymentSection } from '@/components/DeploymentSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { ModulesCarousel } from '@/components/ModulesCarousel';
import { AboutSection } from '@/components/AboutSection';
import { ROISection } from '@/components/ROISection';
import { IntegrationShowcase } from '@/components/IntegrationShowcase';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { SecuritySection } from '@/components/SecuritySection';
import {
  TargetAudienceSection,
  BeforeAfterSection,
  ImplementationSection,
  ComparisonSection,
  PricingLogicSection,
  TeamCredibilitySection
} from '@/components/StrategicSections';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-600 selection:bg-indigo-100 selection:text-indigo-900">

      {/* --- NAVIGATION --- */}
      <Navigation />

      <main>
        {/* --- HERO SECTION --- */}
        <HeroSection />

        {/* --- TRUST SIGNALS --- */}
        <TrustSection />

        {/* --- PAIN POINTS --- */}
        <PainPointsSection />

        {/* --- TARGET AUDIENCE (STRATEGIC ADDITION) --- */}
        <TargetAudienceSection />

        {/* --- BEFORE / AFTER (STRATEGIC ADDITION) --- */}
        <BeforeAfterSection />

        {/* --- CORE SYSTEMS PLATFORM (CAROUSEL) --- */}
        <ModulesCarousel />

        {/* --- FEATURE HIGHLIGHTS (EXPANDED ZIG ZAG) --- */}
        <FeatureHighlights />

        {/* --- IMPLEMENTATION (STRATEGIC ADDITION) --- */}
        <ImplementationSection />

        {/* --- COMPARISON (STRATEGIC ADDITION) --- */}
        <ComparisonSection />

        {/* --- SECURITY & COMPLIANCE --- */}
        <SecuritySection />

        {/* --- INTEGRATION --- */}
        <IntegrationShowcase />

        {/* --- DEPLOYMENT --- */}
        <DeploymentSection />

        {/* --- PRICING LOGIC (STRATEGIC ADDITION) --- */}
        <PricingLogicSection />

        {/* --- TESTIMONIALS --- */}
        <TestimonialsSection />

        {/* --- BENEFITS ROI --- */}
        <ROISection />

        {/* --- ABOUT THINKLABS --- */}
        <AboutSection />

        {/* --- TEAM CREDIBILITY (STRATEGIC ADDITION) --- */}
        <TeamCredibilitySection />

        {/* --- CTA SECTION --- */}
        <CTASection />

        {/* --- FOOTER --- */}
        <Footer />
      </main>
    </div>
  );
}
