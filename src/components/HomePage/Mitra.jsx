import Image from "next/image"

const Mitra = () => {
    return (
        <section className="flex flex-col justify-center items-center
      section-padding
      ">
            <h2 className=" flex font-heading font-bold text-2xl mb-4
          md:text-2xl
          lg:text-4xl">Mitra</h2>
            <div className="flex flex-wrap justify-center gap-10 lg:gap-15 w-full items-center">
                <Image className="h-10 lg:h-20 w-auto" src={"/images/mitra/Logo_LPDB_Koperasi_(2025).png"} alt="..." width={300} height={300} />
                <Image className="h-10 lg:h-20 w-auto" src={"/images/mitra/Bank_Mandiri_logo.png"} alt="..." width={300} height={300} />
                <Image className="h-20 lg:h-30 w-auto" src={"/images/mitra/Bank_BPD_Bali.png"} alt="..." width={300} height={300} />
            </div>
        </section>
    )
}

export default Mitra