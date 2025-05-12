import Sidebar from "@/components/adminComponents/Sidebar";

export default function Layout({children}){
    return (
        <>
        <div className="flex">
        <Sidebar />
        </div>
        {children}
        </>
    )
}