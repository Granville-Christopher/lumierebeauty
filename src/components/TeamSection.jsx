import { TEAM_MEMBERS } from '../data/salonData';

export default function TeamSection() {
  return (
    <section id="team" className="py-32 px-6 bg-salon-bg text-salon-text relative border-t border-salon-text/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-salon-accent text-xs font-bold uppercase tracking-[0.3em]">The Artists</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Meet the <span className="text-gradient">Masters.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-2 border-salon-accent/20 group-hover:border-salon-accent transition-colors duration-500 bg-white">
                <img src={member.image} alt={member.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-salon-accent text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-salon-text/60 text-sm font-light px-4">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
