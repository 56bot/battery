import React from "react";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const SlideUp = ({ children }) => (
  <InView triggerOnce>
    {({ inView, ref, entry }) => (
      <span ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          animate={{
            y: inView ? 0 : 30,
            opacity: inView ? 1 : 0,
          }}
        >
          {children}
        </motion.div>
      </span>
    )}
  </InView>
);

export const ZoomOut = ({ children, attachToParent }) => (
  <InView triggerOnce>
    {({ inView, ref, entry }) => (
      <span ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          transition={{
            delay: 0.1,
            duration: 1,
          }}
          animate={{
            scale: inView ? 1.01 : 1.05,
            opacity: inView ? 1 : 0,
          }}
          className={`zoom-out-el-${attachToParent}`}
        >
          {children}
        </motion.div>

        <style jsx>{`
          span {
            position: static;
            display: block;
            height: 100%;
            width: 100%;
          }
        `}</style>

        <style jsx global>{`
          .zoom-out-el-true {
            position: absolute;
            height: 100%;
            width: 100%;
          }
        `}</style>
      </span>
    )}
  </InView>
);
