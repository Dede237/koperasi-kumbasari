"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ListIcon, XIcon } from "@phosphor-icons/react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-primary text-light h-20 flex justify-between items-center p2
        navbar-padding
        font-heading 
        relative
        ">
            <Link href="/" className="flex gap-4 items-center">
                <Image className="max-h-10 w-auto" src="/images/logo.png" alt="..." width={60} height={60} />
                <h2 className="text-base md:text-2xl xl:text-3xl font-bold">Koperasi Kumbasari</h2>
            </Link>

            <div className="flex gap-5 hidden lg:flex text-lg xl:text-xl font-medium">
                <Link className="hover:underline" href="/">Beranda</Link>
                <Link className="hover:underline" href="/tentang">Tentang</Link>
                <Link className="hover:underline" href="/produk">Produk</Link>
                <Link className="hover:underline" href="/cabang">Cabang</Link>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden ">
                { isOpen ? 
                (<XIcon size={32} color="var(--color-background)"/>) :
                <ListIcon size={32} color="var(--color-background)"/>
                }
            </button>

            {isOpen && (
                <div className="absolute w-full top-20 left-0 pb-6 bg-primary z-50
            flex flex-col gap-4 pt-2
            px-6
            md:px-15
            ">
                    <Link onClick={() => setIsOpen(!isOpen)} href="/">Beranda</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} href="/tentang">Tentang</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} href="/produk">Produk</Link>
                    <Link onClick={() => setIsOpen(!isOpen)} href="/cabang">Cabang</Link>
                </div>
            )}
        </header>
    )
}

export default Navbar