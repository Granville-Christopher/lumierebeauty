import { GALLERY_ITEMS } from '../data/salonData';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-32 px-6 bg-white text-salon-text">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-salon-accent text-xs font-bold uppercase tracking-[0.3em]">The Transformations</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Showcase of <span className="text-salon-text tracking-normal border-b-2 border-salon-accent">Excellence.</span>
            </h2>
          </div>
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest border-b border-salon-text/20 pb-1 hover:border-salon-accent transition-all whitespace-nowrap">
            View Full Gallery
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.title} className={`group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer shadow-lg hover:shadow-2xl transition-all ${item.className}`}>
              <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                <span className="text-salon-accent text-[10px] font-bold uppercase tracking-[0.2em] block mb-2">{item.tag}</span>
                <h3 className="font-display text-white text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
