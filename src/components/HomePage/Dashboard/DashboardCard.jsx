"use client"

const DashboardCard = (
    {title,
    text,
    icon: Icon,}
) => {
    return (
        <div className="flex gap-3 items-center">
            <Icon className="h-full w-auto" size={40} />
            <div className="flex flex-col">
                <p className="text-xs lg:text-sm">{title}</p>
                <p className="text-lg lg:text-2xl">{text}</p>
            </div>
        </div>
    )
}

export default DashboardCard