import type { Broadcaster } from '../data/mockData';

type BroadcasterStripProps = {
  broadcasters: Broadcaster[];
};

export function BroadcasterStrip({ broadcasters }: BroadcasterStripProps) {
  return (
    <section className="broadcaster-strip" aria-label="recommended broadcasters">
      {broadcasters.map((broadcaster) => (
        <article className="broadcaster" key={broadcaster.id}>
          <img src={broadcaster.avatar} alt="" />
          <span>{broadcaster.name}</span>
        </article>
      ))}
    </section>
  );
}
