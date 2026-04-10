export default function Footer() {
  return (
    <footer className="bg-salon-text text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-display font-bold text-2xl tracking-widest uppercase">
          Lumière<span className="text-salon-accent">.</span>
        </div>
        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#" className="hover:text-salon-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-salon-accent transition-colors">Tiktok</a>
          <a href="#" className="hover:text-salon-accent transition-colors">Terms</a>
        </div>
        <div className="text-[10px] uppercase tracking-widest text-white/30">
          &copy; 2026 Lumière VIP Salon. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
