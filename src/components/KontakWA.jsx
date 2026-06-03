"use client"

import { WhatsappLogoIcon } from "@phosphor-icons/react"

const KontakWA = () => {
    return (
        <a className="fixed flex gap-1 items-center rounded-2xl bottom-4 right-4 bg-accent font-heading
        p-1 px-2 text-sm 
        xl:text-lg xl:px-3 xl:right-6 xl:bottom-6
        "
        href="https://wa.me/6281995420359" 
        target="_blank"
        rel="noopener noreferrer"
        >
            <WhatsappLogoIcon size={25}/>
            Kontak Kami</a>
    )
}

export default KontakWA