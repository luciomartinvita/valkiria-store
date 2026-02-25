import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-black text-marble-white py-16 px-6 border-t border-gold/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Info Col */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/30">
                            <Image src="/assets/logo-valkiria.png" alt="Valkiria Logo" fill className="object-cover" />
                        </div>
                        <span className="text-xl font-bold tracking-widest text-gold">VALKIRIA</span>
                    </div>
                    <p className="text-sm opacity-60 leading-relaxed font-light">
                        Valkiria Luxury ofrece una selección exclusiva de vestidos de gala para momentos inolvidables. Diseño, elegancia y distinción en cada detalle.
                    </p>
                </div>

                {/* Links Col */}
                <div className="space-y-6">
                    <h4 className="text-gold uppercase tracking-widest text-sm font-semibold">Navegación</h4>
                    <ul className="space-y-4 text-sm font-light">
                        <li><Link href="/" className="hover:text-gold transition-colors">Inicio</Link></li>
                        <li><Link href="/coleccion" className="hover:text-gold transition-colors">Colección</Link></li>
                        <li><Link href="/contacto" className="hover:text-gold transition-colors">Contacto</Link></li>
                    </ul>
                </div>

                {/* Contact Col */}
                <div className="space-y-6">
                    <h4 className="text-gold uppercase tracking-widest text-sm font-semibold">Contacto</h4>
                    <p className="text-sm font-light opacity-60">Consultas y citas:</p>
                    <button className="luxury-button !px-6 !py-2 !text-xs">
                        WhatsApp
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gold/10 text-center">
                <p className="text-xs opacity-40 font-light tracking-widest">
                    © {new Date().getFullYear()} VALKIRIA LUXURY. TODOS LOS DERECHOS RESERVADOS.
                </p>
                <p className="mt-4 text-xs font-light tracking-wide">
                    Desarrollado por: <a href="http://guruweb.com.ar" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">guruweb.com.ar</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
