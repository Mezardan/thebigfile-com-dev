import Link from "@docusaurus/Link";
import DarkHeroStyles from "@site/src/components/Common/DarkHeroStyles";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import LinkArrowRight from "../components/Common/Icons/LinkArrowRight";
import LinkArrowUpRight from "../components/Common/Icons/LinkArrowUpRight";
import LinkCardsSection from "../components/Common/LinkCardsSection";
import ShareMeta from "../components/Common/ShareMeta";
import { useFontsLoaded } from "@site/src/utils/use-fonts-loaded";
import VideoCard from "../components/Common/VideoCard/index";
// import youtubeData from "@site/.docusaurus/youtube/default/youtube.json";
import { NewsCard } from "../components/NewsPage/Cards";
import clsx from "clsx";
import CodeBlockString from "../theme/CodeBlock/Content/String";
import { useDarkHeaderInHero } from "../utils/use-dark-header-in-hero";

interface TrustCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
  link?: string;
  linkText?: string;
}

const MotionLink = motion(Link);

const trustCards = [
  {
    imageSrc: "/img/decentralized-ai/trust-icon-1.svg",
    imageAlt: "Tamper-proofness icon",
    title: "Tamper-proof",
    description:
      "Computation is replicated across multiple nodes and validated by consensus. There is no single point of trust.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-2.svg",
    imageAlt: "Unstoppability icon",
    title: "Unstoppable",
    description:
      "Smart contracts are censorship resistant as they are not controlled by a single entity or legislation.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-3.svg",
    imageAlt: "Autonomy icon",
    title: "Autonomous",
    description:
      "Smart contracts can be made immutable turning them into a permanent compute unit in cyberspace.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-4.svg",
    imageAlt: "Scalability icon",
    title: "Scalable",
    description:
      "ICP aims to give smart contracts near native performance and scalability. Currently, smart contracts can execute billions of instructions per message and use 4GiB of the main memory and 400GiB of stable memory. The future vision is to give smart contracts access to AI hardware such as GPUs.",
  },
  {
    imageSrc: "/img/decentralized-ai/trust-icon-5.svg",
    imageAlt: "Expressiveness icon",
    title: "Expressive",
    description:
      "The virtual machine of ICP is WebAssembly that has a growing ecosystem of languages, tools, and libraries. This allows ICP developers to use open source projects such as ",
    link: "https://github.com/sonos/tract",
    linkText: "Sonos Tract AI inference engine",
  },
];

const shortTermRoadmapItems = [
  "Faster deterministic floating-point operations",
  "Wasm SIMD (Single-instruction multiple data)",
  "Upgrade Wasm memory to 64-bit",
];

const longTermRoadmapItems = [
  "Explore API for deterministic AI computation on GPUs.",
  "Develop public specification for nodes with GPUs.",
  "Add subnets with the new nodes to ICP.",
];

const TrustCard: React.FC<TrustCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  link,
  linkText,
}) => (
  <div className="flex flex-col text-white">
    <img src={imageSrc} alt={imageAlt} className="w-3/10" />
    <div className="mt-6 tw-heading-5 md:tw-heading-4 font-bold leading-8">
      {title}
    </div>
    {link && linkText ? (
      <div className="mt-2 text-base leading-6 font-[450]">
        {description}
        <Link
          className="text-white underline hover:no-underline hover:text-white hover:opacity-80 duration-200 ease-in-out"
          to={link}
          target="_blank"
        >
          {linkText}
        </Link>{" "}
        in their smart contracts.
      </div>
    ) : (
      <div className="mt-2 text-base leading-6 font-[450]">{description}</div>
    )}
  </div>
);

