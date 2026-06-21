import { motion } from "motion/react";

export default function LoadingCircleSpinner() {
    return (
        <>
            <motion.div
                className="image-spinner"
                animate={{ transform: "rotate(360deg)" }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <style>
                {`
                .image-spinner {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 3px solid rgba(0, 0, 0, 0.1); 
                    border-top-color: var(--color-primary);
                    will-change: transform;
                }
                `}
            </style>
        </>
    )
}