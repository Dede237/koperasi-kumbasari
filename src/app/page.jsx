import Berita from "@/components/HomePage/Berita"
import Dashboard from "@/components/HomePage/Dashboard/Dashboard"
import HeroSection from "@/components/HomePage/HeroSection"
import HomeGaleri from "@/components/HomePage/HomeGaleri"
import HomeGaleriMobile from "@/components/HomePage/HomeGaleriMobile"
import Mitra from "@/components/HomePage/Mitra"

const Page = () => {
  return (
    <>
      <HeroSection/>

      <Dashboard/>

      {/* <Berita/> */}

      <Mitra/>

      <HomeGaleriMobile/>

      <HomeGaleri/>
    </>
  )
}

export default Page