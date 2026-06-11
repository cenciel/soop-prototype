import { ExternalLink, Info } from 'lucide-react';
import type { Banner } from '../data/mockData';

type AdBannerProps = {
  banner: Banner;
  action?: 'expand' | 'info';
};

export function AdBanner({ banner, action = 'info' }: AdBannerProps) {
  const Icon = action === 'expand' ? ExternalLink : Info;
  const imageOnly = banner.image.includes('mercedes_ad');

  return (
    <section
      className={`ad-banner ad-banner--${banner.tone} ${
        imageOnly ? 'ad-banner--image-only' : ''
      }`}
    >
      {!imageOnly ? (
        <div className="ad-copy">
          <strong>{banner.title}</strong>
          <span>{banner.subtitle}</span>
        </div>
      ) : null}
      <img src={banner.image} alt="" />
      {!imageOnly ? (
        <span className="ad-action" aria-hidden="true">
          <Icon size={21} />
        </span>
      ) : null}
    </section>
  );
}
