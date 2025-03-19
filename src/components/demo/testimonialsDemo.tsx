"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Rafael Oliveira",
    username: "@rafael",
    body: "Fiquei impressionado com o Diagnóstico Gratuito oferecido pela H. Eles identificaram exatamente onde precisávamos melhorar e nos deram um plano claro de ação.",
    img: <Image className="rounded-full"
    src="/jack.png" 
    alt="Avatar" 
    width={48} 
    height={48} 
    />,
  },
  {
    name: "Beatriz Souza",
    username: "@beatriz",
    body: "As estratégias personalizadas da H foram cruciais para o aumento de faturamento da nossa empresa. A equipe realmente entende nossas necessidades e objetivos. ",
    img: <Image className="rounded-full" 
    src="/jill.png" 
    alt="Avatar" 
    width={48} 
    height={48} 
    />,
  },
  {
    name: "Lucas Martins",
    username: "@lucas",
    body: "Desde que começamos a trabalhar com a H, nosso faturamento aumentou significativamente. A equipe nos ajudou a identificar novas oportunidades de mercado e a otimizar nossas estratégias de vendas. ",
    img: <Image className="rounded-full" 
    src="/john.png" 
    alt="Avatar" 
    width={48} 
    height={48} 
    />,
  },
  {
    name: "Pedro Coelho",
    username: "@pedro",
    body: " A H tem feito um trabalho surreal em relação a organização das etapas de processo, didáticas, apresentações. Realmente um backstage eficaz. ",
    img: <Image className="rounded-full" 
    src="/jane.png" 
    alt="Avatar" 
    width={48} 
    height={48} 
    />,
  },
  {
    name: "João Pereira",
    username: "@joao",
    body: " A consultoria estratégica da H foi essencial para nosso crescimento. Implementamos seus insights e dentro de 6 meses tivemos um aumento em nosso faturamento de 35%.",
    img: <Image className="rounded-full" 
    src="/jane.png" 
    alt="Avatar" 
    width={48} 
    height={48} 
    />,
  },
  {
    name: "Mariana Costa",
    username: "@mariana",
    body: " A abordagem estratégica nos permitiu aumentar nosso faturamento de forma consistente, as campanhas orientadas por dados são extremamente eficazes.",
    img: <Image className="rounded-full" 
    src="/james.png" 
    alt="Avatar" 
    width={48} 
    height={48} 
    />,
  },
];

const firstRow = reviews

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
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}
