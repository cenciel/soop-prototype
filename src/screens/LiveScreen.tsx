import { useState } from 'react';
import { ChevronDown, Columns2, List } from 'lucide-react';
import { AdBanner } from '../components/AdBanner';
import { LiveCard } from '../components/LiveCard';
import { liveBanner, liveItems, relatedItems } from '../data/mockData';

type LiveScreenProps = {
  onOpenPlayer: (id: string) => void;
};

export function LiveScreen({ onOpenPlayer }: LiveScreenProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="screen live-screen">
      <AdBanner banner={liveBanner} />

      <header className="section-header">
        <div>
          <h1>LIVE 전체</h1>
          <p>
            참여자수(높은순) · 언어(전체) <ChevronDown size={15} />
          </p>
        </div>
        <div className="view-controls" aria-label="view options">
          <button type="button" className="view-button" aria-label="compact grid view">
            <Columns2 size={19} />
          </button>
          <button type="button" className="view-button is-active" aria-label="list view">
            <List size={21} />
          </button>
        </div>
      </header>

      <section className="live-list" aria-label="live broadcasts">
        {liveItems.map((item) => (
          <div key={item.id} className="live-group">
            <LiveCard
              item={item}
              onOpenPlayer={onOpenPlayer}
              onExpand={(id) => setExpandedId(expandedId === id ? null : id)}
              variant="compact"
            />
            {expandedId === item.id ? (
              <section className="related-block">
                <div className="related-title">
                  <span>비슷한 방송 더보기</span>
                  <i />
                </div>
                {relatedItems.map((related) => (
                  <LiveCard key={related.id} item={related} onOpenPlayer={onOpenPlayer} />
                ))}
              </section>
            ) : null}
          </div>
        ))}
      </section>
    </section>
  );
}
