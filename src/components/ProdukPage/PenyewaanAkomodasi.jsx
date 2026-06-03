"use client"

import { WhatsappLogoIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import GambarProduk from "./GambarProduk"

const PenyewaanAkomodasi = () => {
    const images = [
        "/images/kost/1.jpeg",
        "/images/kost/2.jpeg",
        "/images/kost/3.jpeg",
        "/images/kost/4.jpeg",
        "/images/kost/5.jpeg",
        "/images/kost/6.jpeg",
        "/images/kost/7.jpeg",
        "/images/kost/8.jpeg"
    ]

    return (
        <section className="section-padding text-justify">
            <h2 className="produk-title mb-2
            md:hidden
            ">Penyewaan Akomodasi</h2>
            <div className="flex flex-col-reverse gap-2
            md:flex-row md:gap-5 
            ">
                <div className="flex flex-col gap-2
                md:w-5/10 
                lg:w-6/10
                ">
                    <h2 className="produk-title
                    hidden
                    md:flex
                    ">Penyewaan Akomodasi</h2>
                    <p className="produk-content">Pelayanan penginapan sementara bagi pengunjung atau pelancong yang dilengkapi fasilitas penunjang, yang dikelola secara komersial. Ini mencakup, guest house, villa, rumah kost dan tempat menginap jangka pendek lainnya. Penyediaan ini krusial dalam pariwisata untuk mendukung mobilitas dan kenyamanan.</p>
                    <a className="flex gap-2 items-center p-2 px-6 text-dark bg-accent w-fit rounded-4xl font-bold"
                        href="https://wa.me/6287761601080"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsappLogoIcon size={30} />
                        Pesan Sekarang
                    </a>
                </div>
                <GambarProduk images={images} />
            </div>
        </section>
    )
}

export default PenyewaanAkomodasi