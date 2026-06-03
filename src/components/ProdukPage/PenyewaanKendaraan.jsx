"use client"

import { WhatsappLogoIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import GambarProduk from "./GambarProduk"

const PenyewaanKendaraan = () => {
    const images = [
        "/images/kendaraan/1.jpeg",
        "/images/kendaraan/2.jpeg",
        "/images/kendaraan/3.jpeg"
    ]

    return (
        <section className="section-padding text-justify">
            <h2 className="produk-title mb-2
            md:hidden
            ">Penyewaan Kendaraan</h2>
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
                    ">Penyewaan Kendaraan</h2>
                    <p className="produk-content">Layanan jasa pemindahan hak guna atau pemanfaatan kendaraan mobil atau angkutan pariwisata dalam jangka waktu tertentu dengan imbalan biaya sewa, tanpa memindahkan hak kepemilikan. Ini mencakup opsi lepas kunci (mandiri) atau dengan sopir, serta sewa harian, mingguan, hingga bulanan.</p>
                    <Link className="flex gap-2 items-center p-2 px-6 text-dark bg-accent w-fit rounded-4xl font-bold" href="/">
                    <WhatsappLogoIcon size={30} />
                    Pesan Sekarang
                    </Link>
                </div>
                <GambarProduk images={images}/>
            </div>
        </section>
    )
}

export default PenyewaanKendaraan