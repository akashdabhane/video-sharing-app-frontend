import Navbar from '@/app/components/Navbar'
import VideosDetailsTable from '@/app/components/VideosDetailsTable'
import React from 'react'

function page() {
    const boxesData = [
        {
            title: "Total views",
            total: 221234,
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
        },
        {
            title: "Total subscribers",
            total: 4053,
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
            </svg>
        },
        {
            title: "Total likes",
            total: 63021,
            icon: <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
            </svg>
        }
    ]

    return (
        <>
            <div className="h-screen overflow-y-auto bg-[#121212] text-white">
                {/* modify the navbar in a way instead of showing login and signup option show user profile */}
                <Navbar />
                <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 px-4 py-8">
                        <div className="flex flex-wrap justify-between gap-4">
                            <div className="block">
                                <h1 className="text-2xl font-bold">Welcome Back, React Patterns</h1>
                                <p className="text-sm text-gray-300">Seamless Video Management, Elevated Results.</p>
                            </div>
                            <div className="block">
                                <button className="inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-5">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"></path>
                                    </svg>
                                    Upload video
                                </button>
                            </div>
                        </div>

                        {/* use map for this three boxes */}
                        <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
                            {
                                boxesData.map((item, index) => (
                                    <div className="border p-4" key={index}>
                                        <div className="mb-4 block">
                                            <span className="inline-block h-7 w-7 rounded-full bg-[#E4D3FF] p-1 text-[#ae7aff]">
                                                {item.icon}
                                            </span>
                                        </div>
                                        <h6 className="text-gray-300">{item.title}</h6>
                                        <p className="text-3xl font-semibold">{item.total}</p>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="w-full overflow-auto">
                            <VideosDetailsTable />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page