"use client"

import { BuildingOfficeIcon, CalendarBlankIcon, SquaresFourIcon, UsersIcon } from "@phosphor-icons/react"
import DashboardCard from "./DashboardCard"

const Dashboard = () => {
    return (
        <section className="flex flex-col
      section-padding 
      md:flex-row md:items-center md:gap-4
      xl:gap-35
      ">
            <h2 className="font-heading font-bold text-2xl
          md:text-2xl
          lg:text-4xl
          ">Dashboard</h2>
            <div className="bg-primary text-light rounded-lg box-border
        grid grid-cols-2 gap-4
        py-5 px-6
        md:w-full md:grid-cols-4
        xl:px-20
        ">
                <DashboardCard
                    title="Anggota"
                    text="11K"
                    icon={UsersIcon}
                />
                <DashboardCard
                    title="Cabang"
                    text="12"
                    icon={BuildingOfficeIcon}
                />
                <DashboardCard
                    title="Tahun Berdiri"
                    text="1981"
                    icon={CalendarBlankIcon}
                />
                <DashboardCard
                    title="Jumlah Produk"
                    text="7"
                    icon={SquaresFourIcon}
                />
            </div>
        </section>
    )
}

export default Dashboard