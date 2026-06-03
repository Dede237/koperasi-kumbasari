import Image from "next/image"
import Link from "next/link"

const SimpananPinjaman = () => {
    return (
        <section className="section-padding flex text-justify
        flex-col gap-3
        ">
            <div className="grid 
            gap-3
            lg:grid-cols-2 lg:gap-6
            xl:gap-15
            ">
                <div>
                    <h2 className="produk-title">Simpanan Sukarela</h2>
                    <p className="produk-content">Tabungan anggota koperasi yang bersifat tidak wajib, fleksibel, dan dapat disetor atau ditarik kapan saja tanpa terikat jangka waktu. Simpanan ini bertujuan memupuk dana cadangan anggota secara mandiri, dengan besaran sesuai kemampuan anggota, serta seringkali memberikan bagi hasil atau bunga.</p>
                </div>
                <div>
                    <h2 className="produk-title">Simpanan Berjangka</h2>
                    <p className="produk-content">Produk tabungan dengan kontrak jangka waktu tertentu (1-3 tahun) di mana dana hanya dapat dicairkan saat jatuh tempo. Simpanan ini menawarkan bunga lebih tinggi dari tabungan biasa, tidak bisa ditarik sewaktu-waktu, dan ideal untuk investasi aman.</p>
                </div>
                <div>
                    <h2 className="produk-title">Pinjaman Modal Usaha</h2>
                    <p className="produk-content">Fasilitas pendanaan kepada pelaku bisnis untuk membiayai operasional, ekspansi, atau kebutuhan investasi usaha. Dana ini wajib dikembalikan beserta bunga/margin dalam jangka waktu tertentu. Ini membantu UMKM/perusahaan tumbuh.</p>
                </div>
                <div>
                    <h2 className="produk-title">Pinjaman Konsumtif</h2>
                    <p className="produk-content">Kredit yang diberikan kepada individu untuk memenuhi kebutuhan pribadi, seperti membeli gadget, kendaraan, atau renovasi rumah, yang bersifat menghabiskan nilai guna barang dan tidak menghasilkan pendapatan tambahan. Dana ini umumnya dipakai untuk konsumsi pribadi, bukan modal bisnis. </p>
                </div>
            </div>
        </section>
    )
}

export default SimpananPinjaman