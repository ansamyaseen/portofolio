import React, { useState } from 'react'
import { motion } from 'framer-motion'

function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    const email = "ansamyaseen80@gmail.com";
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <motion.button
            onClick={copyToClipboard}
            whileHover={{ y:-5 }}
            whileTap={{ scale :1.05 }}
            className="
            relative px-1 py-4 text-sm text-center 
            rounded-full text-stone-50 bg-violet-950 w-[12rem] h-[3rem]
            cursor-pointer overflow-hidden"
        >
            <p className="flex items-center justify-center gap-2">
                {copied ? (
                    <>
                        <ion-icon name="checkmark-done-outline"></ion-icon>
                        Copied!
                    </>
                ) : (
                    <>
                        <ion-icon name="copy-outline"></ion-icon>
                        Copy Email Address
                    </>
                )}
            </p>
        </motion.button>
    );
}

export default CopyEmailButton