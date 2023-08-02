"use client";

import React, { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

const CrispChat = () => {
    useEffect(() => {
      Crisp.configure('0a49af4b-3f76-4510-a39b-d21e0807ae89');
    }, [])
    

  return null;
}

export default CrispChat;