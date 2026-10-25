import { useEffect, useState } from 'react';
import type { ProjectRecord } from '../data';

interface ProjectProjectionProps {
  project: ProjectRecord;
  variant: 'hero' | 'archive' | 'thumbnail';
}

function ForestPlatformerScene() {
  return (
    <svg viewBox="0 0 1600 900" aria-hidden="true" focusable="false">
      <rect width="1600" height="900" fill="#aab7aa" />
      <circle cx="1285" cy="156" r="88" fill="#eee9d8" opacity=".72" />
      <path d="M0 380L190 225L390 365L585 190L780 365L985 170L1210 360L1420 210L1600 345V650H0Z" fill="#657b69" opacity=".48" />
      <path d="M0 470L140 290L245 470M160 475L330 240L485 475M1120 470L1275 235L1435 470M1320 480L1500 255L1600 390" fill="none" stroke="#213829" strokeWidth="62" strokeLinejoin="round" opacity=".82" />
      <path d="M0 605C250 540 415 630 650 560C830 506 1035 560 1190 525C1365 485 1485 530 1600 500V900H0Z" fill="#17231c" />
      <path d="M0 640H350V590H620V675H900V530H1160V610H1440V505H1600V900H0Z" fill="#2f3b32" />
      <path d="M0 640H350V616H620V675H900V556H1160V610H1440V531H1600" fill="none" stroke="#88a06f" strokeWidth="20" />
      <g fill="#e7c62c" stroke="#6c5710" strokeWidth="8">
        <circle cx="510" cy="530" r="28" /><circle cx="745" cy="575" r="28" /><circle cx="1070" cy="420" r="28" />
      </g>
      <g transform="translate(680 474)">
        <rect width="86" height="106" fill="#ef3b32" />
        <rect x="15" y="16" width="56" height="34" fill="#f3e9d6" />
        <rect x="11" y="94" width="26" height="44" fill="#151718" /><rect x="49" y="94" width="26" height="44" fill="#151718" />
      </g>
      <g transform="translate(1000 495)">
        <path d="M0 58L52 0L106 58V108H0Z" fill="#111314" />
        <circle cx="34" cy="55" r="7" fill="#ef3b32" /><circle cx="73" cy="55" r="7" fill="#ef3b32" />
      </g>
      <g fill="none" stroke="#dce4dc" strokeWidth="2" opacity=".22">
        {Array.from({ length: 13 }, (_, index) => <path key={`v-${index}`} d={`M${index * 140} 0V900`} />)}
        {Array.from({ length: 8 }, (_, index) => <path key={`h-${index}`} d={`M0 ${index * 120}H1600`} />)}
      </g>
      <g transform="translate(1300 700)" strokeWidth="8" fill="none">
        <path d="M0 0H110" stroke="#ef3b32" /><path d="M0 0V-110" stroke="#76b24a" /><path d="M0 0L-74 58" stroke="#4f83ce" />
        <path d="M110 0l-20-12v24z" fill="#ef3b32" stroke="none" /><path d="M0-110l-12 20h24z" fill="#76b24a" stroke="none" /><path d="M-74 58l24-3-15-19z" fill="#4f83ce" stroke="none" />
      </g>
      <path d="M770 555C835 495 895 465 963 470" fill="none" stroke="#ef3b32" strokeWidth="7" strokeDasharray="20 15" />
    </svg>
  );
}

function ProductSystemScene({ project }: { project: ProjectRecord }) {
  const sceneClass = project.id === 'life-goods' ? 'goods' : 'internship';
  return (
    <div className={`product-system product-system--${sceneClass}`} aria-hidden="true">
      <div className="product-system__bar"><span /><span /><span /></div>
      <div className="product-system__title">{project.title}</div>
      <div className="product-system__canvas">
        <span className="product-system__block product-system__block--wide" />
        <span className="product-system__block" />
        <span className="product-system__block" />
        <span className="product-system__block product-system__block--accent" />
      </div>
      <div className="product-system__rail">{project.technologies.slice(0, 3).join(' / ')}</div>
    </div>
  );
}

export function ProjectProjection({ project, variant }: ProjectProjectionProps) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [project.image]);

  const hasUsableImage = Boolean(project.image) && !failed;
  const fallbackLabel = project.type === 'unity-game'
    ? `${project.title}: representative code-native forest platformer scene; gameplay capture is pending`
    : `${project.title}: code-native product overview`;

  return (
    <figure className={`project-projection project-projection--${variant} project-projection--${project.id}`}>
      {hasUsableImage ? (
        <img src={project.image} alt={project.mediaAlt ?? `${project.title} project media`} onError={() => setFailed(true)} />
      ) : (
        <div className="project-visual-fallback" role="img" aria-label={fallbackLabel}>
          {project.type === 'unity-game' ? <ForestPlatformerScene /> : <ProductSystemScene project={project} />}
        </div>
      )}
      {project.mediaLabel && <figcaption>{project.mediaLabel}</figcaption>}
    </figure>
  );
}
