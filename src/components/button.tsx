"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import classnames from "classnames";

interface props {
  children: ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button" | "div";
  href?: string;
  onClick?: () => void | null;
  disabled?: boolean;
}

const defaultAttributes = "cursor-pointer appearance-none focus:outline-none";

export const Button = ({
  children,
  className = "",
  type = "button",
  href = "",
  onClick = null,
  disabled = false,
}: props) => {
  const router = useRouter();

  return type === "div" ? (
    href == "" ? (
      <motion.div
        className={classnames(className, defaultAttributes)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    ) : (
      <motion.div
        onClick={() => {
          !disabled && router.push(href);
        }}
        className={classnames(
          className,
          defaultAttributes,
          disabled && "cursor-not-allowed"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    )
  ) : onClick === null && type === "button" ? (
    <motion.button
      onClick={() => {
        router.push(href);
      }}
      type={type}
      className={classnames(className, defaultAttributes)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  ) : href == "" ? (
    <motion.button
      type={type}
      className={classnames(className, defaultAttributes)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  ) : (
    <motion.button
      onClick={() => {
        router.push(href);
      }}
      type={type}
      className={classnames(className, defaultAttributes)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};
