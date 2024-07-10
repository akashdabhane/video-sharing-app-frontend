import LeftPanel from '@/app/components/LeftPanel'
import Navbar from '@/app/components/Navbar'
import TweetList from '@/app/components/TweetList'
import UserProfile from '@/app/components/UserProfile'
import React from 'react'

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

                        <div class="px-4 pb-4">
                            {/* my tweet jsx  */}
                            {/* <div class="mt-2 border pb-2">
                                <textarea
                                    class="mb-2 h-10 w-full resize-none border-none bg-transparent px-3 pt-2 outline-none"
                                    placeholder="Write a tweet"></textarea>
                                <div class="flex items-center justify-end gap-x-3 px-3">
                                    <button class="inline-block h-5 w-5 hover:text-[#ae7aff]">
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
                                                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path>
                                        </svg>
                                    </button>
                                    <button class="inline-block h-5 w-5 hover:text-[#ae7aff]">
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
                                                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
                                        </svg>
                                    </button>
                                    <button class="bg-[#ae7aff] px-3 py-2 font-semibold text-black">Send</button>
                                </div>
                            </div> */}

                            <TweetList />
                            {/* <div class="flex justify-center p-4">
                            <div class="w-full max-w-sm text-center">
                                <p class="mb-3 w-full">
                                    <span class="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                                        <span class="inline-block w-6">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                class="w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </p>
                                <h5 class="mb-2 font-semibold">No Tweets</h5>
                                <p>
                                    This channel has yet to make a
                                    <strong>Tweet</strong>
                                    .
                                </p>
                            </div>
                        </div> */}
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}

export default page