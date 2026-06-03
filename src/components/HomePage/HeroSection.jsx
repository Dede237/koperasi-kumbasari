import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse justify-between
      section-padding
      gap-2 md:gap-4 lg:gap-20
      
      ">
            <div>
                <Image className="rounded-xl h-auto
        md:min-w-80 
        xl:min-w-125
        "
                    src="/images/hero.jpeg" alt="..." width={600} height={500} />
            </div>

            <div className="lg:relative
      ">
                <h2 className="text-heading text-2xl font-heading font-bold mb-2 lg:text-3xl xl:text-5xl xl:mb-4">Memberdayakan Pedagang, Mewujudkan Kesejahteraan Bersama</h2>
                <p className="text-base mb-4 lg:text-xl">Koperasi hadir untuk mendukung pedagang pasar tradisional agar berkembang mandiri dan mampu bersaing di era modern</p>
                <Link className="xl:absolute xl:bottom-1 xl:left-1 bg-accent rounded-3xl p-2 px-6 font-semibold lg:text-xl" href="/tentang#keanggotaan">Bergabung</Link>
            </div>
        </section>
    )
}

export default HeroSection