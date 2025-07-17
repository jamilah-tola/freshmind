import React from 'react';
import Image from 'next/image';
import { images } from '@/constants/images';

interface PageHeaderProps {
  title: string;
  subtitle?: React.ReactNode;
  overlayClassName?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  overlayClassName = 'bg-[rgba(0,0,0,0.2)]',
}) => (
  <section className="relative text-primary-foreground bg-primary py-20 overflow-hidden">
    {/* 
      1) absolute inset-0 → stretch to fill the parent
      2) -z-10 → push behind the overlay and content
    */}



    <div className="container relative z-10">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight">{title}</h1>
        {subtitle && (
          <p className="text-xl leading-relaxed text-secondary-foreground/80">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default PageHeader;
