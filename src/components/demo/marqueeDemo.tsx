import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  {
    id: "company1",
    name: "Birth Hair",
    logo: "/2.png", // Replace with actual logo paths
  },
  {
    id: "company2",
    name: "Tokyo Turism",
    logo: "/3.png",
  },
  {
    id: "company3",
    name: "Guap",
    logo: "/6.png",
  },
  {
    id: "company4",
    name: "BSB Solutions",
    logo: "/7.png",
  },
  {
    id: "company5",
    name: "Hair Brasil",
    logo: "/8.png",
  },
  {
    id: "company6",
    name: "Casaf",
    logo: "/9.png",
  },
  {
    id: "company7",
    name: "Tokyo Drift Tour",
    logo: "/11.png",
  },
  {
    id: "company9",
    name: "BM Midia",
    logo: "/BM-Midia.png",
  },
  {
    id: "company10",
    name: "Smart Tur",
    logo: "/smarttur.png",
  },
  {
    id: "company11",
    name: "Verbalize",
    logo: "/verbalize.png",
  },
  {
    id: "company12",
    name: "Dollce casa",
    logo: "/Dollce_casa.png",
  },
];

// Split into two rows
const firstRow = companies

const CompanyLogo = ({
  logo,
  name,
}: {
  logo: string;
  name: string;
}) => {
  return (
    <div
      className="relative h-20 w-48 mx-6 flex items-center justify-center overflow-hidden bg-white hover:bg-white/70 border border-neutral-800 hover:border-[#EDFF8B]/30 transition-all duration-300 rounded-lg"
    >
      <Image 
        className="object-contain p-4 transition-all duration-300 hover:scale-110" 
        width="150" 
        height="75" 
        alt={`${name} logo`} 
        src={logo} 
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 bg-black">
      <Marquee pauseOnHover className="[--duration:35s] py-4">
        {firstRow.map((company) => (
          <CompanyLogo key={company.id} {...company} />
        ))}
      </Marquee> 
      {/* Gradient fades on sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
    </div>
  );
}