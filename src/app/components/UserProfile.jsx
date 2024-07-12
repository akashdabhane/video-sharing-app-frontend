'use client';
import Image from 'next/image';
import React, { useState } from 'react'

function UserProfile() {
    const menu = ["Videos", "Playlists", "Tweets", "Subscribers"]
    const [showMenu, setShowMenu] = useState("Videos")
    return (
        <>
            <div className="relative min-h-[150px] w-full pt-[16.28%]">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="https://images.pexels.com/photos/1092424/pexels-photo-1092424.jpeg?auto=compress"
                        alt="cover-photo"
                        width={2000}
                        height={400}
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 pb-4 pt-6 px-4 ">
                <span className="relative -mt-12 inline-block h-28 w-28 shrink-0 overflow-hidden rounded-full border-2">
                    <Image
                        src="https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Channel"
                        className="h-full w-full"
                        width={100}
                        height={0} />
                </span>
                <div className="mr-auto inline-block">
                    <h1 className="font-bolg text-xl">React Patterns</h1>
                    <p className="text-sm text-gray-400">@reactpatterns</p>
                    <p className="text-sm text-gray-400">600k Subscribers · 220 Subscribed</p>
                </div>
                <div className="inline-block">
                    <div className="inline-flex min-w-[145px] justify-end">
                        <button
                            className="group/btn mr-1 flex w-full items-center gap-x-2 bg-[#ae7aff] px-3 py-2 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e] sm:w-auto">
                            <span className="inline-block w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
                                </svg>
                            </span>
                            <span className="group-focus/btn:hidden">Subscribe</span>
                            <span className="hidden group-focus/btn:block">Subscribed</span>
                        </button>
                    </div>
                </div>
            </div>
            <ul className="no-scrollbar sticky top-[66px] z-[2] flex flex-row gap-x-2 overflow-auto border-b-2 border-gray-400 bg-[#121212] py-2 sm:top-[82px] px-4">
                {
                    menu.map((item, index) => (
                        <li className="w-full" key={index} onClick={() => setShowMenu(item)}>
                            <button className={`w-full border-b-2 px-3 py-1.5 ${showMenu === item ? "border-[#ae7aff] bg-white text-[#ae7aff]" : "border-transparent text-gray-400"}`}>{item}</button>
                        </li>
                    ))
                }
                {/* <li className="w-full"><button className="w-full border-b-2 border-[#ae7aff] bg-white px-3 py-1.5 text-[#ae7aff]">Videos</button></li>
                <li className="w-full"><button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Tweets</button></li>
                <li className="w-full"><button className="w-full border-b-2 border-transparent px-3 py-1.5 text-gray-400">Subscribed</button></li> */}
            </ul>
        </>
    )
}

export default UserProfile