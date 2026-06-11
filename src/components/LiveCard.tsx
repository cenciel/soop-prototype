import { useRef, useState } from 'react';
import { MoreVertical } from 'lucide-react';
import type { LiveItem } from '../data/mockData';
import { ViewerBadge } from './ViewerBadge';

type LiveCardProps = {
  item: LiveItem;
  onExpand?: (id: string) => void;
  onOpenPlayer?: (id: string) => void;
  variant?: 'default' | 'compact';
};

export function LiveCard({ item, onExpand, onOpenPlayer, variant = 'compact' }: LiveCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <article className={`live-card live-card--${variant}`}>
      <div
        role="button"
        tabIndex={0}
        className="live-thumb"
        aria-label={`open player for ${item.title}`}
        onClick={() => onOpenPlayer?.(item.id)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onOpenPlayer?.(item.id);
          }
        }}
      >
        <video ref={videoRef} src={item.media} muted={muted} playsInline preload="metadata" loop />
        <ViewerBadge count={item.viewers} />
      </div>
      <button
        type="button"
        className="live-meta"
        aria-label={`expand related for ${item.title}`}
        onClick={() => onExpand?.(item.id)}
      >
        <span className="live-author-row">
          <span className="avatar">
            <img src={item.avatar} alt="" />
          </span>
          <strong>{item.broadcaster}</strong>
        </span>
        <span className="live-text">
          <span className="live-title">{item.title}</span>
          <span className="live-tag-row">
            {item.tags.map((tag, index) => (
              <span className="live-tag" key={`${item.id}-${tag}-${index}`}>
                {tag}
              </span>
            ))}
          </span>
        </span>
      </button>
      <button type="button" className="more-button" aria-label="more options">
        <MoreVertical size={22} />
      </button>
    </article>
  );
}
