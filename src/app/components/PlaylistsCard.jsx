import Image from 'next/image'
import React from 'react'

function PlaylistsCard() {
    const playlistsDetails = [
        {
            id: 0,
            title: "React Mastery",
            description: "Learn React.js, Redux, and other modern JavaScript libraries",
            totalVideos: 12,
            totalViews: 100000,
            lastUpdatedAt: "2 month ago",
            thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 1,
            title: "React Mastery",
            description: "Learn React.js, Redux, and other modern JavaScript libraries",
            totalVideos: 12,
            totalViews: 100000,
            lastUpdatedAt: "2 month ago",
            thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 2,
            title: "React Mastery",
            description: "Learn React.js, Redux, and other modern JavaScript libraries",
            totalVideos: 12,
            totalViews: 100000,
            lastUpdatedAt: "2 month ago",
            thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            title: "React Mastery",
            description: "Learn React.js, Redux, and other modern JavaScript libraries",
            totalVideos: 12,
            totalViews: 100000,
            lastUpdatedAt: "2 month ago",
            thumbnail: "https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]

    return (
        <section className="w-full pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
            <div className="px-4 pb-4">
                <div className="grid gap-4 pt-2 sm:grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))]">
                    {
                        playlistsDetails.map((item) => (
                            <div className="w-full" key={item.id}>
                                <div className="relative mb-2 w-full pt-[56%]">
                                    <div className="absolute inset-0">
                                        <Image
                                            src={item.thumbnail}
                                            alt="React Mastery"
                                            className="h-full w-full"
                                            width={100}
                                            height={0} />
                                        <div className="absolute inset-x-0 bottom-0">
                                            <div className="relative border-t bg-white/30 p-4 text-white backdrop-blur-sm before:absolute before:inset-0 before:bg-black/40">
                                                <div className="relative z-[1]">
                                                    <p className="flex justify-between">
                                                        <span className="inline-block">Playlist</span>
                                                        <span className="inline-block">{item.totalVideos} videos</span>
                                                    </p>
                                                    <p className="text-sm text-gray-200">{item.totalViews} Views · {item.lastUpdatedAt} ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="mb-1 font-semibold">{item.title}</h6>
                                <p className="flex text-sm text-gray-200">{item.description}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default PlaylistsCard