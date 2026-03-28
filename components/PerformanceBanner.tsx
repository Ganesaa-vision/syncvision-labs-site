import React, { useEffect, useState, useRef } from 'react';
import { animate, useInView, m } from 'framer-motion';

const AnimatedNumber = ({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate(latest: number) {
                    setDisplayValue(Number.isInteger(value) ? Math.round(latest).toString() : latest.toFixed(1));
                }
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <>
            <span className="sr-only">{prefix}{value}{suffix}</span>
            <span aria-hidden="true" ref={ref} className="flex items-center">
                {prefix}<span>{displayValue}</span>{suffix}
            </span>
        </>
    );
};

export const PerformanceBanner = () => {
    return (
        <m.section 
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-blue-600/5 border-y border-blue-500/10 py-16 relative overflow-hidden origin-center"
        >
            <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-sm z-0"></div>
            <m.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.4, duration: 0.8 }} className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="flex flex-col items-center justify-center p-4">
                        <h3 className="text-5xl md:text-6xl font-black text-white mb-2 flex items-center justify-center gap-1 font-mono">
                            <AnimatedNumber value={100} />
                            <span className="text-3xl text-blue-400">/100</span>
                        </h3>
                        <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest">Lighthouse Score</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <h3 className="text-5xl md:text-6xl font-black text-white mb-2 flex items-center justify-center gap-1 font-mono">
                            <AnimatedNumber value={99.9} suffix="%" />
                        </h3>
                        <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest">Uptime Guarantee</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4">
                        <h3 className="text-5xl md:text-6xl font-black text-white mb-2 flex items-center justify-center gap-1 font-mono">
                            <span className="text-blue-400 mr-2">&lt;</span>
                            <AnimatedNumber value={100} suffix="ms" />
                        </h3>
                        <p className="text-sm text-neutral-400 font-bold uppercase tracking-widest">Server Latency</p>
                    </div>
                </div>
            </m.div>
        </m.section>
    );
};