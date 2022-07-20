import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 0 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const Layout = ({ children }: Props): JSX.Element => (
  <div>
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", delay: 0.3 }}
    >
      {children}
    </motion.main>
  </div>
);

export default Layout;
