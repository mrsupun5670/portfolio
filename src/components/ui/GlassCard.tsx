import React, { useState, useRef } from 'react';
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  tiltEffect?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hoverEffect = false,
  tiltEffect = false,
  ...props
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -5; // Max 5 deg rotation
    const rotateY = (x - centerX) / centerX * 5;
    setRotation({
      x: rotateX,
      y: rotateY
    });
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({
      x: 0,
      y: 0
    });
  };
  return <div ref={cardRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{
    transform: tiltEffect && isHovering ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)` : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
    transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
  }} className={`
        relative overflow-hidden rounded-xl border border-white/10 
        bg-black/40 backdrop-blur-md shadow-xl
        ${hoverEffect && !tiltEffect ? 'hover:bg-white/5 hover:border-white/20 hover:scale-[1.02] hover:shadow-cyan-500/20 transition-all duration-300 ease-out' : ''}
        ${className}
      `} {...props}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </div>;
}