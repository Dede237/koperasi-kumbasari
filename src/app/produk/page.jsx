import SimpananPinjaman from "@/components/ProdukPage/SimpananPinjaman"
import PenyewaanKendaraan from "@/components/ProdukPage/PenyewaanKendaraan"
import PenyewaanAkomodasi from "@/components/ProdukPage/PenyewaanAkomodasi"
import ProdukLainnya from "@/components/ProdukPage/ProdukLainnya"

export const metadata = {
  title: "Produk",
};

const Page = () => {
    return (
        <>
        <SimpananPinjaman/>

        <PenyewaanKendaraan/>

        <PenyewaanAkomodasi />

        <ProdukLainnya/>
        </>
    )
}

export default Page