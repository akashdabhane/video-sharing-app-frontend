import React from 'react'
import Navbar from '../components/Navbar'
import LeftPanel from '../components/LeftPanel'
import UserProfile from '../components/UserProfile'
import VideoListCardView from '../components/VideoListCardView'

function page() {
    return (
        <>
            <link
                rel="preload"
                as="image"
                href="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress" />
            <link
                rel="preload"
                as="image"
                href="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <div className="h-screen overflow-y-auto bg-[#121212] text-white">
                <Navbar />
                <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                    <LeftPanel />
                    <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">

                        <UserProfile />
                        <div className="px-4 pb-4">
                            {/* <VideoListCardView/> */}
                            <div className="flex justify-center p-4">
                                <div className="w-full max-w-sm text-center">
                                    <p className="mb-3 w-full">
                                        <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
                                            </svg>
                                        </span>
                                    </p>
                                    <h5 className="mb-2 font-semibold">No videos uploaded</h5>
                                    <p>This page has yet to upload a video. Search another page in order to find more videos.</p>


                                    {/* my channel jsx  */}
                                    {/* <button class="mt-4 inline-flex items-center gap-x-2 bg-[#ae7aff] px-3 py-2 font-semibold text-black">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            class="h-5 w-5">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15"></path>
                                        </svg>
                                        New video
                                    </button> */}
                                </div>
                            </div>


                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default page