import NumberedList from "@/components/TentangPage/NumberedList"
import Image from "next/image"

const Keanggotaan = () => {
    return (
        <section id="keanggotaan" className="section-padding flex
        flex-col
        
        ">
            <h2 className="font-heading font-bold text-xl text-center
            md:text-2xl
            lg:text-3xl
            ">Keanggotaan</h2>
            <div className="flex flex-row gap-5 
            lg:relative
            
            ">
                <div className="flex flex-col text-justify 
                w-auto 
                lg:w-7/10
                xl:w-6/10 xl:pr-30
                ">
                    <h3 className="font-bold text-lg mt-2 md:text-xl">Syarat Anggota</h3>
                    <div className="text-base md:text-lg">
                    <NumberedList number="1" content="Foto Copy KTP"/>
                    <NumberedList number="2" content="Buka Rekening Tabungan Koperasi"/>
                    <NumberedList number="3" content="Pas Foto 2x2"/>
                    </div>
                    <h3 className="font-bold text-lg mt-2 md:text-xl">Keuntungan Anggota</h3>
                    <div className="text-base md:text-lg">
                    <NumberedList number="1" content="Mendapatkan Santunan Suka Duka untuk anggota dan atau anak anggota melaksanakan pernikahan, dan untuk anggota meninggal dunia diberikan berupa uang tunai Rp.400.000 dan karangan bunga."/>
                    <NumberedList number="2" content="Setiap Rapat Anggota Tahunan (RAT) Mendapatkan perangsang anggota berupa sembako atau barang lainnya."/>
                    </div>
                </div>
                <div className="hidden 
                lg:flex lg:flex-col lg:w-3/10 lg:gap-4
                xl:w-4/10
                ">
                    <Image className="w-full rounded-xl xl:aspect-3/1 object-cover" src="/images/keanggotaan-1.jpeg" alt="..." width={400} height={200}/>
                    <Image className="w-full rounded-xl xl:aspect-3/1 object-cover" src="/images/keanggotaan-2.jpeg" alt="..." width={400} height={200}/>
                </div>
            </div>
        </section>
    )
}

export default Keanggotaan