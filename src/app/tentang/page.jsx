import Keanggotaan from "@/components/TentangPage/Keanggotaan"
import Tentang from "@/components/TentangPage/Tentang"
import VisiMisi from "@/components/TentangPage/VisiMisi"

export const metadata = {
  title: "Tentang",
};

const Page = () => {
    return (
        <>
            <Tentang/>

            <VisiMisi/>

            <Keanggotaan/>

            
        </>
    )
}

export default Page