import findiziImage from "public/images/findizi.jpg";
import findiziImage1 from "public/images/findizi-image1.jpg";
import findiziImage2 from "public/images/findizi-image2.jpg";
import melt1 from "public/images/melt1.png";
import melt2 from "public/images/melt2.png";
import melt3 from "public/images/melt3.png";
import blind1 from "public/images/blind1.png";
import blind2 from "public/images/blind2.png";
import milowImage from "public/images/milow.png";
import emologImage from "public/images/emolog.png";
import blinkyImage from "public/images/blinky.jpg";
import lumiImage from "public/images/lhumi.png";
import zaphuntImage from "public/images/zaphunt.png";
import zaphuntImage2 from "public/images/zaphunt2.png";
import rocketVideoPlayerImage from "public/images/rocket-video-player.png";
export const products = [
  {
    href: "https://www.findizi.com",
    title: "Findizi",
    description:
      "An innovative platform connecting Mozambican talents to opportunities. From informal to formal sectors, find qualified professionals in various areas - from programmers and designers to electricians and builders.",
    thumbnail: findiziImage,
    images: [findiziImage, findiziImage1, findiziImage2],
    stack: ["Nextjs", "Tailwindcss", "TypeScript", "NodeJs", "Prisma", "SQL"],
    slug: "findizi",
    content: (
      <div>
        <p>
          Findizi is Mozambique&apos;s first comprehensive talent hub platform,
          connecting qualified professionals with people and companies who need
          their services. The platform democratizes access to work
          opportunities, including both formal and informal sector
          professionals.
        </p>
        <p>
          With an intuitive interface and focus on user experience, Findizi
          facilitates the search and hiring of talents across various fields,
          contributing to Mozambique&apos;s economic and professional
          development.
        </p>
      </div>
    ),
  },
  {
    href: "https://melt-system.vercel.app",
    title: "Melt",
    description: "Sistema de gestão de mesas e pedidos para restaurantes.",
    thumbnail: melt3,
    images: [melt1, melt2, melt3],
    stack: ["Nextjs", "Tailwindcss", "TypeScript", "NodeJs", "Prisma", "SQL"],
    slug: "melt",
    content: (
      <div>
        <p>
          A modern Point of Sale (POS) system built with Next.js 14, featuring a
          sleek interface and efficient workflow for restaurants and retail
          stores.
        </p>
      </div>
    ),
  },
  {
    href: "https://blindcode.vercel.app",
    title: "BlindCode",
    description: "Code In The Dark My Version.",
    thumbnail: blind1,
    images: [blind1, blind2],
    stack: ["Nextjs", "Tailwindcss", "TypeScript", "NodeJs", "Prisma", "SQL"],
    slug: "blindcode",
    content: (
      <div>
        <p>Code in The dark and see the results after</p>
      </div>
    ),
  },
  {
    href: "https://milow.vercel.app",
    title: "Milow",
    description:
      "A modern real estate platform for Mozambique, simplifying property search and negotiation with a superior digital experience.",
    thumbnail: milowImage,
    images: [milowImage],
    stack: ["Nextjs", "Tailwindcss", "TypeScript", "NodeJs", "Prisma", "SQL"],
    slug: "milow",
    content: (
      <div>
        <p>
          Milow revolutionizes the Mozambican real estate market by bringing a
          modern and efficient digital platform for property search and
          negotiation. With a focus on usability and transparency, we connect
          buyers, sellers, and landlords.
        </p>
      </div>
    ),
  },
  {
    href: "https://rocket-video-player.vercel.app",
    title: "Rocket Video Player",
    description:
      "A modern and efficient platform for finding products and services in Mozambique.",
    thumbnail: rocketVideoPlayerImage,
    images: [rocketVideoPlayerImage],
    stack: ["Nextjs", "Tailwindcss", "TypeScript"],
    slug: "rocket-video-player",
    content: (
      <div>
        <p>
          A modern video platform built with Next.js 14, React, and TailwindCSS.
        </p>
      </div>
    ),
  },
  {
    href: "https://emolog.vercel.app",
    title: "EMOLOG",
    description:
      "Your personal digital diary for recording thoughts, emotions, and daily experiences in a safe and reflective environment.",
    thumbnail: emologImage,
    images: [emologImage],
    stack: ["Nextjs", "Tailwindcss", "TypeScript"],
    slug: "emolog",
    content: (
      <div>
        <p>
          EMOLOG is a secure digital space to express your thoughts and
          emotions. The platform offers a unique journaling experience, allowing
          users to document their personal journeys and develop greater
          self-awareness.
        </p>
      </div>
    ),
  },
  {
    href: "https://blinky-sand.vercel.app",
    title: "Blinky",
    description:
      "Intelligent project and finance manager that simplifies control of your activities and financial resources.",
    thumbnail: blinkyImage,
    images: [blinkyImage],
    stack: ["Nextjs", "Tailwindcss", "TypeScript"],
    slug: "blinky",
    content: (
      <div>
        <p>
          Blinky is a comprehensive tool for project and finance management,
          offering a clear and organized view of your activities and resources.
          With an intuitive interface and powerful features, it helps keep your
          projects and finances under control.
        </p>
      </div>
    ),
  },
  {
    href: "https://zaphunt.vercel.app",
    title: "Zaphunt",
    description:
      "A modern and efficient platform for finding products and services in Mozambique.",
    thumbnail: zaphuntImage,
    images: [zaphuntImage, zaphuntImage2],
    stack: ["Nextjs", "Tailwindcss", "TypeScript"],
    slug: "zaphunt",
    content: (
      <div>
        <p>
          Zaphunt is a modern and efficient platform for finding products and
          services in Mozambique. With a focus on usability and transparency, we
          connect buyers, sellers, and landlords.
        </p>
      </div>
    ),
  },
  {
    href: "https://lhumi.vercel.app",
    title: "Lumi",
    description:
      "Modern event management platform that simplifies the organization, promotion, and management of memorable experiences.",
    thumbnail: lumiImage,
    images: [lumiImage],
    stack: ["Nextjs", "Tailwindcss", "TypeScript"],
    slug: "lumi",
    content: (
      <div>
        <p>
          Lumi is a complete event management platform, facilitating the entire
          process from conception to execution. With modern organization,
          promotion, and management features, it makes event creation a more
          efficient and enjoyable experience.
        </p>
      </div>
    ),
  },
];
