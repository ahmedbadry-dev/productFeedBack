import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div className='min-h-screen bg-gray-50 p-4 md:p-8'>
            <main>
                { /* <HomePage /> */}
                { /* <DetailPage /> */}
                {/* <RoadmapPage /> */}
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout