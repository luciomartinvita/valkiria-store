'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/20 backdrop-blur-md transition-all duration-300">
            <div className="flex items-center gap-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                    <Image
                        src="/assets/logo-valkiria.png"
                        alt="Valkiria Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <span className="text-xl font-bold tracking-widest text-gold hidden sm:block">VALKIRIA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-marble-white text-sm uppercase tracking-widest">
                <Link href="/" className="hover:text-gold transition-colors">Inicio</Link>
                <Link href="/coleccion" className="hover:text-gold transition-colors">Colección</Link>
                <Link href="/contacto" className="hover:text-gold transition-colors">Contacto</Link>
            </div>

            {/* Hamburger Button */}
            <button
                className="md:hidden text-gold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden p-8 animate-in fade-in duration-300">
                    <button
                        className="absolute top-6 right-6 text-gold"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={32} />
                    </button>
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl text-white uppercase tracking-widest hover:text-gold">Inicio</Link>
                    <Link href="/coleccion" onClick={() => setIsOpen(false)} className="text-2xl text-white uppercase tracking-widest hover:text-gold">Colección</Link>
                    <Link href="/contacto" onClick={() => setIsOpen(false)} className="text-2xl text-white uppercase tracking-widest hover:text-gold">Contacto</Link>
                    <div className="luxury-button w-full text-center mt-4">
                        Mi Carrito
                    </div>
                </div>
            )}

            <div className="hidden md:block luxury-button !px-4 !py-2 text-xs">
                Mi Carrito
            </div>
        </nav>
    )
}

export default Navbar
