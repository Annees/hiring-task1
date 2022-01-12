import React, { useState } from 'react'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/solid";

function Header() {
    const [searchInput, setSearchInput] = useState("");
    console.log(searchInput);
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
            <div className="relative flex items-center h-10 my-auto">
                <h1 className="font-bold">My Blog Post</h1>
            </div>
            
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                
                <input 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    //className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text" 
                    placeholder={"Start your search"}>
                </input>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>
            <div>
                
            </div>
        </header>
    )
}

export default Header
