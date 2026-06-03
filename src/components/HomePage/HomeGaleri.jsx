import Image from "next/image"

const HomeGaleri = () => {
    return (
        <section className="section-padding hidden xl:flex flex-col">
            <h2 className="font-heading font-bold text-4xl text-center">Galeri</h2>
            <div className="flex justiy-between lg:h-110 xl:h-180 w-full gap-4">
                <div className="flex flex-col gap-4 h-full w-1/3 justify-between">
                    <Image className="aspect-2/1 w-full object-cover rounded-xl" src={"/images/galeri/galeri-1.jpeg"} alt="..." width={400} height={200} />
                    <Image className="aspect-2/1 w-full object-cover rounded-xl" src={"/images/galeri/galeri-2.jpeg"} alt="..." width={400} height={200} />
                    <Image className="aspect-2/1 w-full object-cover rounded-xl" src={"/images/galeri/galeri-3.jpeg"} alt="..." width={400} height={200} />
                </div>
                <div className="flex flex-col w-2/3 gap-4 h-full">
                    <div className="flex flex-row gap-4 w-full h-3/4">
                        <div className="w-1/3 h-full">
                            <Image className="aspect-1/3 object-cover rounded-xl w-full h-full" src={"/images/galeri/galeri-4.jpeg"} alt="..." width={400} height={200} />
                        </div>
                        <div className="flex flex-col gap-4 w-2/3">
                            <div className="flex flex-row h-1/2 w-full gap-4">
                            <div className="flex w-1/4 h-full">
                                <Image className="aspect-1/4 object-cover rounded-xl w-full h-full" src={"/images/galeri/galeri-5.jpeg"} alt="..." width={400} height={200} />
                            </div>
                            <div className="flex w-3/4 h-full">
                                <Image className="aspect-auto object-cover rounded-xl w-full h-full" src={"/images/galeri/galeri-6.jpeg"} alt="..." width={400} height={200} />
                            </div>
                            </div>
                            <div className="flex h-1/2 w-full">
                                <Image className="aspect-3/1 object-cover rounded-xl w-full" src={"/images/galeri/galeri-7.jpeg"} alt="..." width={400} height={200} />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full gap-4 h-1/4 justify-between">
                    <div>
                        <Image className="aspect-3/1 object-cover rounded-xl w-full h-full object-bottom" src={"/images/galeri/galeri-8.jpeg"} alt="..." width={400} height={200} />
                    </div>
                    <div>
                        <Image className="aspect-3/1 object-cover rounded-xl w-full h-full" src={"/images/galeri/galeri-9.jpeg"} alt="..." width={400} height={200} />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeGaleri