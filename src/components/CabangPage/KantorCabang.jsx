import DetailCabang from "./DetailCabang"

const KantorCabang = () => {
    return (
        <section className="section-padding">
            <h2 className="text-2xl font-heading font-bold lg:mb-2
            xl:text-3xl
            ">Kantor Cabang</h2>

            <div className="grid grid-cols-1 gap-3
            lg:grid-cols-2
            ">
                <DetailCabang 
                nama="KC Pasar Anyarsari"
                alamat="Pasar Anyarsari Lt.2. Jl. Cargo,Ubung Kaja, Kec. Denpasar Utara, Kota Denpasar, Bali 80116"
                telepon="(0361) - 8442674"
                />

                <DetailCabang 
                nama="KC Pasar Abiantimbul"
                alamat="Pasar Abiantimbul Lt.2. Jl. Imam Bonjol, Pemecutan Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80119"
                telepon="(0361) – 489052"
                />

                <DetailCabang 
                nama="KC Pasar Kereneng"
                alamat="Pasar Kereneng Lt.2. Jl. Kamboja, Dangin Puri Kangin, Kec. Denpasar Utara, Kota Denpasar, Bali 80236"
                telepon="(0361) – 234142"
                />

                <DetailCabang 
                nama="KC Pasar Sembung / Mengwi"
                alamat="Pasar Mengwi Lt.2. Jl. Rama, Mengwi, Kec. Mengwi, Kabupaten Badung, Bali 80351"
                telepon="(0361) – 8311411"
                />

                <DetailCabang 
                nama="KC Pasar Sukawati"
                alamat="Pasar Sukawati Lt. 3. Jl. Raya Sukawati, Sukawati, Kec. Sukawati, Kabupaten Gianyar, Bali 80582"
                telepon="(0361) – 296616"
                />
                <DetailCabang 
                nama="KC Pasar Candikuning"
                alamat="Pasar Candikuning, Jl. Kebun Raya , Candikuning, Kec. Baturiti, Kabupaten Tabanan, Bali 82191"
                telepon="(0361) – 2033154"
                />
            </div>
        </section>
    )
}

export default KantorCabang