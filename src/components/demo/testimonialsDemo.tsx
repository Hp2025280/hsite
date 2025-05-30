"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useTranslations } from 'next-intl';
import Image from "next/image";

const ReviewCard = ({
  name,
  username,
  body,
  img,
}: {
  img: React.ReactNode ;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-50/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",

      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="rounded-full">
          {img}
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialsDemo() {
  const t = useTranslations('testimonials');

  const reviews = [
    {
      name: t('reviews.0.name'),
      username: t('reviews.0.username'),
      body: t('reviews.0.body'),
      img: <Image className="rounded-full"
      src="/jack.png" 
      alt="Avatar" 
      width={48} 
      height={48} 
      />,
    },
    {
      name: t('reviews.1.name'),
      username: t('reviews.1.username'),
      body: t('reviews.1.body'),
      img: <Image className="rounded-full" 
      src="/jill.png" 
      alt="Avatar" 
      width={48} 
      height={48} 
      />,
    },
    {
      name: t('reviews.2.name'),
      username: t('reviews.2.username'),
      body: t('reviews.2.body'),
      img: <Image className="rounded-full" 
      src="/john.png" 
      alt="Avatar" 
      width={48} 
      height={48} 
      />,
    },
    {
      name: t('reviews.3.name'),
      username: t('reviews.3.username'),
      body: t('reviews.3.body'),
      img: <Image className="rounded-full" 
      src="/jane.png" 
      alt="Avatar" 
      width={48} 
      height={48} 
      />,
    },
    {
      name: t('reviews.4.name'),
      username: t('reviews.4.username'),
      body: t('reviews.4.body'),
      img: <Image className="rounded-full" 
      src="/jane.png" 
      alt="Avatar" 
      width={48} 
      height={48} 
      />,
    },
    {
      name: t('reviews.5.name'),
      username: t('reviews.5.username'),
      body: t('reviews.5.body'),
      img: <Image className="rounded-full" 
      src="/james.png" 
      alt="Avatar" 
      width={48} 
      height={48} 
      />,
    },
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
