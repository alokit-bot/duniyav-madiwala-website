import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Clock,
  Flame,
  MapPin,
  Phone,
  Quote,
  Star,
  Utensils,
} from 'lucide-react';
import './styles.css';

const phone = '+919895062429';
const displayPhone = '+91 98950 62429';
const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Duniyav%209th%20Cross%20Rd%20Tavarekere%20Maruti%20Nagar%20Bengaluru';

const menuSections = [
  {
    title: 'House Signatures',
    items: [
      ['Duniyav Special Dum Biryani', 'Aromatic basmati, hand-pulled meat, sealed and slow-baked', '₹349'],
      ['Butter Chicken', 'Tomato, fenugreek, cream, charcoal-finished', '₹329'],
      ['Mutton Rogan Josh', 'Kashmiri chillies, yogurt, whole spices', '₹419'],
      ['Paneer Lababdar', 'Twice-cooked paneer in a velvet tomato-onion gravy', '₹289'],
    ],
  },
  {
    title: 'From The Tandoor',
    items: [
      ['Murgh Malai Tikka', 'Creamy marinade, mild spice, smoky edges', '₹329'],
      ['Seekh Kebab', 'Minced meat, fresh herbs, tandoor char', '₹349'],
      ['Tandoori Mushroom', 'Stuffed mushrooms, kasundi-style spice', '₹269'],
      ['Garlic Naan Basket', 'Soft breads finished with garlic butter', '₹159'],
    ],
  },
  {
    title: 'Coastal & Curries',
    items: [
      ['Mangalorean Fish Curry', 'Coconut, tamarind, curry leaf tempering', '₹379'],
      ['Kerala Pepper Chicken', 'Crushed pepper, onions, roasted coconut', '₹329'],
      ['Dal Tadka', 'Yellow lentils, ghee, garlic and cumin', '₹199'],
      ['Jeera Rice', 'Long-grain rice tossed with cumin and ghee', '₹159'],
    ],
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">Duniyav</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href={`tel:${phone}`}>
          <Phone size={18} /> Call
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="rating">
              <Star size={18} fill="currentColor" /> 4.4 on Google · 821+ reviews
            </div>
            <p className="eyebrow">BTM 1st Stage · Bengaluru</p>
            <h1>A whole world of flavour, served at one table.</h1>
            <p className="lede">
              From hand-layered biryanis and clay-oven kebabs to coastal curries, Duniyav brings the warmth of Indian kitchens to Madiwala with generous plates, calm service, and food made for groups.
            </p>
            <div className="hero-actions">
              <a className="primary" href={`tel:${phone}`}>Call to Book</a>
              <a className="secondary" href={mapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
            </div>
            <div className="quick-info">
              <span><MapPin size={17} /> 9th Cross Rd, Tavarekere</span>
              <span><Clock size={17} /> Open daily · closes 12:30 AM</span>
            </div>
          </div>
          <div className="hero-panel" aria-label="Restaurant highlights">
            <div className="photo photo-large"></div>
            <div className="stat"><strong>821+</strong><span>neighbourhood reviews</span></div>
            <div className="photo photo-small"></div>
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>One restaurant. Many Indian kitchens.</h2>
          </div>
          <div className="about-copy">
            <p>
              Duniyav is built for the everyday Bengaluru meal that still deserves care: a quick lunch, a family dinner, a late table with friends, or a call-ahead takeaway order. The menu moves across familiar Indian favourites without losing the details that make them memorable.
            </p>
            <p>
              Whole spices, tandoor heat, slow gravies, and fresh breads anchor the kitchen. The experience stays simple: call, arrive, eat well, and leave with a favourite dish for the next visit.
            </p>
            <div className="feature-grid">
              <span><Flame /> Tandoor-finished plates</span>
              <span><Utensils /> Family-friendly menu</span>
              <span><Star /> 4.4 rating from regulars</span>
            </div>
          </div>
        </section>

        <section className="menu" id="menu">
          <div className="section-head">
            <p className="eyebrow">The Menu</p>
            <h2>A short list, carefully cooked.</h2>
            <p>Indicative prices in INR. Call for today's specials, full menu availability, and table booking.</p>
          </div>
          <div className="menu-grid">
            {menuSections.map((section) => (
              <article className="menu-card" key={section.title}>
                <h3>{section.title}</h3>
                {section.items.map(([name, desc, price]) => (
                  <div className="dish" key={name}>
                    <div>
                      <strong>{name}</strong>
                      <span>{desc}</span>
                    </div>
                    <b>{price}</b>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="section-head">
            <p className="eyebrow">Glimpses</p>
            <h2>The room, the food, the little details.</h2>
          </div>
          <div className="gallery-grid" aria-label="Food and restaurant mood gallery">
            <div className="gallery-img g1"></div>
            <div className="gallery-img g2"></div>
            <div className="gallery-img g3"></div>
          </div>
        </section>

        <section className="reviews" id="reviews">
          <Quote size={34} />
          <blockquote>
            A dependable neighbourhood restaurant for biryani, kebabs, curries, and group meals near Madiwala. The rating says what regulars already know: Duniyav is built around familiar food done with care.
          </blockquote>
          <p>4.4 on Google · 821+ reviews</p>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Visit</p>
            <h2>Call ahead or drop by.</h2>
            <p>9th Cross Rd, Tavarekere, Maruti Nagar, 1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560068.</p>
          </div>
          <div className="contact-actions">
            <a className="primary" href={`tel:${phone}`}>{displayPhone}</a>
            <a className="secondary" href={mapsUrl} target="_blank" rel="noreferrer">Open Google Maps</a>
          </div>
        </section>
      </main>

      <footer>
        <strong>Duniyav</strong>
        <span>Madiwala · Bengaluru</span>
        <a href={`tel:${phone}`}>Call {displayPhone}</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
