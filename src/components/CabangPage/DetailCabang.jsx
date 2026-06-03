"use client"

import { MapPinIcon, PhoneIcon, PrinterIcon, WhatsappLogoIcon } from "@phosphor-icons/react"

const DetailCabang = ({
    nama,
    alamat,
    telepon,
    whatsapp,
}) => {
    return (
        <div className="flex flex-col gap-2 bg-primary rounded-xl text-light p-2 xl:p-4">
            <h3 className="font-bold text-lg 
            xl:text-2xl
            ">{nama}</h3>

            <div className="flex flex-row gap-2 items-center ">
                <MapPinIcon className="min-w-10" size={25} />
                <p>{alamat}</p>
            </div>

            {telepon &&
                <div className="flex flex-row gap-2 items-center">
                    <PhoneIcon className="min-w-10" size={25} />
                    <p>{telepon}</p>
                </div>
            }

            { whatsapp &&
            <div className="flex flex-row gap-2 items-center">
                <WhatsappLogoIcon className="min-w-10" size={25} />
                <p>{whatsapp}</p>
            </div>
            }


        </div>
    )
}

export default DetailCabang