import Image from "next/image"
import Link from "next/link"

const SmallGaleri = () => {
    const images = [
        "galeri-1",
        "galeri-2",
        "galeri-3",
        "galeri-4",
        "galeri-5",
    ]

    return (
        <section className="flex flex-col
        section-padding
        ">
            <div className="flex flex-row justify-between items-center mb-4"> 
                <h2 className="font-heading font-bold text-2xl">Galeri</h2>
                <Link className="font-heading text-sm font-semibold" href="/">Lihat Lainnya...</Link>
            </div>

            <div className="w-full
            columns-2 
            md:columns-3
            xl:columns-4
            bg-sky-100
            ">
                {images.map((image, index) => (
                    <Image 
                    key={index}
                    src={`/images/galeri/${image}.jpeg`}
                    alt={`Gambar ${index + 1}`}
                    width={300}
                    height={100}
                    className="w-full h-auto  mb-2
                    aspect-3/2 object-cover overflow-hidden rounded-2xl object-center
                    
                    "
                    />
                ))}
                
            </div>
        </section>
    )
}

export default SmallGaleri