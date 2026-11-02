import React from 'react';
import { PARTNERS, TEAM_MEMBERS } from '../data/homeData';
import './TeamSection.css';
import { Link } from 'react-router-dom';
import { slugify } from '../utils/slugify';

/**
 * Renders authentic Figma decorative background vector patterns
 * Variations matching Figma Frames:
 * - stripes: Group 109 diagonal vector lines
 * - circles: Group 107 concentric ellipses
 * - diamonds: Group 108 rotated 45° checkerboard diamonds
 * - prisms: Union faceted geometric origami shards
 */
function CardPattern({ pattern, id }) {
  if (pattern === 'circles') {
    return (
    <svg className="card-bg-pattern pattern-circles" width="316" height="376" viewBox="0 0 316 376" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="161" cy="138" r="250" fill="black" fill-opacity="0.15"/>
<circle cx="161" cy="138" r="210" fill="#8A38F5"/>
<circle cx="161" cy="138" r="170" fill="black" fill-opacity="0.15"/>
<circle cx="161" cy="138" r="130" fill="#8A38F5"/>
<circle cx="161" cy="138" r="90" fill="black" fill-opacity="0.15"/>
<circle cx="161" cy="138" r="50" fill="#8A38F5"/>
<circle cx="161" cy="138" r="10" fill="black" fill-opacity="0.15"/>
</svg>

    );
  }

  if (pattern === 'diamonds') {
    const patternId = `diamonds-${id}`;
    return (
     <svg className="card-bg-pattern pattern-diamonds" width="316" height="376" viewBox="0 0 316 376" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-78.8926" y="193.865" width="64.9999" height="64.9999" transform="rotate(-31.0769 -78.8926 193.865)" fill="black" fill-opacity="0.2"/>
<rect x="-45.3398" y="249.536" width="64.9999" height="64.9999" transform="rotate(-31.0769 -45.3398 249.536)" fill="#8A38F5"/>
<rect x="21.7637" y="360.877" width="64.9999" height="64.9999" transform="rotate(-31.0769 21.7637 360.877)" fill="#8A38F5"/>
<rect x="-11.791" y="305.207" width="64.9999" height="64.9999" transform="rotate(-31.0769 -11.791 305.207)" fill="black" fill-opacity="0.2"/>
<rect x="-23.2207" y="160.312" width="64.9999" height="64.9999" transform="rotate(-31.0769 -23.2207 160.312)" fill="#8A38F5"/>
<rect x="-56.7754" y="104.642" width="64.9999" height="64.9999" transform="rotate(-31.0769 -56.7754 104.642)" fill="black" fill-opacity="0.2"/>
<rect x="10.3281" y="215.983" width="64.9999" height="64.9999" transform="rotate(-31.0769 10.3281 215.983)" fill="black" fill-opacity="0.2"/>
<rect x="77.4336" y="327.326" width="64.9999" height="64.9999" transform="rotate(-31.0769 77.4336 327.326)" fill="black" fill-opacity="0.2"/>
<rect x="43.8809" y="271.654" width="64.9999" height="64.9999" transform="rotate(-31.0769 43.8809 271.654)" fill="#8A38F5"/>
<rect x="110.986" y="382.996" width="64.9999" height="64.9999" transform="rotate(-31.0769 110.986 382.996)" fill="#8A38F5"/>
<rect x="-34.6562" y="15.4194" width="64.9999" height="64.9999" transform="rotate(-31.0769 -34.6562 15.4194)" fill="black" fill-opacity="0.2"/>
<rect x="32.4473" y="126.761" width="64.9999" height="64.9999" transform="rotate(-31.0769 32.4473 126.761)" fill="black" fill-opacity="0.2"/>
<rect x="-1.10352" y="71.0908" width="64.9999" height="64.9999" transform="rotate(-31.0769 -1.10352 71.0908)" fill="#8A38F5"/>
<rect x="66" y="182.431" width="64.9999" height="64.9999" transform="rotate(-31.0769 66 182.431)" fill="#8A38F5"/>
<rect x="133.105" y="293.773" width="64.9999" height="64.9999" transform="rotate(-31.0769 133.105 293.773)" fill="#8A38F5"/>
<rect x="200.209" y="405.114" width="64.9999" height="64.9999" transform="rotate(-31.0769 200.209 405.114)" fill="#8A38F5"/>
<rect x="99.5527" y="238.103" width="64.9999" height="64.9999" transform="rotate(-31.0769 99.5527 238.103)" fill="black" fill-opacity="0.2"/>
<rect x="166.656" y="349.444" width="64.9999" height="64.9999" transform="rotate(-31.0769 166.656 349.444)" fill="black" fill-opacity="0.2"/>
<rect x="21.0156" y="-18.1318" width="64.9999" height="64.9999" transform="rotate(-31.0769 21.0156 -18.1318)" fill="#8A38F5"/>
<rect x="88.1191" y="93.209" width="64.9999" height="64.9999" transform="rotate(-31.0769 88.1191 93.209)" fill="#8A38F5"/>
<rect x="54.5664" y="37.5376" width="64.9999" height="64.9999" transform="rotate(-31.0769 54.5664 37.5376)" fill="black" fill-opacity="0.2"/>
<rect x="121.672" y="148.879" width="64.9999" height="64.9999" transform="rotate(-31.0769 121.672 148.879)" fill="black" fill-opacity="0.2"/>
<rect x="188.773" y="260.221" width="64.9999" height="64.9999" transform="rotate(-31.0769 188.773 260.221)" fill="black" fill-opacity="0.2"/>
<rect x="255.881" y="371.562" width="64.9999" height="64.9999" transform="rotate(-31.0769 255.881 371.562)" fill="black" fill-opacity="0.2"/>
<rect x="155.225" y="204.55" width="64.9999" height="64.9999" transform="rotate(-31.0769 155.225 204.55)" fill="#8A38F5"/>
<rect x="222.328" y="315.891" width="64.9999" height="64.9999" transform="rotate(-31.0769 222.328 315.891)" fill="#8A38F5"/>
<rect x="76.6836" y="-51.6855" width="64.9999" height="64.9999" transform="rotate(-31.0769 76.6836 -51.6855)" fill="black" fill-opacity="0.2"/>
<rect x="143.789" y="59.6562" width="64.9999" height="64.9999" transform="rotate(-31.0769 143.789 59.6562)" fill="black" fill-opacity="0.2"/>
<rect x="110.236" y="3.98633" width="64.9999" height="64.9999" transform="rotate(-31.0769 110.236 3.98633)" fill="#8A38F5"/>
<rect x="177.342" y="115.328" width="64.9999" height="64.9999" transform="rotate(-31.0769 177.342 115.328)" fill="#8A38F5"/>
<rect x="244.445" y="226.668" width="64.9999" height="64.9999" transform="rotate(-31.0769 244.445 226.668)" fill="#8A38F5"/>
<rect x="311.553" y="338.01" width="64.9999" height="64.9999" transform="rotate(-31.0769 311.553 338.01)" fill="#8A38F5"/>
<rect x="210.893" y="170.998" width="64.9999" height="64.9999" transform="rotate(-31.0769 210.893 170.998)" fill="black" fill-opacity="0.2"/>
<rect x="277.998" y="282.34" width="64.9999" height="64.9999" transform="rotate(-31.0769 277.998 282.34)" fill="black" fill-opacity="0.2"/>
<rect x="199.461" y="26.105" width="64.9999" height="64.9999" transform="rotate(-31.0769 199.461 26.105)" fill="#8A38F5"/>
<rect x="165.908" y="-29.5664" width="64.9999" height="64.9999" transform="rotate(-31.0769 165.908 -29.5664)" fill="black" fill-opacity="0.2"/>
<rect x="233.012" y="81.7749" width="64.9999" height="64.9999" transform="rotate(-31.0769 233.012 81.7749)" fill="black" fill-opacity="0.2"/>
<rect x="300.117" y="193.117" width="64.9999" height="64.9999" transform="rotate(-31.0769 300.117 193.117)" fill="black" fill-opacity="0.2"/>
<rect x="266.564" y="137.446" width="64.9999" height="64.9999" transform="rotate(-31.0769 266.564 137.446)" fill="#8A38F5"/>
<rect x="255.131" y="-7.44824" width="64.9999" height="64.9999" transform="rotate(-31.0769 255.131 -7.44824)" fill="black" fill-opacity="0.2"/>
<rect x="288.684" y="48.2231" width="64.9999" height="64.9999" transform="rotate(-31.0769 288.684 48.2231)" fill="#8A38F5"/>
</svg>

    );
  }

  if (pattern === 'prisms') {
    return (
     <svg className="card-bg-pattern pattern-prisms" width="316" height="367" viewBox="0 0 316 367" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.909 158.91L129.191 139.575L154.526 171.394L75.819 234.064L161.159 341.241L129.34 366.577L-0.669477 203.298L31.1489 177.963L50.4838 202.246L73.091 184.245L8.41923 103.024L40.2376 77.6889L104.909 158.91ZM323.599 211.899L161.159 341.241L135.824 309.423L239.651 226.75L222.983 205.817L141.763 270.488L116.428 238.67L197.648 173.999L154.312 119.573L207.9 76.9037L143.228 -4.31714L175.047 -29.6524L265.054 83.3868L211.465 126.057L229.466 148.664L227.792 149.996L253.128 181.815L254.801 180.482L271.469 201.416L298.263 180.081L323.599 211.899ZM379.484 115.41L379.484 115.409L404.82 147.227L346.207 193.898L320.871 162.079L347.665 140.745L330.997 119.811L279.922 160.48L254.587 128.661L305.662 87.9931L154.984 -101.242L186.803 -126.577L379.484 115.41ZM180.319 -69.4226L74.8178 14.5823L112.154 61.4721L141.461 38.1364L166.796 69.9547L105.671 118.625L80.336 86.8067L80.3353 86.8073L42.9994 39.9175L-31.5222 99.2551L11.1472 152.843L-20.6711 178.179L-88.6758 92.772L154.984 -101.241L180.319 -69.4226Z" fill="black" fill-opacity="0.2"/>
</svg>

    );
  }

  // Default: 'stripes' (Group 109)
  const patternId = `stripes-${id}`;
  return (
   <svg className="card-bg-pattern pattern-stripes" width="316" height="376" viewBox="0 0 316 376" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M112.101 -81.0701C63.292 -114.333 -32.9701 -79.865 -75 -58.4734V40.9521H541.439V-250.546C469.581 -288.96 393.204 -268.171 328.578 -180.948C263.951 -93.7245 173.112 -39.4921 112.101 -81.0701Z" fill="black" fill-opacity="0.2"/>
<path d="M112.101 -29.1727C63.292 -62.435 -32.9701 -27.9675 -75 -6.57593V92.8495H541.439V-198.648C469.581 -237.063 393.204 -216.274 328.578 -129.05C263.951 -41.827 173.112 12.4053 112.101 -29.1727Z" fill="#8A38F5"/>
<path d="M112.101 12.9326C63.292 -20.3298 -32.9701 14.1377 -75 35.5293V134.955H541.439V-156.543C469.581 -194.958 393.204 -174.169 328.578 -86.9452C263.951 0.278183 173.112 54.5105 112.101 12.9326Z" fill="black" fill-opacity="0.2"/>
<path d="M112.101 64.8293C63.292 31.5669 -32.9701 66.0345 -75 87.426V186.852H541.439V-104.646C469.581 -143.061 393.204 -122.272 328.578 -35.0485C263.951 52.1749 173.112 106.407 112.101 64.8293Z" fill="#8A38F5"/>
<path d="M112.101 106.934C63.292 73.6719 -32.9701 108.139 -75 129.531V228.956H541.439V-62.5414C469.581 -100.956 393.204 -80.1669 328.578 7.05651C263.951 94.2799 173.112 148.512 112.101 106.934Z" fill="black" fill-opacity="0.2"/>
<path d="M112.101 158.832C63.292 125.57 -32.9701 160.037 -75 181.429V280.854H541.439V-10.6435C469.581 -49.0579 393.204 -28.2689 328.578 58.9545C263.951 146.178 173.112 200.41 112.101 158.832Z" fill="#8A38F5"/>
<path d="M112.101 202.745C63.292 169.483 -32.9701 203.95 -75 225.342V324.768H541.439V33.2696C469.581 -5.14482 393.204 15.6442 328.578 102.868C263.951 190.091 173.112 244.323 112.101 202.745Z" fill="black" fill-opacity="0.2"/>
<path d="M112.101 254.643C63.292 221.38 -32.9701 255.848 -75 277.24V376.665H541.439V85.1671C469.581 46.7526 393.204 67.5416 328.578 154.765C263.951 241.988 173.112 296.221 112.101 254.643Z" fill="#8A38F5"/>
<path d="M112.101 301.267C63.292 268.004 -32.9701 302.472 -75 323.864V423.289H541.439V131.791C469.581 93.3767 393.204 114.166 328.578 201.389C263.951 288.612 173.112 342.845 112.101 301.267Z" fill="black" fill-opacity="0.2"/>
<path d="M112.101 353.164C63.292 319.902 -32.9701 354.369 -75 375.761V475.186H541.439V183.689C469.581 145.274 393.204 166.063 328.578 253.286C263.951 340.51 173.112 394.742 112.101 353.164Z" fill="#8A38F5"/>
</svg>

  );
}

