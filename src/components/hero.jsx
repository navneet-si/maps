import videoSrc from '../assets/main.mp4'; 
import { useState } from 'react';
import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet';
import "../index.css";
import "leaflet/dist/leaflet.css"

export function Hero(){
   
   const [center,setCenter]=useState({lat: 13.084622,lng: 80.248357});
   const ZOOM_LEVEL=9;
   
    return ( 
        <div className="relative h-screen w-screen">
        <video
          className="absolute top-0 left-0 w-screen h-screen object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted
        />
              <div className="absolute top-0 left-0 w-screen h-screen bg-black opacity-70 z-10"></div>

        <div className='flex md:justify-around md:items-center h-full relative z-10 md:flex-row flex-col'>
            <div className= 'text-white md:text-8xl font-[Anchorage] text-4xl '>

            <h1 className='md:-translate-y-6'>
                Planning a <span className='text-red-600 font-[Pacifico]'>Trip</span> we <br></br>Got You
            </h1>
            <p className='md:text-xl text-sm'>
            "Discover a new way to navigate your world, where every move is simpler, faster, and stress-free.<br></br>Whether you're relocating, planning a trip, or mapping out your next adventure,<br></br> our geo-reference platform brings precision and ease to the forefront"
            </p>
            <div className='md:translate-x-[50%]'>
                <button type="button" class=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
                        Get Started
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                </button>
            </div>

            </div>
            <div className='shadow-md'>
            <MapContainer center={center} zoom={ZOOM_LEVEL} scrollWheelZoom={false} className='w-[500px]  h-[500px]'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
        </div>  
    )
}