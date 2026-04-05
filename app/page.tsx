import Image from 'next/image';

type Slide = {
  id: string;
  number: string;
  duration: string;
  title: string;
  label: string;
};

const heroImageById: Record<string, string> = {
  hero: '/images/slide-01.jpg',
};

const slideImageById: Record<string, string> = {
  'slide-01': '/images/slide-01.jpg',
  'slide-02': '/images/post-shift.jpg',
  'slide-03': '/images/post-shift-bed.jpg',
  'brock-01': '/images/brock-insert-01.jpg',
  'slide-04': '/images/body-signals.jpg',
  'slide-05': '/images/post-shift-bed.jpg',
  'slide-06': '/images/breath-reset.jpg',
  'brock-02': '/images/brock-insert-02.jpg',
  'slide-07': '/images/social-energy.jpg',
  'slide-08': '/images/grounding.jpg',
  'slide-09': '/images/exit-ritual.jpg',
  'brock-03': '/images/brock-insert-03.jpg',
  'slide-10': '/images/vala-identity.jpg',
  'slide-11': '/images/integration.jpg',
  'brock-cta': '/images/brock-cta.jpg',
};

const slides: Slide[] = [
  { id: 'slide-01', number: 'Slide 01', duration: '0:30', title: 'VALA Somatic Reset™', label: 'Cover slide' },
  { id: 'slide-02', number: 'Slide 02', duration: '3:00', title: "Your shift ends… but your body doesn't", label: 'The reality' },
  { id: 'slide-03', number: 'Slide 03', duration: '3:00', title: 'You learned how to turn it on… not how to turn it off', label: 'What no one tells you' },
  { id: 'brock-01', number: 'Brock Insert 01', duration: '2:00', title: 'This is nervous system overload', label: 'Authority reframe' },
  { id: 'slide-04', number: 'Slide 04', duration: '3:00', title: 'Your body is talking', label: 'Body signals' },
  { id: 'slide-05', number: 'Slide 05', duration: '4:00', title: 'This is why you feel weird after work', label: 'Post-shift anxiety' },
  { id: 'slide-06', number: 'Slide 06', duration: '4:00', title: 'Do this after every shift', label: '60-second reset' },
  { id: 'brock-02', number: 'Brock Insert 02', duration: '2:00', title: 'The body needs completion', label: 'Authority reframe' },
  { id: 'slide-07', number: 'Slide 07', duration: '3:00', title: 'Not all energy is yours', label: 'Social energy' },
  { id: 'slide-08', number: 'Slide 08', duration: '4:00', title: '3-Point Reset', label: 'Grounding method' },
  { id: 'slide-09', number: 'Slide 09', duration: '4:00', title: 'How to come down after work', label: 'Exit ritual' },
  { id: 'brock-03', number: 'Brock Insert 03', duration: '2:00', title: 'Recovery sustains success', label: 'Final authority reframe' },
  { id: 'slide-10', number: 'Slide 10', duration: '4:00', title: 'You are VALA', label: 'Identity integration' },
  { id: 'slide-11', number: 'Slide 11', duration: '2:00', title: "You don't have to stay on", label: 'Integration close' },
  { id: 'brock-cta', number: 'Final Brock CTA', duration: '2:00', title: 'Continue your reset', label: 'Conversion close' },
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: 24, fontFamily: 'Jost, sans-serif' }}>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 20, marginBottom: 32 }}>
        <div>
          <p>VALA Somatic Reset™ — Nightworker Edition</p>
          <h1>A nervous system reset for women who stay “on” for work</h1>
        </div>
        <div style={{ position: 'relative', width: '100%', minHeight: 260 }}>
          <Image
            src={heroImageById.hero}
            alt="VALA narrator — luxury bedroom, warm lighting"
            fill
            sizes="(max-width: 900px) 100vw, 420px"
            style={{ objectFit: 'cover', borderRadius: 12 }}
            priority
          />
        </div>
      </section>

      <section>
        <h2>Slides</h2>
        <div style={{ display: 'grid', gap: 14 }}>
          {slides.map((slide) => (
            <article
              key={slide.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 260px',
                border: '1px solid #e7d2c8',
                borderRadius: 12,
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: 16 }}>
                <p>
                  {slide.number} — {slide.duration}
                </p>
                <h3>{slide.title}</h3>
                <p>{slide.label}</p>
              </div>
              <div style={{ position: 'relative', minHeight: 160 }}>
                <Image
                  src={slideImageById[slide.id]}
                  alt={`${slide.number} image`}
                  fill
                  sizes="260px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
