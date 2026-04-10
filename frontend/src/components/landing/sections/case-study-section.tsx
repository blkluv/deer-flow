import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Section } from "../section";

export function CaseStudySection({ className }: { className?: string }) {
  const caseStudies = [
    {
      title: "CREMARKET SOCIAL",
      description:
        "A Reddit-like social platform for commercial real estate professionals to share insights, ask questions, and discuss industry trends.",
      url: "https://social.cremarket.io",
      comingSoon: false,
    },
    {
      title: "CREMARKET MAP",
      description:
        "A CRE map with video and UGC content showcasing the latest trends and innovations in the commercial real estate industry.",
      url: "https://map.cremarket.io",
      comingSoon: false,
    },
    {
      title: "@CREMARKET TIKTOK",
      description:
        "A TikTok account for commercial real estate professionals to share insights, ask questions, and discuss industry trends.",
      url: "https://tiktok.com/@cremarket",
      comingSoon: false,
    },
    {
      title: "CREMARKET AR",
      description: "CRE TikTok AR Effect Dealflow",
      url: "https://ar.cremarket.io",
      comingSoon: false,
    },
    {
      title: "CREMARKET RENT (COMING SOON)",
      description:
        "CREMARKET Rent is a DIY Bitcoin dapp for tokenizing rent tokens.",
      url: "#",
      comingSoon: true,
    },
    {
      title: "CREMARKET AI (COMING SOON)",
      description: "CREMARKET AI underwriter",
      url: "#",
      comingSoon: true,
    },
  ];

  return (
    <Section
      className={className}
      title="CRE Markets"
      subtitle="We re-built the CRE industry markets by subdomains."
    >
      <div className="container-md mt-8 grid grid-cols-1 gap-4 px-4 md:px-8 lg:px-20 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => {
          const cardContent = (
            <Card
              className={cn(
                "group/card relative h-64 overflow-hidden",
                caseStudy.comingSoon && "opacity-75 cursor-not-allowed"
              )}
            >
              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover/card:scale-110 group-hover/card:brightness-90"
                style={{
                  backgroundImage: `url(/images/placeholder.jpg)`,
                }}
              ></div>
              <div
                className={cn(
                  "flex h-full w-full translate-y-[calc(100%-60px)] flex-col items-center",
                  "transition-all duration-300",
                  "group-hover/card:translate-y-[calc(100%-128px)]"
                )}
              >
                <div
                  className="flex w-full flex-col p-4"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="flex h-14 items-center text-xl font-bold text-shadow-black">
                      {caseStudy.title}
                    </h3>
                    <p className="box-shadow-black overflow-hidden text-sm text-white/85 text-shadow-black">
                      {caseStudy.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          );

          if (caseStudy.comingSoon) {
            return <div key={caseStudy.title}>{cardContent}</div>;
          }

          // Use regular <a> tag to guarantee external navigation
          return (
            <a
              key={caseStudy.title}
              href={caseStudy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </Section>
  );
}