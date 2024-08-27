import Link from "@docusaurus/Link";
import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export const CardWithImage: React.FC<{
  children?: React.ReactNode;
  image: string;
  href: string;
}> = ({ children, image, href }) => {
  return (
    <MotionLink
      variants={transitions.item}
      to={href}
      className="bg-black/60 hover:bg-black/20 backdrop-blur-2xl rounded-xl pl-6 pr-20 md:pl-16 md:pr-40 text-white hover:no-underline transition-all hover:text-white min-h-[160px] md:min-h-[220px] flex flex-col justify-center gap-2 group"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="group-hover:-translate-y-2 transition-transform">
        {children}
      </div>
    </MotionLink>
  );
};

export const CardsSection = () => {
  return (
    <AnimateSpawn
      className="container-10 grid grid-cols-1 md:grid-cols-2 gap-2"
      variants={transitions.container}
    >
      <CardWithImage href="/chainfusion" image="/img/home/bureaucracy.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">
          Native Multi-chain
        </div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">
          Chain Fusion Technology
        </h2>
      </CardWithImage>

      <CardWithImage href="/ai" image="/img/home/ai.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2 whitespace-nowrap">
          AI models as smart contracts
        </div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">Decentralized AI</h2>
      </CardWithImage>

      <CardWithImage href="/docs/current/home" image="/img/home/dev-card.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">Developer Docs</div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">Start coding</h2>
      </CardWithImage>

      <CardWithImage href="/community" image="/img/home/events-card.webp">
        <div className="tw-heading-7 md:tw-heading-6 mb-2">BIG Community</div>
        <h2 className="tw-heading-5 md:tw-heading-4 mb-0">
          Community Worldwide
        </h2>
      </CardWithImage>
    </AnimateSpawn>
  );
};
