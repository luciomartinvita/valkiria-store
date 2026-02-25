'use client'

import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [stars, setStars] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([])

    useEffect(() => {
        // Generate star elements
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${3 + Math.random() * 5}s`,
            size: `${1 + Math.random() * 2}px`,
        }))
        setStars(newStars)
    }, [])

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-0"
                style={{ backgroundImage: 'url("/assets/portada-1.png")' }}
            />

            {/* Star Rain Container */}
            <div className="star-container">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star shadow-[0_0_5px_white]"
                        style={{
                            left: star.left,
                            animationDelay: star.delay,
                            animationDuration: star.duration,
                            width: star.size,
                            height: star.size,
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-wider">
                    VALKIRIA <span className="text-gold italic">LUXURY</span>
                </h1>
                <p className="text-lg md:text-xl text-marble-white max-w-2xl mx-auto font-light tracking-widest uppercase mb-8">
                    La elegancia que mereces en tu noche inolvidable
                </p>
                <button className="luxury-button">
                    Explorar Colección
                </button>
            </div>

            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    )
}

export default Hero
