import KantorCabang from "@/components/CabangPage/KantorCabang"
import KantorCabangPembantu from "@/components/CabangPage/KantorCabangPembantu"
import KantorPusat from "@/components/CabangPage/KantorPusat"

export const metadata = {
  title: "Cabang",
};

const Page = () => {
    return (
        <>
        <KantorPusat/>

        <KantorCabang />

        <KantorCabangPembantu/>
        </>
    )
}

export default Page