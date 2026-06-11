import { useMemo, useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BottomNav } from './components/BottomNav';
import { TopNav } from './components/TopNav';
import type { MainTab } from './data/mockData';
import { liveItems, recommendFeed, recommendHero, relatedItems } from './data/mockData';
import { LiveScreen } from './screens/LiveScreen';
import { PlayerScreen } from './screens/PlayerScreen';
import { RecommendScreen } from './screens/RecommendScreen';

const allItems = [recommendHero, ...recommendFeed, ...liveItems, ...relatedItems];

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('recommend');
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const selectedItem = useMemo(
    () => allItems.find((item) => item.id === selectedItemId),
    [selectedItemId],
  );

  if (selectedItem) {
    return (
      <main className="app-shell app-shell--player" aria-label="SOOP reference prototype">
        <PlayerScreen item={selectedItem} onBack={() => setSelectedItemId(null)} />
      </main>
    );
  }

  return (
    <main
      className={`app-shell ${activeTab === 'recommend' ? 'app-shell--recommend' : ''}`}
      aria-label="SOOP reference prototype"
    >
      <AppHeader />
      <TopNav activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === 'live' ? (
        <LiveScreen onOpenPlayer={setSelectedItemId} />
      ) : activeTab === 'recommend' ? (
        <RecommendScreen onOpenPlayer={setSelectedItemId} />
      ) : (
        <section className="screen empty-tab-screen" aria-label="empty section" />
      )}
      <BottomNav />
    </main>
  );
}
