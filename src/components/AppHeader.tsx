import { Bell, Search, Video } from 'lucide-react';
import { SoopLogo } from './SoopLogo';

export function AppHeader() {
  return (
    <header className="app-header">
      <button type="button" className="header-icon" aria-label="create broadcast">
        <Video size={20} />
      </button>
      <button type="button" className="soop-logo" aria-label="SOOP home">
        <SoopLogo />
      </button>
      <div className="header-actions">
        <button type="button" className="header-icon has-dot" aria-label="notifications">
          <Bell size={22} />
        </button>
        <button type="button" className="header-icon" aria-label="search">
          <Search size={22} />
        </button>
      </div>
    </header>
  );
}
