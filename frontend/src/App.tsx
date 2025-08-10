import { useState, useEffect} from 'react'
import { Search } from 'lucide-react'
import './index.css'
import { AuthProvider } from './context/AuthContext'

import Navbar from './components/Navbar'
import ScrollBar from './components/ScrollBar'
import Footer from './components/Footer'

function App() {

  const books = [
    "The Hobbit",
    "Dune",
    "The Name of the Wind",
    "Mistborn",
    "Percy Jackson",
    "The Hobbit",
    "Dune",
    "The Name of the Wind",
    "Mistborn",
    "Percy Jackson",
    "The Hobbit",
    "Dune",
    "The Name of the Wind",
    "Mistborn",
    "Percy Jackson"
  ];

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen overflow-y-auto">
        <div className="gradient-circle">
        </div>
        <Navbar></Navbar>

        <div className="px-8 py-8 flex flex-row pl-44 items-center space-x-24">
          <img
          src='/photos/Opening picture.png'
          alt="Yes"
          className="w-125 h-125"
          draggable={false}
          />
          <div className="w-5/12 pt-10">
            <h1 className="text-3xl text-white font-serif italic">
            Where stories live, lists thrive, and readers find their next unforgettable adventure.
            </h1>
            <div className="relative py-4 pt-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none pl-5 pt-4">
                <Search 
                color="#FFFFFF"
                size={18}
                />
              </div>
              <input
                type="text"
                placeholder="Search books, authors, or fandoms..."
                className="w-full pl-12 pr-4 py-4 rounded-md border-gray-300 bg-[#6B4751] text-sm focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-white font-sans"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 px-8">
          <h1 className="font-serif italic text-white text-3xl">New Releases</h1>
          <ScrollBar data={books} />
        </div>

        <div className="mt-32 px-64 space-y-16">
          <div className="flex flex-row space-x-16">
            <div className="flex items-center justify-center bg-[#ffffff10] border border-white w-1/2 h-72 rounded-tl-4xl text-purple-100">
              <h1 className="font-serif italic text-2xl">Discover New Books</h1>
            </div>
            <div className="flex items-center justify-center bg-[#ffffff10] border border-white w-1/2 h-72 rounded-tr-4xl text-purple-100">
              <h1 className="font-serif italic text-2xl">Track Your Reading</h1>
            </div>
          </div>
          <div className="flex flex-row space-x-16">
            <div className="flex items-center justify-center bg-[#ffffff10] border border-white w-1/2 h-72 rounded-bl-4xl text-purple-100">
              <h1 className="font-serif italic text-2xl">Featured Lists & Trends</h1>
            </div>
            <div className="flex items-center justify-center bg-[#ffffff10] border border-white w-1/2 h-72 rounded-br-4xl text-purple-100">
              <h1 className="font-serif italic text-2xl">Share Reviews & Pin Boards</h1>
            </div>
          </div>
        </div>

        <div className="mt-28 px-8">
          <h1 className="font-serif italic text-white text-3xl">Trending</h1>
          <ScrollBar data={books} />
        </div>

        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default App
