import React, { useEffect, useRef } from 'react';
import useIntersection from "@/hooks/use-Intersection";

export default function AnimateValue() {
    const yearsRef = useRef<HTMLSpanElement>(null);
    const clientsRef = useRef<HTMLSpanElement>(null);
    const projectsRef = useRef<HTMLSpanElement>(null);
    const advisorsRef = useRef<HTMLSpanElement>(null);
    const salesRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const isInViewport = useIntersection(containerRef);

    const animateValue = (
        ref: React.RefObject<HTMLSpanElement>,
        start: number,
        end: number,
        duration: number
    ): void => {
        const obj = ref.current;
        if (!obj) return;

        const range = end - start;
        const stepTime = Math.abs(Math.floor(duration / range));

        const startTime = new Date().getTime();
        const endTime = startTime + duration;
        let timer: number;

        const run = () => {
            const now = new Date().getTime();
            const remaining = Math.max((endTime - now) / duration, 0);
            const value = Math.round(end - (remaining * range));
            obj.innerHTML = value + '+';
            if (value === end) {
                clearInterval(timer);
            }
        };

        timer = window.setInterval(run, stepTime);
        run();
    };

    useEffect(() => {
        if (isInViewport) {
            animateValue(yearsRef, 0, 12, 2000);
            animateValue(clientsRef, 0, 360, 2000);
            animateValue(projectsRef, 0, 580, 2000);
            animateValue(advisorsRef, 0, 160, 2000);
            animateValue(salesRef, 0, 48, 2000);
        }
    }, [isInViewport]);

    return (
        <div ref={containerRef} className="w-full h-[170px] lg:h-[230px] rounded-[20px] bg-about-bg bg-cover bg-center max-w-7xl">
            <div className="w-full h-full bg-green-650 rounded-[20px] bg-opacity-70">
                <div className="h-full flex text-white font-bold items-center justify-between px-4 md:px-8 lg:px-16">
                    <div className="text-center">
                        <span ref={yearsRef} className="text-xl sm:text-3xl lg:text-5xl">0+</span>
                        <div className="text-[8px] sm:text-xs lg:text-base pt-1">Glorious years</div>
                    </div>
                    <div className="text-center">
                        <span ref={clientsRef} className="text-xl sm:text-3xl lg:text-5xl">0+</span>
                        <div className="text-[8px] sm:text-xs lg:text-base pt-1">Happy clients</div>
                    </div>
                    <div className="text-center">
                        <span ref={projectsRef} className="text-xl sm:text-3xl lg:text-5xl">0+</span>
                        <div className="text-[8px] sm:text-xs lg:text-base pt-1">Projects complete</div>
                    </div>
                    <div className="text-center">
                        <span ref={advisorsRef} className="text-xl sm:text-3xl lg:text-5xl">0+</span>
                        <div className="text-[8px] sm:text-xs lg:text-base pt-1">Team advisor</div>
                    </div>
                    <div className="text-center">
                        <span ref={salesRef} className="text-xl sm:text-3xl lg:text-5xl">0+</span>
                        <div className="text-[8px] sm:text-xs lg:text-base pt-1">Products Sale</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

