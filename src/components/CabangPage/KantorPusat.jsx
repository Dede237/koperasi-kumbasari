"use client"

import DetailCabang from "./DetailCabang"
import { MapPinIcon } from "@phosphor-icons/react"
import Image from "next/image"

const KantorPusat = () => {
    return (
        <section className="section-padding">
            
            <h2 className="text-2xl font-heading font-bold lg:mb-2
            xl:text-3xl
            ">Kantor Pusat</h2>
            <div className="flex flex-row
            lg:gap-5">
                <div className="bg-primary flex flex-col text-light rounded-xl w-full gap-2
                lg:w-7/10
                xl:w-8/10 xl:flex-row xl:justify-between xl:px-5 xl:items-center
                ">
                    <div className="flex flex-col gap-2">
                        <DetailCabang 
                        nama="Kantor Pusat Koperasi Konsumen Kumbasari Badung"
                        alamat="Pasar Kumbasari Lantai 2 Blok MN, Pemecutan, Kec. Denpasar Bar. Kota Denpasar, Bali 80231"
                        telepon="(0361) – 436912"
                        whatsapp="62 819-9542-0359"
                        />
                    </div>
                    <a className="flex flex-row gap-2 mb-2 px-2
                    xl:justify-center xl:items-center xl:flex-col
                    " href="https://maps.app.goo.gl/1VDn354eqCfwRVBG6"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <MapPinIcon className="min-w-10" size={25} />
                        <p>Lihat Lokasi</p>
                    </a>
                </div>
                <div className="hidden lg:flex lg:w-3/10 xl:w-2/10">
                        <Image className="aspect-3/2 object-cover rounded-xl" src="/images/kantor-pusat.jpeg" alt="..." width={500} height={200} />
                </div>
            </div>
        </section>
    )
}

export default KantorPusat