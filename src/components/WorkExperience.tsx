import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PerspectiveCarousel from "./ui/perspective-carousel";

const IMAGES = [
  {
    src: "/works/0.png",
    alt: "login page",
    title: "Login Page",
  },
  {
    src: "/works/1.jpeg",
    alt: "letters page",
    title: "Letters page",
  },
  {
    src: "/works/2.png",
    alt: "letters dashboard",
    title: "Letters Dashboard",
  },
  {
    src: "/works/8.png",
    alt: "letters dashboard",
    title: "Letters Dashboard",
  },
  {
    src: "/works/3.png",
    alt: "letters form",
    title: "Letters Form",
  },
  {
    src: "/works/4.png",
    alt: "letter details",
    title: "Letter Details",
  },
  {
    src: "/works/5.png",
    alt: "letter parafs",
    title: "Letter Parafs",
  },
  {
    src: "/works/6.png",
    alt: "letter logs",
    title: "Letter Logs",
  },
  {
    src: "/works/7.png",
    alt: "letter stamp",
    title: "Letter Stamp",
  },
  {
    src: "/works/9.png",
    alt: "ERP dashboard",
    title: "ERP Dashboard",
  },
  {
    src: "/works/10.png",
    alt: "Wellness dashboard",
    title: "Wellness Dashboard",
  },
  {
    src: "/works/11.png",
    alt: "Wellness landing",
    title: "Wellness Landing",
  },
  {
    src: "/works/12.png",
    alt: "Wellness landing",
    title: "Wellness Landing",
  },
  {
    src: "/works/13.png",
    alt: "Lawyer landing",
    title: "Lawyer Landing",
  },
  {
    src: "/works/14.png",
    alt: "Lawyer landing",
    title: "Lawyer Landing",
  },
  {
    src: "/works/15.png",
    alt: "Lawyer landing",
    title: "Lawyer Landing",
  },
];
const WorkExperience = () => {
  return (
    <section
      id="work"
      className="bg-[#ececec] px-6 py-20 text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 md:px-10 md:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Interfaces I've designed and built."
          className="mb-0"
        />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4"
        >
          <PerspectiveCarousel
            items={IMAGES}
            defaultActiveIndex={1}
            slideWidth={710}
            className="h-[560px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
