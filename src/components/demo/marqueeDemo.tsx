import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const companies = [
  {
    id: "company1",
    name: "Fire Pit",
    logo: "/logo-firepit.png",
  },
  {
    id: "company2",
    name: "ADM",
    logo: "/logo-adm-removebg-preview.png",
  },
  {
    id: "company3",
    name: "BM Midia",
    logo: "/BM-Midia.png",
  },
  {
    id: "company4",
    name: "Smart Tur",
    logo: "/smarttur.jpg",
  },
  {
    id: "company5",
    name: "Verbalize",
    logo: "/verbalize-nobg.jpg",
  },
  {
    id: "company6",
    name: "Dollce casa",
    logo: "/Dollce_casa.jpg",
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
      className="relative h-20 w-48 mx-6 flex items-center justify-center overflow-hidden transition-all duration-300 rounded-lg"
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