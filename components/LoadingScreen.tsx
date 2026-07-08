"use client";

import { useEffect, useState, useRef } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const mountTime = useRef(Date.now());

  // حداقل زمان نمایش لودینگ (میلی‌ثانیه) — طوری تنظیم شده که تمام انیمیشن‌ها تمام بشن
  const MIN_DISPLAY_MS = 5500;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // خیلی آهسته: هر بار فقط ۱ تا ۲.۵ درصد اضافه میشه
        return prev + Math.random() * 1.5 + 1;
      });
    }, 200);

    const finish = () => {
      setProgress(100);
      clearInterval(progressInterval);

      const elapsed = Date.now() - mountTime.current;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      // صبر کن تا حداقل زمان بگذره + انیمیشن خروج
      setTimeout(() => setVisible(false), remaining + 400);
    };

    if (document.readyState === "complete") {
      // حتی اگه صفحه از قبل لود شده، بازم منتظر بمون
      setTimeout(finish, 1000);
      return;
    }

    window.addEventListener("load", () => {
      // بعد از لود هم حداقل زمان رعایت بشه
      const elapsed = Date.now() - mountTime.current;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      setTimeout(finish, remaining);
    });

    // فال‌بک: اگه load event اصلاً fires نشد
    const fallback = setTimeout(finish, MIN_DISPLAY_MS + 2000);

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(fallback);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div
      className={`loading-screen ${visible ? "" : "loading-screen-exit"}`}
      aria-hidden={!visible}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@200;300;400;500&display=swap');

        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #0e1629;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .loading-screen-exit {
          opacity: 0;
          transform: scale(1.03);
          pointer-events: none;
        }

        .ambient-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(74,123,255,0.06) 0%, transparent 70%);
          animation: ambientPulse 7s ease-in-out infinite;
          pointer-events: none;
        }

        .ambient-glow-secondary {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,165,116,0.035) 0%, transparent 70%);
          animation: ambientPulse 9s ease-in-out 2.5s infinite;
          pointer-events: none;
        }

        @keyframes ambientPulse {
          0%, 100% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        .watch-container {
          position: relative;
          width: 260px;
          height: 260px;
          animation: watchReveal 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: scale(0.55);
        }

        @keyframes watchReveal {
          0% {
            opacity: 0;
            transform: scale(0.55) rotateY(90deg);
            filter: blur(35px);
          }
          25% {
            filter: blur(20px);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.04) rotateY(-4deg);
            filter: blur(5px);
          }
          75% {
            transform: scale(0.98) rotateY(1deg);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
            filter: blur(0px);
          }
        }

        .watch-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 50px rgba(74,123,255,0.1))
                  drop-shadow(0 25px 80px rgba(0,0,0,0.5));
        }

        .watch-case-outer {
          fill: none;
          stroke: url(#blueGradient);
          stroke-width: 2;
          stroke-dasharray: 820;
          stroke-dashoffset: 820;
          animation: drawCircle 3.2s cubic-bezier(0.65, 0, 0.35, 1) 0.5s forwards;
        }

        .watch-case-mid {
          fill: none;
          stroke: url(#blueGradient);
          stroke-width: 0.3;
          stroke-dasharray: 785;
          stroke-dashoffset: 785;
          opacity: 0.15;
          animation: drawCircle 2.8s cubic-bezier(0.65, 0, 0.35, 1) 0.8s forwards;
        }

        .watch-case-inner {
          fill: none;
          stroke: url(#blueGradient);
          stroke-width: 0.5;
          stroke-dasharray: 750;
          stroke-dashoffset: 750;
          opacity: 0.3;
          animation: drawCircle 2.5s cubic-bezier(0.65, 0, 0.35, 1) 1s forwards;
        }

        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }

        .watch-face {
          fill: #0a1020;
          opacity: 0;
          animation: faceReveal 2s ease-out 2s forwards;
        }

        @keyframes faceReveal {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .hour-marker {
          stroke: #4a7bff;
          stroke-width: 2;
          stroke-linecap: round;
          opacity: 0;
          animation: markerReveal 0.7s ease-out forwards;
        }

        .hour-marker.minor {
          stroke: rgba(74,123,255,0.3);
          stroke-width: 0.8;
          opacity: 0;
          animation: markerReveal 0.5s ease-out forwards;
        }

        @keyframes markerReveal {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }

        .hour-number {
          fill: #d9d9d9;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 300;
          text-anchor: middle;
          dominant-baseline: central;
          opacity: 0;
          animation: numberReveal 1s ease-out forwards;
        }

        @keyframes numberReveal {
          0% { opacity: 0; filter: blur(8px); }
          100% { opacity: 0.85; filter: blur(0); }
        }

        .hand-hour {
          stroke: #d9d9d9;
          stroke-width: 3.5;
          stroke-linecap: round;
          transform-origin: 130px 130px;
          opacity: 0;
          animation: handReveal 1s ease-out 3.8s forwards,
                     handRotate 20s linear 4.8s infinite;
        }

        .hand-minute {
          stroke: #ffffff;
          stroke-width: 2;
          stroke-linecap: round;
          transform-origin: 130px 130px;
          opacity: 0;
          animation: handReveal 1s ease-out 4.3s forwards,
                     handRotate 6s linear 5.3s infinite;
        }

        .hand-second {
          stroke: #d4a574;
          stroke-width: 0.8;
          stroke-linecap: round;
          transform-origin: 130px 130px;
          opacity: 0;
          animation: handReveal 0.8s ease-out 4.8s forwards,
                     secondHandSpin 1.5s linear 5.6s infinite;
        }

        @keyframes handReveal {
          0% { opacity: 0; transform: scaleX(0); }
          100% { opacity: 1; transform: scaleX(1); }
        }

        @keyframes handRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes secondHandSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .center-dot {
          fill: #4a7bff;
          opacity: 0;
          animation: dotReveal 0.8s ease-out 4.8s forwards;
        }

        .center-dot-inner {
          fill: #0a1020;
          opacity: 0;
          animation: dotReveal 0.8s ease-out 5.1s forwards;
        }

        @keyframes dotReveal {
          0% { opacity: 0; transform: scale(0); }
          50% { transform: scale(1.4); }
          100% { opacity: 1; transform: scale(1); }
        }

        .sub-dial-ring {
          fill: none;
          stroke: rgba(74,123,255,0.15);
          stroke-width: 0.5;
          opacity: 0;
          animation: faceReveal 1.5s ease-out 2.8s forwards;
        }

        .sub-dial-text {
          fill: rgba(212,165,116,0.5);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 4px;
          font-weight: 400;
          letter-spacing: 1.5px;
          text-anchor: middle;
          opacity: 0;
          animation: faceReveal 1.5s ease-out 3.2s forwards;
        }

        .watch-crown {
          fill: none;
          stroke: url(#blueGradient);
          stroke-width: 1.5;
          opacity: 0;
          animation: crownReveal 1.2s ease-out 2s forwards;
        }

        .watch-crown-fill {
          fill: url(#blueGradient);
          opacity: 0;
          animation: crownReveal 1.2s ease-out 2s forwards;
        }

        @keyframes crownReveal {
          0% { opacity: 0; transform: translateX(-15px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .watch-lug {
          fill: none;
          stroke: url(#blueGradient);
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: drawLug 1.2s ease-out 1.2s forwards;
        }

        @keyframes drawLug {
          to { stroke-dashoffset: 0; }
        }

        .brand-text {
          font-family: 'Space Grotesk', sans-serif;
          background: linear-gradient(135deg, #f5e6cc 0%, #d4a574 50%, #f5e6cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 14px;
          font-size: 30px;
          font-weight: 400;
          margin-top: 52px;
          opacity: 0;
          animation: textSlideUp 1.8s cubic-bezier(0.16, 1, 0.3, 1) 3.5s forwards;
          text-transform: uppercase;
        }

        .sub-text {
          font-family: 'Inter', sans-serif;
          color: rgba(217, 217, 217, 0.35);
          letter-spacing: 6px;
          font-size: 10px;
          font-weight: 300;
          margin-top: 14px;
          opacity: 0;
          animation: textSlideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 4.2s forwards;
          text-transform: uppercase;
        }

        @keyframes textSlideUp {
          0% { opacity: 0; transform: translateY(25px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .progress-container {
          position: absolute;
          bottom: 56px;
          width: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          opacity: 0;
          animation: textSlideUp 1.2s ease-out 5s forwards;
        }

        .progress-bar-track {
          width: 100%;
          height: 1px;
          background: rgba(74,123,255,0.1);
          position: relative;
          overflow: hidden;
          border-radius: 1px;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, transparent, #4a7bff, #3360dd);
          width: 0%;
          transition: width 0.5s ease-out;
          box-shadow: 0 0 12px rgba(74,123,255,0.5);
        }

        .progress-percent {
          font-family: 'Inter', sans-serif;
          color: rgba(217, 217, 217, 0.25);
          font-size: 11px;
          font-weight: 300;
          letter-spacing: 4px;
        }

        .corner-deco {
          position: absolute;
          width: 36px;
          height: 36px;
          opacity: 0;
          animation: cornerReveal 1.5s ease-out 5.2s forwards;
        }

        .corner-deco.tl { top: 36px; left: 36px; border-top: 1px solid rgba(74,123,255,0.15); border-left: 1px solid rgba(74,123,255,0.15); }
        .corner-deco.tr { top: 36px; right: 36px; border-top: 1px solid rgba(74,123,255,0.15); border-right: 1px solid rgba(74,123,255,0.15); }
        .corner-deco.bl { bottom: 36px; left: 36px; border-bottom: 1px solid rgba(74,123,255,0.15); border-left: 1px solid rgba(74,123,255,0.15); }
        .corner-deco.br { bottom: 36px; right: 36px; border-bottom: 1px solid rgba(74,123,255,0.15); border-right: 1px solid rgba(74,123,255,0.15); }

        @keyframes cornerReveal {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0;
        }

        .particle.blue { background: #4a7bff; }
        .particle.gold { background: #d4a574; }
        .particle.white { background: #d9d9d9; }

        .particle:nth-child(1) { width: 2px; height: 2px; top: 18%; left: 12%; animation: particleFloat 10s ease-in-out 2s infinite; }
        .particle:nth-child(2) { width: 1px; height: 1px; top: 72%; left: 82%; animation: particleFloat 12s ease-in-out 3.5s infinite; }
        .particle:nth-child(3) { width: 1.5px; height: 1.5px; top: 28%; right: 18%; animation: particleFloat 11s ease-in-out 4.5s infinite; }
        .particle:nth-child(4) { width: 2px; height: 2px; bottom: 22%; left: 22%; animation: particleFloat 13s ease-in-out 1s infinite; }
        .particle:nth-child(5) { width: 1px; height: 1px; top: 12%; right: 30%; animation: particleFloat 9s ease-in-out 5s infinite; }
        .particle:nth-child(6) { width: 1.5px; height: 1.5px; bottom: 30%; right: 12%; animation: particleFloat 11s ease-in-out 3.5s infinite; }
        .particle:nth-child(7) { width: 1px; height: 1px; top: 45%; left: 8%; animation: particleFloat 14s ease-in-out 1.5s infinite; }
        .particle:nth-child(8) { width: 2px; height: 2px; top: 55%; right: 10%; animation: particleFloat 10s ease-in-out 2.5s infinite; }

        @keyframes particleFloat {
          0%, 100% { opacity: 0; transform: translateY(0) scale(0); }
          15% { opacity: 0.45; transform: translateY(-8px) scale(1); }
          85% { opacity: 0.1; transform: translateY(-55px) scale(0.3); }
        }

        .line-deco {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(74,123,255,0.1), transparent);
          opacity: 0;
          animation: lineReveal 2.5s ease-out 5s forwards;
        }

        .line-deco.top { top: 72px; left: 8%; width: 84%; }
        .line-deco.bottom { bottom: 96px; left: 8%; width: 84%; }

        @keyframes lineReveal {
          0% { opacity: 0; transform: scaleX(0); }
          100% { opacity: 1; transform: scaleX(1); }
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(74,123,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,123,255,0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0;
          animation: faceReveal 3s ease-out 1s forwards;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="grid-overlay" />

      <div className="particle blue" />
      <div className="particle gold" />
      <div className="particle blue" />
      <div className="particle white" />
      <div className="particle gold" />
      <div className="particle blue" />
      <div className="particle white" />
      <div className="particle gold" />

      <div className="ambient-glow" />
      <div className="ambient-glow-secondary" />

      <div className="corner-deco tl" />
      <div className="corner-deco tr" />
      <div className="corner-deco bl" />
      <div className="corner-deco br" />

      <div className="line-deco top" />
      <div className="line-deco bottom" />

      <div className="watch-container">
        <svg
          className="watch-svg"
          viewBox="0 0 260 260"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b9bff" />
              <stop offset="40%" stopColor="#4a7bff" />
              <stop offset="70%" stopColor="#3360dd" />
              <stop offset="100%" stopColor="#2a4fb8" />
            </linearGradient>
            <radialGradient id="faceGrad" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#141e38" />
              <stop offset="100%" stopColor="#0a1020" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glowBlue">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feFlood floodColor="#4a7bff" floodOpacity="0.3" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="shadow" />
              <feMerge>
                <feMergeNode in="shadow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <line className="watch-lug" x1="110" y1="18" x2="104" y2="2" style={{ animationDelay: '1.2s' }} />
          <line className="watch-lug" x1="150" y1="18" x2="156" y2="2" style={{ animationDelay: '1.4s' }} />
          <line className="watch-lug" x1="110" y1="242" x2="104" y2="258" style={{ animationDelay: '1.6s' }} />
          <line className="watch-lug" x1="150" y1="242" x2="156" y2="258" style={{ animationDelay: '1.8s' }} />

          <rect className="watch-crown-fill" x="248" y="121" width="11" height="18" rx="2" />
          <rect className="watch-crown" x="248" y="121" width="11" height="18" rx="2" />
          <line className="watch-crown" x1="250" y1="125" x2="257" y2="125" style={{ animationDelay: '2.2s' }} />
          <line className="watch-crown" x1="250" y1="129" x2="257" y2="129" style={{ animationDelay: '2.4s' }} />
          <line className="watch-crown" x1="250" y1="133" x2="257" y2="133" style={{ animationDelay: '2.6s' }} />
          <line className="watch-crown" x1="250" y1="137" x2="257" y2="137" style={{ animationDelay: '2.8s' }} />

          <circle className="watch-case-outer" cx="130" cy="130" r="110" />
          <circle className="watch-case-mid" cx="130" cy="130" r="105" />
          <circle className="watch-case-inner" cx="130" cy="130" r="100" />

          <circle className="watch-face" cx="130" cy="130" r="98" fill="url(#faceGrad)" />

          <circle className="sub-dial-ring" cx="130" cy="178" r="23" />
          <circle className="sub-dial-ring" cx="130" cy="178" r="20" style={{ animationDelay: '3s' }} />
          <text className="sub-dial-text" x="130" y="172" style={{ fontSize: '3.8px', fontWeight: '500' }}>CHRONOS</text>
          <text className="sub-dial-text" x="130" y="180" style={{ fontSize: '3px', fontWeight: '300', letterSpacing: '2px', animationDelay: '3.5s' }}>AUTOMATIC</text>
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 130 + Math.sin(angle) * 21;
            const y1 = 178 - Math.cos(angle) * 21;
            const x2 = 130 + Math.sin(angle) * 23;
            const y2 = 178 - Math.cos(angle) * 23;
            return (
              <line
                key={`sub-${i}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="rgba(74,123,255,0.2)"
                strokeWidth="0.3"
                className="sub-dial-ring"
                style={{ animationDelay: `${3 + i * 0.05}s` }}
              />
            );
          })}

          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i * 6 * Math.PI) / 180;
            const isHour = i % 5 === 0;
            const outerR = 95;
            const innerR = isHour ? 84 : 90;
            const x1 = 130 + Math.sin(angle) * outerR;
            const y1 = 130 - Math.cos(angle) * outerR;
            const x2 = 130 + Math.sin(angle) * innerR;
            const y2 = 130 - Math.cos(angle) * innerR;

            if (isHour) {
              return (
                <line
                  key={i}
                  className="hour-marker"
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  style={{ animationDelay: `${2 + (i / 5) * 0.12}s` }}
                />
              );
            }
            return (
              <line
                key={i}
                className="hour-marker minor"
                x1={x1} y1={y1} x2={x2} y2={y2}
                style={{ animationDelay: `${2.5 + i * 0.03}s` }}
              />
            );
          })}

          <text className="hour-number" x="130" y="50" style={{ animationDelay: '2.5s' }}>12</text>
          <text className="hour-number" x="210" y="134" style={{ animationDelay: '2.7s' }}>3</text>
          <text className="hour-number" x="130" y="218" style={{ animationDelay: '2.9s' }}>6</text>
          <text className="hour-number" x="50" y="134" style={{ animationDelay: '3.1s' }}>9</text>

          <line className="hand-hour" x1="130" y1="135" x2="130" y2="72" filter="url(#glow)" />
          <line className="hand-minute" x1="130" y1="138" x2="130" y2="48" filter="url(#glow)" />
          <line className="hand-second" x1="130" y1="148" x2="130" y2="44" filter="url(#glowBlue)" />

          <circle className="center-dot" cx="130" cy="130" r="5.5" />
          <circle className="center-dot-inner" cx="130" cy="130" r="2" />
        </svg>
      </div>

      <div className="brand-text">CHRONOS</div>
      <div className="sub-text">Premium Luxury Timepieces</div>

      <div className="progress-container">
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="progress-percent">
          {Math.min(Math.floor(progress), 100)}%
        </div>
      </div>
    </div>
  );
}