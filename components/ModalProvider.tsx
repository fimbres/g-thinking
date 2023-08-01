"use client";

import { useEffect, useState } from "react";
import ProModal from "./ProModal";

export const ModalProvider = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    
      return () => {
        setMounted(false);
      }
    }, []);
    
    if(!mounted) {
        return null;
    }

    return (
        <>
            <ProModal />
        </>
    );
}