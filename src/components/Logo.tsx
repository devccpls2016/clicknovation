'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  height?: number;
}

export default function Logo({ className = '', height = 48 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/Clicknovationlogo.png"
        alt="Clicknovation Technologies"
        width={300}
        height={height * 2}
        className="object-contain"
        style={{ height: `${height}px`, width: 'auto' }}
        priority
      />
    </Link>
  );
}
