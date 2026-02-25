'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-transparent transition-all duration-300">
            <div className="flex items-center gap-2">
                <div className="relative w-12 h-12">
                    <Image
                        src="/assets/logo-valkiria.png"
                        alt="Valkiria Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <span className="text-xl font-bold tracking-widest text-gold hidden sm:block">VALKIRIA</span>
            </div>

            <div className="flex gap-8 text-marble-white text-sm uppercase tracking-widest">
                <Link href="/" className="hover:text-gold transition-colors">Inicio</Link>
                <Link href="/coleccion" className="hover:text-gold transition-colors">Colección</Link>
                <Link href="/contacto" className="hover:text-gold transition-colors">Contacto</Link>
            </div>

            <div className="luxury-button !px-4 !py-2 text-xs">
                Mi Carrito
            </div>
        </nav>
    )
}

export default Navbar
