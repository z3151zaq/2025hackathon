'use client';
import React, { useEffect, useRef } from 'react';

const STAR_COUNT = 300;
const RAIN_COUNT = 20;

export default function MeteorRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // 星空点缀
    const stars: HTMLDivElement[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * window.innerWidth + 'px';
      star.style.top = Math.random() * window.innerHeight + 'px';
      star.style.animationDelay = Math.random() * 10 + 's';
      document.body.appendChild(star);
      stars.push(star);
    }

    // 流星雨
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function MeteorRain() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.length = Math.ceil(Math.random() * 80 + 150);
      this.angle = 30;
      this.cos = Math.cos((this.angle * Math.PI) / 180);
      this.sin = Math.sin((this.angle * Math.PI) / 180);
      this.width = this.length * this.cos;
      this.height = this.length * this.sin;
      this.speed = Math.ceil(Math.random() + 0.5);
      this.shifting_x = this.speed * this.cos;
      this.shifting_y = this.speed * this.sin;
      this.alpha = 1;

      this.countPos = function () {
        this.x = this.x - this.shifting_x;
        this.y = this.y + this.shifting_y;
      };
      this.draw = function () {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.globalAlpha = this.alpha;
        const line = ctx.createLinearGradient(
          this.x,
          this.y,
          this.x + this.width,
          this.y - this.height
        );
        line.addColorStop(0, 'white');
        line.addColorStop(0.5, 'grey');
        line.addColorStop(1.0, 'black');
        ctx.strokeStyle = line;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.width, this.y - this.height);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
      };
      this.move = function () {
        const x = this.x + this.width - this.shifting_x;
        const y = this.y - this.height + this.shifting_y;
        ctx.clearRect(
          x - 3,
          y - 3,
          this.shifting_x + 5,
          this.shifting_y + 5
        );
        this.countPos();
        this.alpha -= 0.002;
        this.draw();
      };
    }

    let rains: any[] = [];
    for (let i = 0; i < RAIN_COUNT; i++) {
      const rain = new (MeteorRain as any)();
      rain.draw();
      rains.push(rain);
    }

    function playRains() {
      for (let n = 0; n < RAIN_COUNT; n++) {
        const rain = rains[n];
        rain.move();
        if (rain.y > window.innerHeight) {
          ctx.clearRect(
            rain.x,
            rain.y - rain.height,
            rain.width,
            rain.height
          );
          rains[n] = new (MeteorRain as any)();
        }
      }
      requestAnimationFrame(playRains);
    }
    playRains();

    // 清理
    return () => {
      stars.forEach(star => star.remove());
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        id="Meteor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </>
  );
} 