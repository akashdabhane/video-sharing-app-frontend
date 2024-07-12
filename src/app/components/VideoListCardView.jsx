'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

function VideoListCardView() {
    const videos = [
        {
            id: 1,
            thumbnai: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "JavaScript Fundamentals: Variables and Data Types",
            views: "10.3k ",
            duration: "20:45",
            channel: "Code Master",
            uploadedAt: "44 minutes ago"
        },
        {
            id: 2,
            thumbnai: "https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Node.js Authentication with Passport.js",
            views: "21.2k ",
            duration: "26:58",
            channel: "Passport Pro",
            uploadedAt: "15 hours ago"
        },
        {
            id: 3,
            thumbnai: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "JavaScript Fundamentals: Variables and Data Types",
            views: "10.3k ",
            duration: "20:45",
            channel: "Code Master",
            uploadedAt: "44 minutes ago"
        },
        {
            id: 4,
            thumbnai: "https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Node.js Authentication with Passport.js",
            views: "21.2k ",
            duration: "26:58",
            channel: "Passport Pro",
            uploadedAt: "15 hours ago"
        },
        {
            id: 5,
            thumbnai: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "JavaScript Fundamentals: Variables and Data Types",
            views: "10.3k ",
            duration: "20:45",
            channel: "Code Master",
            uploadedAt: "44 minutes ago"
        },
        {
            id: 6,
            thumbnai: "https://images.pexels.com/photos/1144274/pexels-photo-1144274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Node.js Authentication with Passport.js",
            views: "21.2k ",
            duration: "26:58",
            channel: "Passport Pro",
            uploadedAt: "15 hours ago"
        },
    ]

    const router = useRouter()
    
    return (
        <>
            <div class="h-screen overflow-y-auto bg-[#121212] text-white w-full">
                <div class="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                    <section class="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
                        <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 p-4">
                            {
                                videos.map((item) => (
                                    <div class="w-full cursor-pointer" key={item.id} onClick={() => router.push("/watch")}>
                                        <div class="relative mb-2 w-full pt-[56%]">
                                            <div class="absolute inset-0">
                                                <Image
                                                    src={item.thumbnai}
                                                    alt="JavaScript Fundamentals: Variables and Data Types"
                                                    class="h-full w-full" 
                                                    width={100}
                                            height={0}/>
                                            </div>
                                            <span class="absolute bottom-1 right-1 inline-block rounded bg-black px-1.5 text-sm">{item.duration}</span>
                                        </div>
                                        <div class="flex gap-x-2">
                                            <div class="h-10 w-10 shrink-0">
                                                <Image
                                                    src="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                    alt="codemaster"
                                                    class="h-full w-full rounded-full"
                                                    width={100}
                                            height={0} />
                                            </div>
                                            <div class="w-full">
                                                <h6 class="mb-1 font-semibold">{item.title}</h6>
                                                <p class="flex text-sm text-gray-200">{item.views}Views · {item.uploadedAt}</p>
                                                <p class="text-sm text-gray-200">{item.channel}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default VideoListCardView