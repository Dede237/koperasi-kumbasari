import NumberedList from "@/components/TentangPage/NumberedList"
import Image from "next/image"

const VisiMisi = () => {
    return (
        <section className="section-padding flex
        flex-col gap-5
        lg:flex-row lg:relative
        ">
            <div className="w-auto lg:w-7/10 xl:w-6/10">
                <h2 className="text-center font-heading
                font-bold text-xl
                md:text-2xl
                ">Visi</h2>
                <p className="bg-primary text-light rounded-xl text-justify
                p-5 mt-2
                lg:text-lg
                xl:text-xl
                ">Dengan tetap mempertahankan & memberdayakan padagang pasar tradisional untuk mampu bersaing dalam era global guna terciptanya kesejahtraan bersama masyarakat / anggota.</p>
                
                <h2 className="text-center font-heading
                font-bold text-xl mt-2
                md:text-2xl
                ">Misi</h2>
                <div className="flex flex-col bg-primary text-light rounded-xl text-justify
                p-5 mt-2 gap-2
                lg:text-lg
                xl:text-xl
                ">
                    <NumberedList number="1" content="Pedagang pasar tradisional merupakan tulang punggung perekonomian bangsa."/>
                    <NumberedList number="2" content="Menciptakan sdm karyawan berkualitas dan sejahtera."/>
                    <NumberedList number="3" content="Menciptakan manajemen yang berkualitas dan beriman."/>
                    <NumberedList number="4" content="Menciptakan pelayanan berbasis IT."/>
                    <NumberedList number="5" content="Meningkatkan kesadaran masyarakat untuk berkoperasi."/>
                    <NumberedList number="6" content="Mewujudkan kesejahtraan bersama."/>
                    
                </div>
            </div>
            
            <div className="hidden lg:flex lg:w-3/10 xl:w-4/10">
                <Image className="rounded-xl aspect-3/2 object-cover w-full
                " src="/images/hero.jpeg" alt="..." width={500} height={300}/>
            </div>
        </section>
    )
}

export default VisiMisi