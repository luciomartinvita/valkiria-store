import ScrollSequence from '@/components/ScrollSequence'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Experience (Scroll Sequence) */}
      <ScrollSequence />

      {/* Featured Collection Section Placeholder */}
      <section className="w-full py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-gold mb-12">Colección Destacada</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Placeholder items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden border border-gold/20">
                  <Image
                    src="/assets/portada-2.png"
                    alt={`Vestido ${item}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black to-transparent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-gold tracking-widest text-sm mb-1 uppercase">Vestido de Gala</p>
                    <h3 className="text-white text-xl">Colección Luxury {item}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
