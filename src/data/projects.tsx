import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "ecocycle",
    category: "Green Tech / Management",
    title: "EcoCycle E-Waste Management",
    src: "/assets/projects-screenshots/ecocycle/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://e-waste-frontened.onrender.com",
    github: "https://github.com/Manish25725/GreenCircuit",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            EcoCycle - Comprehensive E-Waste Management System
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            EcoCycle is a full-stack platform designed to facilitate the collection, recycling, and disposal of electronic waste. It features a transparent and efficient multi-role system that connects residents, waste agencies, businesses, and administrators.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <SlideShow
            images={[`${BASE_PATH}/ecocycle/landing.png`]} 
          />

          <TypographyH3 className="my-4 mt-8">Multi-Role Architecture</TypographyH3>
          <p className="font-mono mb-2">
            The system supports distinct experiences for different users: Residents schedule pickups, Agencies manage service areas, Businesses track inventory, and Admins oversee system analytics, all secured using JWT and Role-Based Access Control.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ecocycle/dashboard.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Smart Booking & Rewards</TypographyH3>
          <p className="font-mono mb-2">
            Users can schedule e-waste pickups with real-time slot management. In return, a points-based rewards system incentivizes safe recycling. The points can be collected and redeemed for exclusive platform benefits.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ecocycle/booking.png`,
              `${BASE_PATH}/ecocycle/rewards.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Agency & Business Portals</TypographyH3>
          <p className="font-mono mb-2">
            Collection agencies are given a dedicated interface to control their service areas and glean analytics. Meanwhile, the Business portal enables companies to effortlessly track e-waste inventory and manage their recycling certificates natively.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ecocycle/agency.png`,
              `${BASE_PATH}/ecocycle/business.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Analytics Dashboard & Contact System</TypographyH3>
          <p className="font-mono mb-2">
            Users get access to comprehensive analytics customized to their role type, alongside an integrated messaging and support system providing continuous coverage.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ecocycle/analytics.png`,
              `${BASE_PATH}/ecocycle/contact.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Enterprise Security</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">Rate limiting on all API endpoints to prevent brute force & DoS attacks.</li>
            <li className="font-mono">Helmet.js security headers with XSS and clickjacking protection.</li>
            <li className="font-mono">Input validation & sanitization, preventing NoSQL injection and HTTP Parameter Pollution.</li>
            <li className="font-mono">Fully responsive, mobile-first design tailored to fit all modern devices seamlessly.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "playvibe",
    category: "Video Sharing & Streaming Platform",
    title: "PlayVibe",
    src: "/assets/projects-screenshots/playvibe/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.reactQuery,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    live: "https://video-sharing-app-rry8.onrender.com",
    github: "https://github.com/Manish25725/video-sharing-app",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            PlayVibe - The Ultimate Video Sharing Experience
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            PlayVibe is a comprehensive video sharing and streaming platform that empowers creators to share their content with the world. With a sleek, modern UI, users can easily discover new trends, upload videos, and engage with their favorite channels.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <SlideShow
            images={[`${BASE_PATH}/playvibe/landing.png`]} 
          />

          <TypographyH3 className="my-4 mt-8">Authentication</TypographyH3>
          <p className="font-mono mb-2">
            Seamless and secure user authentication system. Users can easily sign up to join the community or log in to their existing accounts to start sharing and interacting with content.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/playvibe/login.png`,
              `${BASE_PATH}/playvibe/signup.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Video Management & Playback</TypographyH3>
          <p className="font-mono mb-2">
            Secure video and thumbnail uploads via Cloudinary. Enjoy a seamless viewing experience with functionalities like Watch History, Watch Later, and nested comments with like/dislike interactions.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/playvibe/player.png`,
              `${BASE_PATH}/playvibe/comments.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Live Streaming & Real-time Chat</TypographyH3>
          <p className="font-mono mb-2">
            Real-time video broadcasting built with Node Media Server and HLS.js. Engage with your audience instantly using the Socket.io powered live-chat and viewer count tracking.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/playvibe/livestream.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Channel Profile & Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Manage your videos, view subscriber counts, and monitor platform statistics with an intuitive channel profile interface and a robust admin dashboard.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/playvibe/channel.png`,
              `${BASE_PATH}/playvibe/dashboard.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Social & Community</TypographyH3>
          <p className="font-mono mb-2">
            Build a following! Subscribe to channels, interact using community posts (tweets), create playlists, and stay updated with real-time notifications.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/playvibe/tweets.png`,
              `${BASE_PATH}/playvibe/playlists.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "ai-resume-builder",
    category: "AI & Productivity",
    title: "AI-Powered Resume Builder",
    src: "/assets/projects-screenshots/ai-resume-builder/landing.png",
    screenshots: ["landing.png"],
    live: "https://ai-powered-resume-builder-ibhl.onrender.com",
    github: "https://github.com/Manish25725/AI-Powered-Resume-Builder",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.aceternity,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Create professional-looking CVs in minutes
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            An AI-powered resume builder designed to help users create, customize, and export stunning resumes effortlessly. With rich forms for gathering personal info, experiences, and education, the application delegates manual formatting to dynamic templates.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <SlideShow
            images={[`${BASE_PATH}/ai-resume-builder/landing.png`]} 
          />

          <TypographyH3 className="my-4 mt-8">Rich Data Entry & Templates</TypographyH3>
          <p className="font-mono mb-2">
            Features an intuitive form layout for entering personal information, work experience, education, and projects. Users can instantly switch between multiple templates for different styles.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-resume-builder/editor.png`,
              `${BASE_PATH}/ai-resume-builder/templates.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Export & Live Sharing</TypographyH3>
          <p className="font-mono mb-2">
            Resumes don&apos;t just stay in the browser. Users can securely export them to a neat PDF format or generate a shareable live link that serves the resume directly to recruiters.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ai-resume-builder/export.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">AI Supercharged</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">Integrated with AI models (Gemini / OpenAI API) to suggest impactful keywords and phrasing for experiences and projects.</li>
            <li className="font-mono">Cloud-synced images and attachments backed by ImageKit.</li>
            <li className="font-mono">Secure user authentication mapping to their unique saved resumes.</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://Manishkhatri.vercel.app",
    github:"https://github.com/Manish25725/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;

