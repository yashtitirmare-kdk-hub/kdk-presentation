import { motion } from "framer-motion";
import SlideWrapper, {
  SlideFooter,
  SectionTitle,
  BgOrbs,
  staggerContainer,
  staggerItem,
} from "../SlideWrapper";

import { magazines } from "../../data/magazineData";
import MagazineCard from "../MagazineCard";

export default function Slide09Magazine() {
  return (
    <SlideWrapper>
      <BgOrbs variant="cool" />

      <div className="relative z-10 flex flex-col h-screen px-6 sm:px-10 mt-4 md:px-16 pt-10 pb-16 overflow-hidden">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="mb-6 flex-shrink-0"
        >
          <motion.p variants={staggerItem} className="slide-tag">
            Slide 09
          </motion.p>

          <SectionTitle>Departmental Magazine</SectionTitle>

          <motion.p
            variants={staggerItem}
            className="text-white text-sm mt-1"
          >
            Explore our yearly magazine editions showcasing creativity & innovation
          </motion.p>
        </motion.div>

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto custom-scroll pr-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {magazines.map((mag, i) => (
              <motion.div
                key={mag.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
              >
                <MagazineCard mag={mag} />
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideWrapper>
  );
}