import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PerspectiveCarousel from "./ui/perspective-carousel";
import { IMAGES } from "@/data/portfolio";

const WorkExperience = () => {
  return (
    <section
      id="experience"
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
            slideWidth="auto"
            className="
              h-[320px]
              sm:h-[420px]
              md:h-[520px]
              lg:h-[560px]
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
