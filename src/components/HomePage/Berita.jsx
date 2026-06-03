import Image from "next/image"

const Berita = () => {
    return (
        <section className="flex flex-col justify-center items-center
      section-padding
      ">
            <h2 className="font-heading font-bold text-2xl mb-4
          md:text-2xl
          lg:text-4xl">Berita</h2>
            <Image className="
        w-full h-auto object-cover
        " src="/images/berita-1.png" alt="..." width={1500} height={500} />
        </section>
    )
}

export default Berita