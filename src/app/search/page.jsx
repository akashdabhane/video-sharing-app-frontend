import React from 'react'
import VideoListListView from '../components/VideoListListView'
import Navbar from '../components/Navbar'
import LeftPanel from '../components/LeftPanel'

function page() {
    return (
        <div className="h-screen overflow-y-auto bg-[#121212] text-white">
            <Navbar />
            <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
                <LeftPanel />

                <VideoListListView />
            </div>
        </div>

    )
}

export default page