import Image from "next/image"

const HomeGaleriMobile = () => {
    return (
        <section className="section-padding xl:hidden">
            <h2 className=" font-heading text-center font-bold text-2xl mb-2">Galeri</h2>
            <div className=" grid grid-cols-1 gap-2
            md:grid-cols-2
            ">
                <Image className="aspect-3/1 object-cover rounded-xl w-full" src={"/images/galeri/galeri-1.jpeg"} alt="..." width={400} height={200} />
                <Image className="aspect-3/1 object-cover rounded-xl object-bottom w-full" src={"/images/galeri/galeri-8.jpeg"} alt="..." width={400} height={200} />
                <Image className="aspect-3/1 object-cover rounded-xl w-full" src={"/images/galeri/galeri-3.jpeg"} alt="..." width={400} height={200} />
                <Image className="aspect-3/1 object-cover rounded-xl w-full" src={"/images/galeri/galeri-7.jpeg"} alt="..." width={400} height={200} />
            </div>
        </section>
    )
}

export default HomeGaleriMobile