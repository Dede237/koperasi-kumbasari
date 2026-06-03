import Image from "next/image"

const Tentang = () => {
    return (
        <section className="section-padding flex flex-col
        
        ">
            <Image className="aspect-6/3 object-cover w-full rounded-2xl" src="/images/tentang.jpeg" alt="..." width={3000} height={2000}/>
            <h2 className="text-center font-heading
            mt-2 font-bold text-xl
            md:text-3xl
            lg:text-4xl lg:mt-5
            ">Tentang Koperasi Kumbasari</h2>
            <p className="text-justify
            px-2
            md:text-lg md:mt-2
            lg:text-xl lg:mt-5
            ">Koperasi Konsumen Kumbasari Badung didirikan pada 31 Januari 1981 dengan jumlah anggota awal sebanyak 28 orang dan memulai usaha simpan pinjam dengan modal awal sebesar Rp 400.000. Sejak awal berdiri, koperasi ini terus tumbuh dan berkembang pesat, baik dari segi manajemen, usaha, maupun permodalan. Dengan berlandaskan azas kekeluargaan dan keterbukaan pengurus, koperasi berhasil membangun kepercayaan, dukungan, serta partisipasi aktif dari para anggotanya. Seiring dengan perkembangan tersebut, pada tahun 1983 pengurus mulai mengangkat manajer sebagai pengelola operasional koperasi. Memasuki era modern, sejak tahun 2000 koperasi telah menerapkan sistem administrasi organisasi dan usaha berbasis komputer sebagai bentuk adaptasi terhadap perkembangan ilmu pengetahuan dan teknologi.</p>
        </section>
    )
}

export default Tentang