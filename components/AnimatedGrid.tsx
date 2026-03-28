import React, { useRef, useEffect } from 'react';

const AnimatedGrid = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const gridSize = 30;
        let frame = 0;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const drawGrid = () => {
            ctx.clearRect(0, 0, width, height);
            frame++;

            for (let x = 0; x < width; x += gridSize) {
                for (let y = 0; y < height; y += gridSize) {
                    const angle = (frame / 50) + (x / 200) + (y / 200);
                    const opacity = (Math.sin(angle) + 1) / 4; 
                    
                    ctx.fillStyle = `rgba(156, 163, 175, ${opacity * 0.2})`;
                    ctx.beginPath();
                    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            requestAnimationFrame(drawGrid);
        };

        drawGrid();

    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default AnimatedGrid;
