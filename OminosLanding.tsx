import React from 'react';
import { HomeHero } from '../components/HomeHero';
import { ServicesSection } from '../components/ServicesSection';

export const OminosLanding = () => {
    return (
        <main className="bg-[#0E0E0E] min-h-screen text-[#E5E2E1] font-['Manrope',sans-serif] selection:bg-[#B8C3FF]/30">
            {/* Floating Editorial Header */}
            <header className="fixed top-0 left-0 w-full z-50 p-6 mix-blend-difference pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="font-['Space_Grotesk'] font-bold text-2xl tracking-tighter text-white">
                        OMINOS<span className="text-[#2E5BFF]">.</span>
                    </div>
                    <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-white/50">
                        Strategic Digital Foundry
                    </div>
                </div>
            </header>

            {/* Phase 1: Kinetic Hero Parallax */}
            <HomeHero />

            {/* Phase 2: 3D Glassmorphic Services Tilt */}
            <ServicesSection />
        </main>
    );
};