export default function TeamSection({ onSelectMember }) {
  const renderCard = (person) => {
    return (
      <Link
        key={person.id} 
        to={`/team/${slugify(person.name)}`}
        className="figma-partner-card"
        data-id={person.id}
        
        role="button"
        tabIndex={0}
        aria-label={`${person.name}, ${person.role}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onSelectMember && onSelectMember(person);
        }}
      >
        {/* Layer 1: Authentic Figma Geometric Vector Background */}
        <CardPattern pattern={person.pattern} id={person.id} />

        {/* Layer 2: Figma Ellipse 22 & Ellipse 23 Ambient Backlight Auras */}
        <div className="card-glow-outer" aria-hidden="true" />
        <div className="card-glow-inner" aria-hidden="true" />

        {/* Layer 3: Subject Media - Cutout Portrait (Figma 284x300), Logo Frame, or Monogram */}
        {person.image && person.isCutout ? (
          <img 
            src={person.image} 
            alt={person.name} 
            className="card-cutout-photo"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.parentElement.querySelector('.card-monogram-container');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : person.image && person.isLogo ? (
          <div className="card-logo-container">
            <img 
              src={person.image} 
              alt={person.name} 
              className="card-logo-photo"
              loading="lazy"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ) : person.image ? (
          <img 
            src={person.image} 
            alt={person.name} 
            className="card-cutout-photo"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              const fallback = e.target.parentElement.querySelector('.card-monogram-container');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
        ) : null}

        {/* Fallback Monogram Frame (when no photo or load error) */}
        {(!person.image || (!person.isCutout && !person.isLogo && !person.image)) && (
          <div className="card-monogram-container">
            <span className="card-monogram-text">
              {person.initials || person.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Layer 4: Signature Figma Placard (Rectangle 162 & Rectangle 163 with Sofia Sans & Poppins) */}
        <div className="card-placard-underlay" aria-hidden="true" />
        <div className="card-placard">
          <h4 className="card-placard-name" title={person.name}>{person.name}</h4>
          <p className="card-placard-role" title={person.role}>{person.role}</p>
        </div>
      </Link>
    );
  };

  return (
    <section className="team-section" id="team" aria-label="Everyone Behind The Scenes">
      {/* Meet Our Partners Group (Figma Group 114 / Node 649:105 / 617:1204) */}
      <div className="section-block partners-block">
        <div className="block-header">
          <span className="section-eyebrow">EVERYONE BEHIND THE SCENES</span>
          <h2 className="section-title">Meet Our Partners</h2>
        </div>

        {/* Partner cards matching Figma design */}
        <div className="cards-grid-4x2">
          {PARTNERS.map(renderCard)}
        </div>
      </div>

      {/* Meet Our Team Group (Figma Group 112 / Node 649:482 / 617:1561) */}
      <div className="section-block team-block">
        <div className="block-header">
          <h2 className="section-title">Meet Our Team</h2>
        </div>

        {/* Team cards matching Figma design */}
        <div className="cards-grid-4x2">
          {TEAM_MEMBERS.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
