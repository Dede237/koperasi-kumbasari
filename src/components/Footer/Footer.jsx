"use client"

import { AtIcon, MapPinIcon, PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="section-padding py-5 min-h-65 md:min-h-50 w-full bg-primary text-light flex">
            <div className="flex hidden lg:flex lg:w-1/5">
                <Image className="flex h-2/3 w-auto" src={"/images/logo.png"} alt="..." height={400} width={400} />
            </div>

            <div className="flex flex-col w-1/2 lg:w-2/5">
                <h3 className="font-heading text-base font-semibold
                lg:text-xl
                ">Tentang Kami</h3>
                <Link href={"/tentang"} className="text-[12px] font-light
                lg:text-base font-normal
                ">Profil Koperasi Kumbasari</Link>
            </div>
            <div className="flex flex-col w-1/2 lg:w-2/5">
                <h3 className="font-heading text-base font-semibold
                lg:text-xl
                ">Kontak Kami</h3>
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                        <MapPinIcon className="shrink-0" size={20} />
                        <p className="text-[12px] font-light lg:text-base font-normal">Lantai II Pasar Kumbasari Blok M-N Jl Gajah Mada Denpasar, Bali 80231</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <PhoneIcon className="shrink-0" size={20} />
                        <p className="text-[12px] font-light lg:text-base font-normal">(0361) - 436912</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <WhatsappLogoIcon className="shrink-0" size={20} />
                        <p className="text-[12px] font-light lg:text-base font-normal">62 819-9542-0359</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <AtIcon className="shrink-0" size={20} />
                        <p className="text-[12px] font-light break-all lg:text-base font-normal">kspkumbasaribadung@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer