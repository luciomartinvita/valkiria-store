'use client'

import React, { useRef, useEffect, useState } from 'react'

const ScrollSequence = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [stars, setStars] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([])

    useEffect(() => {
        const newStars = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
            duration: `${3 + Math.random() * 5}s`,
            size: `${1 + Math.random() * 2}px`,
        }))
        setStars(newStars)

        const video = videoRef.current
        if (!video) return

        const handleCanPlay = () => {
            setIsLoaded(true)
        }

        video.addEventListener('canplaythrough', handleCanPlay)

        const onScroll = () => {
            if (!sectionRef.current || !video.duration) return

            const rect = sectionRef.current.getBoundingClientRect()
            const scrollHeight = sectionRef.current.offsetHeight
            const viewportHeight = window.innerHeight

            let scrollPos = -rect.top
            let scrollTotal = scrollHeight - viewportHeight

            let progressVal = scrollPos / scrollTotal
            progressVal = Math.max(0, Math.min(1, progressVal))

            setProgress(progressVal)

            requestAnimationFrame(() => {
                video.currentTime = video.duration * progressVal
            })
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()

        return () => {
            window.removeEventListener('scroll', onScroll)
            video.removeEventListener('canplaythrough', handleCanPlay)
        }
    }, [])

    return (
        <section ref={sectionRef} className="relative h-[200vh] bg-black">
            {/* Sticky Container - Anchored to Top */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col items-center">
                {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black">
                        <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
                        <div className="mt-6 text-gold font-light tracking-[0.2em] text-[10px] uppercase">
                            Preparando Elegancia
                        </div>
                    </div>
                )}

                {/* Stars Layer */}
                <div className="star-container pointer-events-none transition-opacity duration-1000 z-30" style={{ opacity: Math.max(0, 1 - progress * 4) }}>
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

                {/* Main Video Presentation - Top Aligned */}
                <div className="relative w-full h-[60vh] sm:h-[80vh] flex items-start justify-center overflow-hidden z-10 shadow-[0_30px_50px_rgba(0,0,0,0.8)] bg-black">
                    <video
                        ref={videoRef}
                        src="/Img-video/Video-Novia-3.mp4?v=3"
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-contain transition-opacity duration-1000"
                        style={{
                            filter: `contrast(1.1) brightness(${0.5 + (1 - progress) * 0.4})`,
                            opacity: isLoaded ? 1 : 0
                        }}
                    />

                    {/* Shadow overlay at the bottom of the video */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
                </div>

                {/* Hero Content - Positioned MUCH lower */}
                <div
                    className="absolute inset-x-0 bottom-[8vh] sm:bottom-[10vh] flex flex-col items-center justify-end px-6 z-40 pointer-events-none"
                    style={{
                        opacity: progress < 0.85 ? 1 : (1 - progress) / 0.15,
                        transform: `translateY(${progress > 0.85 ? (progress - 0.85) * -40 : 0}px)`,
                        transition: 'opacity 0.2s ease-out'
                    }}
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-2 sm:mb-3 tracking-widest text-center leading-tight sm:leading-none drop-shadow-2xl">
                        VALKIRIA <span className="text-gold italic block sm:inline">LUXURY</span>
                    </h1>
                    <p className="text-[10px] sm:text-xs md:text-sm text-marble-white max-w-[280px] sm:max-w-2xl mx-auto font-light tracking-[0.2em] sm:tracking-[0.4em] uppercase mb-4 text-center italic drop-shadow-lg">
                        La elegancia que mereces en tu noche inolvidable
                    </p>
                </div>

                {/* Scroll indicator - Subtle and minimal */}
                <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 transition-all duration-700 z-50 ${isLoaded && progress < 0.05 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[8px] text-gold uppercase tracking-[0.4em] font-light">Explorar</span>
                        <div className="w-[1px] h-6 bg-gold/50" />
                    </div>
                </div>

                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
            </div>
        </section>
    )
}

export default ScrollSequence
