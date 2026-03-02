'use client'

import React, { useRef, useEffect, useState } from 'react'

const ScrollSequence = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [stars, setStars] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([])

    useEffect(() => {
        // Generate stars for the initial phase
        const newStars = Array.from({ length: 40 }).map((_, i) => ({
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
        video.currentTime = 0

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
        <section ref={sectionRef} className="relative h-[800vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-black">
                        <div className="w-12 h-12 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
                        <div className="mt-6 text-gold font-light tracking-[0.2em] text-[10px] uppercase">
                            Cargando Valkiria Luxury
                        </div>
                    </div>
                )}

                {/* Stars (Rain effect) - only visible at the beginning */}
                <div className="star-container pointer-events-none transition-opacity duration-1000" style={{ opacity: 1 - progress * 4 }}>
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

                {/* Background "Ambient" Video (Only for Desktop/Wide screens to avoid black bars) */}
                <div className="absolute inset-0 hidden md:block opacity-30 blur-3xl scale-110 pointer-events-none">
                    <video
                        src="/Img-video/crown-sequence.mp4"
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ filter: 'grayscale(0.5) brightness(0.5)' }}
                    />
                </div>

                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    {/* Main Focused Video */}
                    <video
                        ref={videoRef}
                        src="/Img-video/crown-sequence.mp4"
                        muted
                        playsInline
                        preload="auto"
                        className="h-full w-auto max-w-full object-contain md:object-cover lg:object-contain relative z-10 transition-opacity duration-1000"
                        style={{
                            filter: `contrast(1.05) brightness(${0.4 + (1 - progress) * 0.4}) sepia(0.1)`,
                            opacity: isLoaded ? 0.9 : 0,
                            boxShadow: '0 0 100px rgba(0,0,0,1)'
                        }}
                    />

                    {/* Shadow overlays */}
                    <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
                </div>

                {/* Stars Container - Z-index elevated */}
                <div className="star-container pointer-events-none transition-opacity duration-1000 z-30" style={{ opacity: 1 - progress * 4 }}>
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

                {/* Hero / Initial Content - Responsive text sizing */}
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center px-6 z-40 transition-all duration-700 pointer-events-none"
                    style={{
                        opacity: 1 - progress * 5,
                        transform: `translateY(${progress * -50}px)`
                    }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tighter sm:tracking-wider text-center leading-none">
                        VALKIRIA <span className="text-gold italic block sm:inline">LUXURY</span>
                    </h1>
                    <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-marble-white max-w-[280px] sm:max-w-2xl mx-auto font-light tracking-[0.2em] sm:tracking-widest uppercase mb-8 sm:mb-12 text-center">
                        La elegancia que mereces en tu noche inolvidable
                    </p>
                    <div className="w-[1px] h-12 sm:h-24 bg-gradient-to-b from-gold to-transparent opacity-50" />
                </div>

                {/* Middle Text Overlays - Adjusted for better safe-area */}
                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center px-6 z-40">
                    <div
                        className="transition-all duration-1000 transform absolute w-full max-w-4xl"
                        style={{
                            opacity: progress > 0.15 && progress < 0.35 ? 1 : 0,
                            transform: progress > 0.15 && progress < 0.35 ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        <h2 className="text-3xl md:text-5xl text-white font-serif italic text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] px-4">
                            Cada detalle importa
                        </h2>
                    </div>

                    <div
                        className="transition-all duration-1000 transform absolute w-full max-w-4xl"
                        style={{
                            opacity: progress > 0.45 && progress < 0.65 ? 1 : 0,
                            transform: progress > 0.45 && progress < 0.65 ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        <h2 className="text-3xl md:text-5xl text-gold font-serif text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] px-4">
                            La esencia de Valkiria
                        </h2>
                    </div>

                    <div
                        className="transition-all duration-1000 transform absolute w-full max-w-4xl"
                        style={{
                            opacity: progress > 0.75 && progress < 0.95 ? 1 : 0,
                            transform: progress > 0.75 && progress < 0.95 ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        <h2 className="text-3xl md:text-5xl text-white font-serif italic text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] px-4">
                            Tu momento real
                        </h2>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 z-50 ${isLoaded && progress < 0.05 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <div className="flex flex-col items-center gap-2 sm:gap-3">
                        <span className="text-[8px] sm:text-[9px] text-gold uppercase tracking-[0.3em] sm:tracking-[0.5em] font-light">Desliza para descubrir</span>
                        <div className="w-[1px] h-10 sm:h-16 bg-gradient-to-b from-gold to-transparent animate-pulse" />
                    </div>
                </div>

                {/* Vignette effect */}
                <div className="absolute inset-0 pointer-events-none z-30" style={{ background: 'radial-gradient(circle, transparent 30%, black 120%)' }} />

                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-50" />
            </div>
        </section>
    )
}

export default ScrollSequence
