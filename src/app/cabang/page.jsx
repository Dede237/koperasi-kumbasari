import KantorCabang from "@/components/CabangPage/KantorCabang"
import KantorCabangPembantu from "@/components/CabangPage/KantorCabangPembantu"
import KantorPusat from "@/components/CabangPage/KantorPusat"

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