import DetailCabang from "./DetailCabang"

const KantorCabangPembantu = () => {
    return (
        <section className="section-padding">
            <h2 className="text-2xl font-heading font-bold lg:mb-2
            xl:text-3xl
            ">Kantor Cabang Pembantu</h2>

            <div className="grid grid-cols-1 gap-3
            lg:grid-cols-2
            ">
                <DetailCabang 
                nama="KCP Pasar Satrya"
                alamat="Pasar Satrya Lt. 4. Jl. Abimayu, Dangin Puri Kaja, Dangin Puri Kauh, Kec. Denpasar Utara, Kota Denpasar, Bali 80231"
                telepon="(0361) - 8442674"
                />
                <DetailCabang 
                nama="KCP Pasar Sanglah"
                alamat="Pasar Sanglah Lt. 2. Jl. Diponegoro, Dauh Puri Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80113"
                telepon="(0361) – 2096092"
                />
                <DetailCabang 
                nama="KCP Pasar Petang"
                alamat="Pasar Petang, Jl. I.GST. NGR Rai, Petang, Kec. Petang, Kabupaten Badung, Bali 80353"
                telepon=""
                />
                <DetailCabang 
                nama="KCP Pasar Mambal"
                alamat="Pasar Mambal Jl. Raya Mambal Abiansemal, Mambal, Kec. Abiansemal, Kabupaten Badung, Bali 80352"
                telepon=""
                />
                <DetailCabang 
                nama="KCP Pasar Kapal"
                alamat="Pasar adat Kapal,Jl. Raya Kapal, Kapal, Kec. Mengwi, Kabupaten Badung, Bali 80351"
                telepon="(0361) – 4426712"
                />
                <DetailCabang 
                nama="KCP Pasar Kedonganan"
                alamat="Pasar Ikan Kedonganan Jl. Pantai Kedonganan, Kedonganan, Kec. Kuta, Kabupaten Badung, Bali"
                telepon=""
                />
            </div>
        </section>
    )
}

export default KantorCabangPembantu