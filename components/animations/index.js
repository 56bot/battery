import React from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const SlideUp = ({ children }) => (
  <InView triggerOnce>
    {({ inView, ref, entry }) => (
      <span ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          transition={{
            type: "spring",
            mass: 0.8,
            damping: 100,
            delay: 0.2,
            stiffness: 200,
          }}
          animate={{
            y: inView ? 0 : 50,
            opacity: inView ? 1 : 0,
          }}
        >
          {children}
        </motion.div>
      </span>
    )}
  </InView>
);

export const ZoomOut = ({ children }) => (
  <InView triggerOnce>
    {({ inView, ref, entry }) => (
      <span ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 1.2, y: "4%" }}
          transition={{
            type: "spring",
            mass: 0.8,
            damping: 100,
            delay: 0.4,
            duration: 0.6,
            stiffness: 100,
          }}
          animate={{
            scale: inView ? 1.1 : 1.2,
            y: inView ? "0%" : "4%",
            opacity: inView ? 1 : 0,
          }}
        >
          {children}
        </motion.div>

        <style jsx>{`
          span {
            position: static;
            display: block;
            height: 100;
            width: 100%;
          }
        `}</style>
      </span>
    )}
  </InView>
);
