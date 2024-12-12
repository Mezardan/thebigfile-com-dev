import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import transitions from "@site/static/transitions.json";
import Link from "@docusaurus/Link";

const Sustainable: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section
      className="py-20 md:pt-20 md:pb-30 bg-[linear-gradient(180deg,#1B025A_0%,#1B025A_50%,transparent_50%,transparent_100%)]"
      id="sustainable"
    >
      <AnimateSpawn
        className="md:container-12"
        variants={transitions.container}
      >
        <div
          className="flex flex-col md:flex-row py-20 md:py-30 md:rounded-[32px] px-6 md:px-1/12 text-white"
          style={{
            background: `linear-gradient(77.94deg, #357095 -9.34%, #348B8D 21.93%, #39B392 48.29%, #4BA89C 75.1%, #348B8D 90.37%, #357195 108.5%)`,
          }}
        >
          <div className="flex-1 mb-10 md:mb-0 md:order-2">
            <img
              src="/img/home/sustainability-card.webp"
              alt=""
              loading="lazy"
              className="w-full max-w-none"
            />
          </div>
          <div className="flex-1 md:order-1">
            <h2 className="tw-heading-3 md:tw-heading-60 mb-6">
              Blockchain Based AI Models
            </h2>
            <p className="tw-lead-sm mb-6">
            Scalability and utility with a low carbon footprint — BigFile addresses the growing energy demands in AI by operating AI language models and processes on a decentralized, distributed network. By collaborating as a community, it strives to advance green technology.{" "}
            </p>
            <p className="mb-0">
              <Link
                className="button-outline-white text-center"
                href="/capabilities/sustainability"
              >
                About BigFile sustainability
              </Link>
            </p>
          </div>
        </div>
      </AnimateSpawn>
    </section>
  );
};

export default Sustainable;
