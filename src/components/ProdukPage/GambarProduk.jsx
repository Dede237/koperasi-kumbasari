"use client"

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import Image from "next/image"
import { useState } from "react"

const GambarProduk = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }

    return (
        <div className="flex items-center md:justify-end
                md:w-5/10
                lg:w-4/10
                relative aspect-3/2
                ">
            <button className="absolute left-1 z-1 w-10" onClick={prevImage}>
                <CaretLeftIcon className="w-full h-auto" size={20} weight="bold" />
            </button>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt="..."
                    width={400}
                    height={300}
                    className={`absolute aspect-3/2 w-full inset-0 object-cover rounded-2xl transition-opacity duration-700 ease-in-out
                    ${currentIndex === index ?
                            "opacity-100" :
                            "opacity-0"
                        }
                    `}
                    />
            ))}
            <button className="absolute right-1 z-1 w-10" onClick={nextImage}>
                <CaretRightIcon className="w-full h-auto" size={20} weight="bold" />
            </button>
        </div>
    )
}

export default GambarProduk