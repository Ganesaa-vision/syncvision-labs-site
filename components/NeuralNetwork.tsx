import React, { useRef, useEffect } from 'react';

const NeuralNetwork = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const dots: { x: number, y: number, vx: number, vy: number, radius: number }[] = [];
        const dotCount = 100;

        for (let i = 0; i < dotCount; i++) {
            dots.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5
            });
        }

        const mouse = {
            x: 0,
            y: 0
        };

        canvas.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            dots.forEach(dot => {
                dot.x += dot.vx;
                dot.y += dot.vy;

                if (dot.x < 0 || dot.x > width) dot.vx *= -1;
                if (dot.y < 0 || dot.y > height) dot.vy *= -1;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(156, 163, 175, 0.2)';
                ctx.fill();
            });

            for (let i = 0; i < dotCount; i++) {
                for (let j = i; j < dotCount; j++) {
                    const d1 = dots[i];
                    const d2 = dots[j];
                    const dx = d1.x - d2.x;
                    const dy = d1.y - d2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(d1.x, d1.y);
                        ctx.lineTo(d2.x, d2.y);
                        ctx.strokeStyle = `rgba(156, 163, 175, ${1 - distance / 100})`;
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        };

        animate();

    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default NeuralNetwork;