const RoadMapList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul className="list-none m-0 p-0">
      {items.map((item, index) => (
        <li key={index} className="flex items-center my-2">
          <img
            src={"/img/decentralized-ai/icon-check.svg"}
            alt=""
            className="h-6 w-6 mr-2 select-none"
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

function AIPage() {
  const fontLoaded = useFontsLoaded();
  const heroRef = useRef<HTMLDivElement>(null);
  const isDark = useDarkHeaderInHero(heroRef);

  return (
    <Layout
      title="Decentralized AI on Internet Computer - Secure and Trustworthy AI Solutions"
      description="Explore how the Internet Computer Protocol (ICP) leverages blockchain technology to offer decentralized AI solutions, ensuring model integrity, data confidentiality, and resilience against disruptions. Discover how AI smart contracts on ICP can transform trust and security in artificial intelligence."
    >
      <ShareMeta image="/img/shareImages/share-ai.jpg"></ShareMeta>

      <main
        className="text-black relative overflow-hidden"
        style={{
          marginTop: `calc(var(--ifm-navbar-height) * -1)`,
        }}
      >
        {isDark && <DarkHeroStyles bgColor="transparent"></DarkHeroStyles>}
        <section
          className="text-white pt-20 mb-[10vw] lg:mb-3"
          style={{
            background: "linear-gradient(54deg, #3B00B9 0%, #D38ED7 153.06%)",
          }}
          ref={heroRef}
        >
          <div className="container-10 pt-20 pb-12 sm:pb-40 md:pb-40 md:pt-36 relative z-10">
            <motion.h1
              className="tw-heading-3 md:tw-heading-2 mb-2 md:mb-6 md:w-8/10 "
              variants={transitions.item}
            >
              Hello, <br /> Decentralized AI
            </motion.h1>
            <div className="relative  md:w-5/10">
              <motion.p
                className="tw-lead-sm md:tw-lead mb-8"
                variants={transitions.item}
              >
                Train and run AI models as smart contracts fully onchain to
                benefit from the security, resilience, and computation power of the
                BigFile blockchain.
              </motion.p>
              {/* <MotionLink
                className="button-white"
                href="/ai"
                target="_blank"
                rel="noopener noreferrer"
                variants={transitions.item}
              >
                EXPLORE AI ON ICP
              </MotionLink> */}
            </div>
          </div>
          <div className="container-12 relative z-1 h-[200px] md:h-0 pointer-events-none">
            <div className="absolute w-10/12 sm:w-5/12 left-1/2 translate-y-1/2 -translate-x-[50%] bottom-1/2 md:left-0 md:absolute md:w-5/12 md:bottom-0 md:translate-x-[130%] md:translate-y-2/12">
              <img
                src="/img/decentralized-ai/aiheader.svg"
                alt="Start building on Internet Identity"
                className="w-full max-w-none"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section className="container-10 mt-44 md:mt-60 mb-12 md:mb-20 ">
          <AnimateSpawn
            className="mt-32 md:mt-24"
            variants={transitions.container}
          >
            <motion.h4 className="tw-heading-4 md:tw-heading-60 text-gradient">
              A recent study on AI finds that nearly half of the respondents
              (49%) are concerned about the misuse of AI for nefarious purposes.
            </motion.h4>
            <motion.p className="my-8">
              Survey in the{" "}
              <Link
                className="font-bold"
                to="https://aiindex.stanford.edu/wp-content/uploads/2024/04/HAI_AI-Index-Report-2024.pdf"
                target="_blank"
              >
                Artificial Intelligence Index Report 2024
              </Link>{" "}
              by Stanford University.
            </motion.p>
          </AnimateSpawn>
        </section>
        <section className="container-12 relative mt-24 sm:mt-52 md:mt-40">
          <AnimateSpawn variants={transitions.container}>
            <aside className="container-10 md:mt-40 md:flex md:items-center !pl-0 !pr-0	">
              <div className=" w-[115%] -ml-6 md:-ml-0 md:w-2/3 relative mt-6 md:mt-64 md:mb-64">
                <div className="pointer-events-none md:absolute w-full right-0 md:right-20 md:top-1/2  md:-translate-y-1/2">
                  <motion.img
                    variants={transitions.fadeIn}
                    src="/img/decentralized-ai/trust-img-1.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className=" md:w-1/3">
                <motion.h3
                  className="tw-heading-4 md:tw-heading-60 mb-6 md:mb-12"
                  variants={transitions.item}
                >
                  The black-box AI problem
                </motion.h3>
                <motion.p className="text-2xl mb-0 ">
                  As companies race to build AI-powered products, they leave
                  users no option but to blindly trust the underlying AI models.
                  Their behavior is non-deterministic and not verifiable. Worse,
                  {" "}<Link
                    className="font-bold"
                    to="https://twitter.com/AnthropicAI/status/1745854907968880970"
                    target="_blank"
                  >
                    Research shows
                  </Link>{" "}
                  that it is possible to tamper with AI models in an
                  undetectable way. Users have no visibility into how their data
                  is used and how AI models produces responses.
                  Since AI models behave like black boxes to users, building
                  trustworthy AI models is a difficult challenge that can be
                  solved by training and running the models on ICP.
                </motion.p>
              </div>
            </aside>
          </AnimateSpawn>
        </section>
        <section className="container-12  relative mt-24 mb-24 sm:mt-52 md:mt-40">
          <motion.h4 className="tw-heading-4 md:tw-heading-60 text-gradient text-left md:text-center my-12  md:mb-16 md:w-5/10 md:mx-auto">
            What is required to establish trust?
          </motion.h4>
          <AnimateSpawn
            className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-5"
            variants={transitions.container}
          >
            <motion.div
              className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-8"
              variants={transitions.item}
            >
              <img
                src="/img/decentralized-ai/icon-1.svg"
                alt=""
                className="h-24"
              />
              <h3 className="tw-lead my-3 md:tw-title-sm ">Model integrity</h3>
              <p className="tw-paragraph-sm text-black/60 md:tw-paragraph mb-0">
                Users need guarantees that their AI prompts are answered by a
                model that has not been tampered with. Traditional techniques
                for assessing the integrity of software, such as source code
                analysis, are infeasible for AI models due to their large sizes.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-8"
              variants={transitions.item}
            >
              <img
                src="/img/decentralized-ai/icon-2.svg"
                alt=""
                className="h-24"
              />
              <h3 className="tw-lead my-3 md:tw-title-sm">
                Data confidentiality
              </h3>
              <p className="tw-paragraph-sm text-black/60  mb-0">
                During training and operation, AI models handle sensitive data,
                like medical inquiries or corporate secrets. Users need
                guarantees that their information remains secure and doesn't
                leak to the model creators, other users, or AI infrastructure
                providers.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col text-center backdrop-blur-2xl rounded-xl border border-white border-solid bg-white/90 p-8"
              variants={transitions.item}
            >
              <img
                src="/img/decentralized-ai/icon-3.svg"
                alt=""
                className="h-24"
              />
              <h3 className="tw-lead my-3 md:tw-title-sm">Availability</h3>
              <p className="tw-paragraph-sm text-black/60  mb-0">
                AI models will become essential for business processes and
                societies in general. As with every critical infrastructure,
                solutions must be found to keep AI models resilient to
                interruptions and to protect them from censorship.
              </p>
            </motion.div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn variants={transitions.container}>
          <section className="bg-infinite text-white pt-6 pb-20" ref={heroRef}>
            <article className="container-10 mt-12 md:mt-20">
              <h3 className="tw-heading-4 md:tw-heading-60  text-left md:text-center text-gradient-purple mb-0 md:w-5/10 md:mx-auto">
                Making AI trustworthy
              </h3>
              <aside className="container-10 mt-12 md:mt-32 md:flex md:items-center !pl-0	!pr-0">
                <div className="md:w-1/3">
                  <motion.h3 className="tw-heading-5 md:tw-heading-4">
                    Decentralized AI
                  </motion.h3>
                  <motion.p className="text-2xl mb-0 ">
                    <motion.span className="font-bold">DeAI </motion.span>
                    involves running AI training and inference as smart
                    contracts onchain, which addresses AI’s trust issues. Users
                    can verify the inputs to the models they utilize, reducing
                    the need to trust them blindly. However, AI training and
                    inference are highly resource-intensive, and the limited
                    computational capabilities of traditional blockchain
                    networks often fall short. In contrast, the advanced design
                    of the Internet Computer Protocol (ICP) successfully marries
                    the security of smart contracts with the robust
                    computational demands of AI. The following properties of ICP
                    make decentralized and trustworthy AI possible.
                  </motion.p>
                </div>
                <div className="md:w-2/3 relative mt-6  md:mt-64 md:mb-64">
                  <div className="pointer-events-none md:absolute w-full  md:-right-24 md:top-1/2  md:-translate-y-1/2">
                    <motion.div
                      className="absolute blob blob-white blob-md md:blob-lg blob-x-8 md:blob-x-9 blob-y-15 -z-1"
                      variants={transitions.fadeIn}
                    ></motion.div>
                    <motion.img
                      variants={transitions.fadeIn}
                      src="/img/decentralized-ai/trust-img-2.webp"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </aside>
              <aside className="mt-20 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-x-[4.5rem] gap-y-20">
                {trustCards.map((card, index) => (
                  <TrustCard key={index} {...card} />
                ))}
              </aside>
            </article>
          </section>
        </AnimateSpawn>
        <AnimateSpawn
          el={motion.section}
          variants={transitions.container}
          className="mt-20 md:mt-40"
        >
          <div className="container-10 mb-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <motion.h4
                className="tw-heading-4 md:tw-heading-60 mb-0 text-gradient"
                variants={transitions.item}
              >
                AI Models on ICP Today
              </motion.h4>
              <div>
                See a series of demos how the Internet Computer has the
                capability of running AI in a smart contract.
                <div className="mt-6">
                  <Link
                    className="link-primary link-with-icon"
                    href="https://www.youtube.com/watch?v=6qLvIXiCGcM&list=PLuhDt1vhGcrfWz1ZJrAmJBDS6aFADySwt"
                  >
                    Watch the playlist <LinkArrowUpRight></LinkArrowUpRight>
                  </Link>
                </div>
              </div>
            </div>

            <AnimateSpawn
              className="container-10 mt-12 mb-5 !p-0"
              el={motion.section}
              variants={transitions.container}
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <motion.div
                  variants={transitions.item}
                  className="col-span-1 md:col-span-2 mb-10"
                >
                  <VideoCard
                    image="/img/decentralized-ai/thumb-ai-video-thumb.webp"
                    title="AI smart contract on ICP"
                    label="Demo"
                    link={`https://www.youtube.com/watch?v=6qLvIXiCGcM`}
                    description="The world's first demonstration of AI inference running directly on the blockchain, presented by Dominic Williams"
                  />
                </motion.div>
              </div>
            </AnimateSpawn>
            <AnimateSpawn
              variants={transitions.item}
              className="flex flex-col md:flex-row gap-6 md:gap-24 items-center"
            >
              <div>
                <h3 className="tw-heading-5 md:tw-heading-4 mb-6">
                  Experience the demo version
                </h3>
                <p className="tw-paragraph md:tw-lead-sm mb-6 text-black/60">
                  Check out the open-source repo on GitHub and tryout the AI
                  demo by yourself.
                </p>
                <p className="flex flex-col md:flex-row">
                  <MotionLink
                    variants={transitions.item}
                    className="button-outline"
                    href="https://github.com/dfinity/examples/tree/master/rust/image-classification"
                  >
                    GO TO GITHUB REPO
                  </MotionLink>
                  <Link
                    href="/docs/current/developer-docs/ai/ai-on-chain"
                    className="mt-6 md:mt-0 link-primary link-with-icon items-center ml-0 md:ml-6"
                  >
                    More about DeAI in the Dev docs <LinkArrowRight />
                  </Link>
                </p>
              </div>
              <div className="w-full md:w-auto rounded-2xl">
                <CodeBlockString showLineNumbers language="rust">
                  {`// Setup:
let proto: ModelProto =     
ModelProto::decode(onnx_file)?;    
let model = tract_onnx::onnx()     
    .model_for_proto_model(&proto)?        
    .into_optimized()?
    .into_runnable()?;
  
// Inference:
let result = model.run(tvec!
(Tensor::from(tensor).into()))?; `}
                </CodeBlockString>
              </div>
            </AnimateSpawn>
          </div>
        </AnimateSpawn>
        <section className="container-10 mt-12 md:mt-44 md:mb-44">
          <AnimateSpawn
            className="mt-16 md:mt-24 mb-60 md:mb-24 relative"
            variants={transitions.container}
          >
            <motion.h4 className="tw-heading-4 md:tw-heading-60 text-gradient ">
              What the future holds
            </motion.h4>
            <motion.p className="mt-6 mb-4 md:mb-6 md:w-[55%]">
              Blockchain AI is still in its early stages. Currently, smart
              contracts can run small AI models like ImageNet for onchain image
              classification. Short-term improvements will decrease latency and
              support larger models, while the long-term goal is to enable smart
              contracts to perform AI computations on GPUs, allowing both
              training and inference of large models fully onchain.
            </motion.p>
            <motion.div className="">
              <motion.p className="tw-lead-sm mb-2 my-2 font-bold">
                Detailed roadmap coming soon.
              </motion.p>
            </motion.div>
            {/* <motion.div>
              <motion.p className="tw-lead-sm mb-2 my-2">Short-term</motion.p>
              <RoadMapList items={shortTermRoadmapItems} />
            </motion.div>
            <motion.div>
              <motion.p className="tw-lead-sm mb-2 mt-4">Long-term</motion.p>
              <RoadMapList items={longTermRoadmapItems} />
            </motion.div> */}
            <div
              className=" w-[120%] sm:w-7/10 md:w-[85%]
              absolute
              bottom-0
              
              translate-y-[110%] translate-x-[-10%] md:translate-y-[45%] md:translate-x-[55%]
              sm:translate-y-[80%] sm:translate-x-[20%]
              select-none 
            "
            >
              <img
                src="/img/what-is-the-ic/hero.svg"
                alt=""
                className="w-full max-w-none"
              />
            </div>
          </AnimateSpawn>
        </section>

        <AnimateSpawn
          className="container-12 pt-16 md:pt-40"
          el={motion.section}
          variants={transitions.container}
        >
          <div className="flex flex-col gap-6 !p-0 md:gap-5 mb-8 md:flex-row container-10">
            <motion.h2
              className="tw-heading-4 mb-0 md:tw-heading-60"
              variants={transitions.item}
            >
              News & media
            </motion.h2>
            <div className="md:flex-1 md:pt-1">
              <motion.p
                className="mb-0 mt-2 tw-paragraph md:tw-lead-sm"
                variants={transitions.item}
              >
                Get all the news from the Internet Computer ecosystem
              </motion.p>
              <MotionLink
                variants={transitions.item}
                href="/news"
                className="link-primary link-with-icon"
              >
                Explore more news <LinkArrowUpRight />
              </MotionLink>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              href="https://twitter.com/dominic_w/status/1750886289702834539"
              className="link-primary link-with-icon no-underline cursor-pointer hover:-translate-y-2 transition-transform text-black"
            >
              <NewsCard
                news={{
                  title: "AI models as smart contracts on a blockchain.",
                  dateHuman: "Jan 26, 2024 by @dominic_w",
                  press: "@dominic_w",
                  details: `#ICP says advanced AI models need to run as smart contracts on blockchain. How? Why? It's easiest to understand by example. Imagine an LLM (Large Language Model) AI that acts as a company oracle, which sits...`,
                  url: "https://twitter.com/dominic_w/status/1750886289702834539",
                  imageUrl: "/img/decentralized-ai/news-1.jpg",
                }}
                linkLabel="See the post"
              />
            </Link>

          </div>
        </AnimateSpawn>

        <LinkCardsSection
          className="mb-20 md:mb-30 mt-30 md:mt-40"
          title="Explore AI on BigFile"
          cards={[
            {
              label: "Apply to DeAI Grants",
              href: "https://dfinity.org/grants",
            },
            {
              label: "Start building DeAI",
              href: "/docs/current/developer-docs/ai/overview",
            },
            {
              label: "Chat with AI to learn more about ICP",
              href: "/",
            },
            {
              label: "Join the DeAI working group",
              href: "https://forum.dfinity.org/t/technical-working-group-deai/24621",
            },
          ]}
        />
      </main>
    </Layout>
  );
}

export default AIPage;
