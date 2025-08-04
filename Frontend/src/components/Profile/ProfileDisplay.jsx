import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Particles from '../Ui/Particles'; // Change path as needed!

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const profileImages = [
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400',
    'https://images.unsplash.com/photo-1519340333755-c05d235aa7f4?auto=format&fit=facearea&w=400&h=400',
];
const galleryImages = [
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=60',
];
const honorsList = [
    "Top Contributor 2023",
    "Certified Expert",
    "Volunteer Award",
    "Community Leader"
];
const socialCards = [
    {
        platform: 'LinkedIn',
        handle: '@yourname',
        link: 'https://linkedin.com/in/yourname',
        icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
    },
    {
        platform: 'Twitter',
        handle: '@yourname',
        link: 'https://twitter.com/yourname',
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png'
    },
];

const DUMMY_COORD = [51.505, -0.09];
const googleMapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&destination=${DUMMY_COORD[0]},${DUMMY_COORD[1]}`;

function ProfileDisplay() {
    const [imgIndex, setImgIndex] = useState(0);
    const [galleryIndex, setGalleryIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex(prev => (prev + 1) % profileImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setGalleryIndex(prev => (prev + 1) % galleryImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative max-w-7xl mx-auto my-8 p-8 rounded-2xl overflow-hidden">
            {/* Particles background */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <Particles
                    particleColors={["#60a5fa", "#3b82f6"]}
                    particleCount={800}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={80}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            {/* Content above particles */}
            <div className="relative z-10">
                {/* Top section */}
                <div className="flex flex-wrap items-center gap-8 mb-8">
                    {/* Profile Image */}
                    <div className="w-56 text-center">
                        <img
                            src={profileImages[imgIndex]}
                            alt="Profile"
                            className="w-48 h-48 rounded-full shadow-lg object-cover mx-auto"
                        />
                    </div>
                    {/* Social Cards Row */}
                    <div className="flex flex-1 flex-wrap gap-6 min-w-[200px]">
                        {socialCards.map(s => (
                            <a
                                key={s.platform}
                                href={s.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center px-6 py-4 rounded-xl bg-primary text-primary-content shadow-lg min-w-[180px] hover:bg-primary-focus duration-150 transform hover:scale-105 transition"
                            >
                                <img src={s.icon} alt={`${s.platform} icon`} className="w-8 h-8 mr-3" />
                                <span className="font-bold text-lg">{s.platform}</span>
                                <span className="ml-2 text-base opacity-80">{s.handle}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Map & Directions row */}
                <div className="flex flex-wrap gap-16 items-stretch mb-10 mt-16">
                    <div className="w-[350px] min-w-[470px] h-[350px] rounded-2xl ring-2 ring-primary overflow-hidden ">
                        <MapContainer
                            center={DUMMY_COORD}
                            zoom={14}
                            scrollWheelZoom={false}
                            style={{ height: "100%", width: "100%", borderRadius: "1rem" }}
                            className="w-full h-full"
                        >
                            <TileLayer
                                attribution='&copy; OpenStreetMap'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={DUMMY_COORD}>
                                <Popup>
                                    My Location (Dummy)
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <div className="flex-1 min-w-[280px] flex items-center justify-center p-6 ">
                        <div className="w-full text-center space-y-4">
                            <h3 className="font-extrabold text-xl text-secondary-content">Visit Our Location</h3>
                            <p className="font-medium text-secondary-content">
                                Discover us at this spot! Whether you're planning a visit or just curious where we are, use the link below to get instant directions on Google Maps.
                            </p>
                            <a
                                href={googleMapsDirectionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block font-bold text-lg px-6 py-3 rounded-lg bg-primary text-primary-content shadow hover:bg-primary-focus transition"
                            >
                                🚗 Get Directions
                            </a>
                            <div className="text-sm text-secondary-content mt-2 italic">
                                (Tap for turn-by-turn navigation from your location)
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery & Honors row */}
                <div className="flex gap-8 flex-wrap">
                    <div className="flex-2 min-w-[320px] rounded-2xl p-5 overflow-hidden flex items-center justify-center">
                        <img
                            src={galleryImages[galleryIndex]}
                            alt={`Gallery ${galleryIndex + 1}`}
                            className="w-full max-h-[320px] object-cover rounded-xl shadow"
                        />
                    </div>
                    <div className="flex-1 min-w-[200px] p-8 rounded-3xl shadow-lg flex flex-col justify-start max-h-[360px] overflow-y-auto">
                        <h4 className="text-secondary text-3xl mb-6 border-b-4 border-secondary pb-3 font-extrabold tracking-widest uppercase">
                            Honors
                        </h4>
                        <ul className="list-disc list-inside space-y-3 text-base font-semibold text-secondary-content">
                            {honorsList.map((honor, idx) => (
                                <li key={idx} className="flex items-center space-x-2 leading-relaxed">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 flex-shrink-0 text-secondary"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{honor}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDisplay;
