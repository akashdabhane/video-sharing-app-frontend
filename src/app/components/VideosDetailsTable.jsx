import React from 'react'

function VideosDetailsTable() {
    return (
        <table className="w-full min-w-[1200px] border-collapse border text-white">
            <thead>
                <tr>
                    <th className="border-collapse border-b p-4">Status</th>
                    <th className="border-collapse border-b p-4">Status</th>
                    <th className="border-collapse border-b p-4">Uploaded</th>
                    <th className="border-collapse border-b p-4">Rating</th>
                    <th className="border-collapse border-b p-4">Date uploaded</th>
                    <th className="border-collapse border-b p-4"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-7"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-7"
                                    className="peer sr-only" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">Unpublished</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Redux Master" />
                            <h3 className="font-semibold">State Management with Redux</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">1250 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">386 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/16/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-8"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-8"
                                    className="peer sr-only"
                                    checked="" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">Published</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1739942/pexels-photo-1739942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="API Builder" />
                            <h3 className="font-semibold">Building a RESTful API with Node.js and Express</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">2773 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">50 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/15/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-9"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-9"
                                    className="peer sr-only"
                                    checked="" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">Published</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="React Native Dev" />
                            <h3 className="font-semibold">Introduction to React Native</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">1346 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">353 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/14/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-10"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-10"
                                    className="peer sr-only"
                                    checked="" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">Published</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1144257/pexels-photo-1144257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Hook Master" />
                            <h3 className="font-semibold">Creating Custom Hooks in React</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">1578 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">294 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/13/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-11"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-11"
                                    className="peer sr-only" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">Unpublished</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1144261/pexels-photo-1144261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="CSS Wizard" />
                            <h3 className="font-semibold">Advanced CSS: Flexbox and Grid Layouts</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">2506 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">87 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/12/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-12"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-12"
                                    className="peer sr-only" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">Unpublished</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1144268/pexels-photo-1144268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Pythonista" />
                            <h3 className="font-semibold">Introduction to Python Programming</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">1312 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">399 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/11/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-13"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-13"
                                    className="peer sr-only"
                                    checked="" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">Published</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1144269/pexels-photo-1144269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Django Master" />
                            <h3 className="font-semibold">Building Scalable Web Applications with Django</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">553 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">219 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/10/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-14"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-14"
                                    className="peer sr-only" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-orange-600 text-orange-600">Unpublished</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="ML Geek" />
                            <h3 className="font-semibold">Deep Dive into Machine Learning Algorithms</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">2061 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">359 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/9/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-15"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-15"
                                    className="peer sr-only"
                                    checked="" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center"><span className="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">Published</span></div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1144277/pexels-photo-1144277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="ReactD3" />
                            <h3 className="font-semibold">Creating Interactive UIs with React and D3</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">1165 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">10 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/8/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className="group border">
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <label
                                for="vid-pub-16"
                                className="relative inline-block w-12 cursor-pointer overflow-hidden">
                                <input
                                    type="checkbox"
                                    id="vid-pub-16"
                                    className="peer sr-only"
                                    checked="" />
                                <span
                                    className="inline-block h-6 w-full rounded-2xl bg-gray-200 duration-200 after:absolute after:bottom-1 after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-black after:duration-200 peer-checked:bg-[#ae7aff] peer-checked:after:left-7"></span>
                            </label>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center">
                            <span className="inline-block rounded-2xl border px-1.5 py-0.5 border-green-600 text-green-600">Published</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex items-center gap-4">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.pexels.com/photos/1144270/pexels-photo-1144270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Passport Pro" />
                            <h3 className="font-semibold">Node.js Authentication with Passport.js</h3>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex justify-center gap-4">
                            <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">1812 likes</span>
                            <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">347 dislikes</span>
                        </div>
                    </td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">9/7/2023</td>
                    <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                        <div className="flex gap-4">
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </button>
                            <button className="h-5 w-5 hover:text-[#ae7aff]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>

            </tbody>
        </table>
    )
}

export default VideosDetailsTable