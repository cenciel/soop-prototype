import type { MainTab } from '../data/mockData';
import { mainTabs } from '../data/mockData';

type TopNavProps = {
  activeTab: MainTab;
  onChange: (tab: MainTab) => void;
};

export function TopNav({ activeTab, onChange }: TopNavProps) {
  return (
    <nav className="top-nav" aria-label="main sections">
      {mainTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`top-pill ${activeTab === tab.id ? 'is-active' : ''}`}
          aria-pressed={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
        >
          {tab.icon === 'leaf' ? <span className="leaf-mark" /> : null}
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
