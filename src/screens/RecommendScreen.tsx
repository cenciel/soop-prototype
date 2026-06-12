import { useRef, useState, type PointerEvent, type TouchEvent } from 'react';
import { ChevronRight, MoreVertical, Star } from 'lucide-react';
import { BroadcasterStrip } from '../components/BroadcasterStrip';
import { ViewerBadge } from '../components/ViewerBadge';
import { LiveCard } from '../components/LiveCard';
import { broadcasters, recommendedStreamers, liveItems, recommendHero, recommendFeed, vodItems } from '../data/mockData';

type RecommendScreenProps = {
  onOpenPlayer: (id: string) => void;
};

type FollowState = {
  [key: string]: boolean;
};

const heroSlides = [
  {
    id: liveItems[0].id,
    title: liveItems[0].title,
    broadcaster: liveItems[0].broadcaster,
    viewers: liveItems[0].viewers,
    tag: liveItems[0].tags[0] || '라이브',
    image: liveItems[0].media,
    usesReferenceUi: false,
    isLiveCard: true,
  },
  {
    id: recommendHero.id,
    title: '[WG]정신차리고 왔습니다 혜자샵 인형...',
    broadcaster: '우기성',
    viewers: 77,
    tag: '토크/캠방',
    image: '/assets/reference/recommend-preview-woogi.jpg',
    usesReferenceUi: true,
  },
  {
    id: recommendFeed[0].id,
    title: '파이요 방송에 참여해보세요',
    broadcaster: '파이요',
    viewers: 7336,
    tag: '게임',
    image: '/assets/reference/recommend-feed-pangiyo-user.png',
    usesReferenceUi: false,
  },
  {
    id: recommendFeed[1].id,
    title: '버추얼 친구들과 함께하는 오늘의 추천',
    broadcaster: '마왕루야',
    viewers: 42919,
    tag: '버추얼',
    image: '/assets/reference/recommend-feed-anime.jpg',
    usesReferenceUi: false,
  },
];

export function RecommendScreen({ onOpenPlayer }: RecommendScreenProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [followState, setFollowState] = useState<FollowState>({});
  const touchStartX = useRef<number | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  const toggleFollow = (broadcasterId: string) => {
    setFollowState((prev) => ({
      ...prev,
      [broadcasterId]: !prev[broadcasterId],
    }));
  };

  const activeHero = heroSlides[activeSlide];

  const moveSlide = (direction: 1 | -1) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    didSwipe.current = false;
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 42) {
      return;
    }

    didSwipe.current = true;
    moveSlide(deltaX < 0 ? 1 : -1);
  };

  const handlePointerDown = (event: PointerEvent) => {
    if (event.pointerType === 'touch') {
      return;
    }

    event.preventDefault();
    pointerStartX.current = event.clientX;
    didSwipe.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent) => {
    if (event.pointerType === 'touch' || pointerStartX.current === null) {
      return;
    }

    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(deltaX) < 42) {
      return;
    }

    didSwipe.current = true;
    moveSlide(deltaX < 0 ? 1 : -1);
  };

  const handlePointerCancel = () => {
    pointerStartX.current = null;
  };

  return (
    <section className="screen recommend-screen recommend-screen--app">
      {/* 배너 & 캐러셀 (기존 유지) */}
      <section className="recommend-preview" aria-label="recommended preview">
        <div className="recommend-promo-shot" aria-hidden="true">
          <img src="/assets/reference/recommend-banner.jpg" alt="" />
        </div>

        <div
          className="recommend-hero-carousel"
          aria-label="recommended swipe previews"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          {[2, 1].map((depth) => {
            const slide = heroSlides[(activeSlide + depth) % heroSlides.length];
            return (
              <span
                className={`recommend-stack-preview recommend-stack-preview--${depth}`}
                aria-hidden="true"
                key={`${slide.id}-${depth}`}
              >
                {slide.isLiveCard ? (
                  <video src={slide.image} muted playsInline loop style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '21px' }} />
                ) : (
                  <img src={slide.image} alt="" />
                )}
              </span>
            );
          })}

          <button
            type="button"
            className="recommend-hero-card is-active"
            aria-label={`open recommended preview for ${activeHero.title}`}
            onClick={() => {
              if (didSwipe.current) {
                didSwipe.current = false;
                return;
              }
              onOpenPlayer(activeHero.id);
            }}
            key={activeHero.id}
          >
            {activeHero.isLiveCard ? (
              <video src={activeHero.image} autoPlay={activeSlide === 0} muted playsInline loop style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '21px' }} />
            ) : (
              <img src={activeHero.image} alt="" />
            )}
            {activeHero.usesReferenceUi ? null : (
              <>
                <span className="recommend-hero-shade" />
                <span className="recommend-hero-info">
                  <strong>{activeHero.title}</strong>
                  <span className="recommend-hero-owner">
                    <span className="recommend-owner-avatar" />
                    {activeHero.broadcaster}
                  </span>
                </span>
                <span className="recommend-hero-meta">
                  <ViewerBadge count={activeHero.viewers} />
                  <span>{activeHero.tag}</span>
                </span>
                <span className="recommend-hero-index" aria-hidden="true">
                  {activeSlide + 1} / {heroSlides.length}
                </span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* 스트리머 프로필 */}
      <BroadcasterStrip broadcasters={broadcasters} />

      {/* 라이브 방송 리스트 */}
      <section className="live-list">
        {liveItems.slice(0, 2).map((item) => (
          <LiveCard
            key={item.id}
            item={item}
            onOpenPlayer={onOpenPlayer}
            variant="default"
          />
        ))}
      </section>

      {/* Catch 섹션 */}
      <section className="recommend-section catch-section" aria-label="catch content">
        <div className="section-header">
          <div className="catch-header">
            <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="catch-icon-svg">
              <path d="M0 5.95624V14.0458C0 18.7186 5.37295 21.5885 9.50859 19.0628L16.1317 15.0181C19.9561 12.6825 19.9561 7.31953 16.1317 4.98394L9.50859 0.939175C5.37295 -1.58649 0 1.2834 0 5.95624Z" fill="#0182FF"/>
              <path d="M9.09686 4.6499C9.78647 4.6499 10.4579 4.80315 11.0765 5.09504C11.7508 5.41321 12.0395 6.21776 11.7213 6.89205C11.423 7.52419 10.6972 7.81743 10.0521 7.58945L9.92429 7.53685C9.66277 7.41345 9.38435 7.3499 9.09686 7.3499C7.89007 7.3499 6.85039 8.50623 6.85039 9.9999C6.85039 11.4936 7.89007 12.6499 9.09686 12.6499C9.32253 12.6499 9.54258 12.6108 9.75328 12.5342L9.90949 12.4699C10.5863 12.1571 11.3885 12.4522 11.7013 13.1291C12.014 13.8059 11.7189 14.6081 11.0421 14.9208C10.4329 15.2023 9.77357 15.3499 9.09686 15.3499C6.33111 15.3499 4.15039 12.9245 4.15039 9.9999C4.15039 7.0753 6.33111 4.6499 9.09686 4.6499Z" fill="white"/>
            </svg>
            <h2>Catch</h2>
          </div>
        </div>
        <div className="catch-scroll">
          {liveItems.slice(0, 3).map((item) => (
            <div key={item.id} className="catch-card-wrapper">
              <button
                className="catch-card"
                onClick={() => onOpenPlayer(item.id)}
                aria-label={`open catch content`}
              >
                <video src={item.media} muted playsInline loop style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '8px' }} />
                <span className="catch-badge">스토리</span>
              </button>
              <div className="catch-info">
                <p className="catch-title">{item.title}</p>
                <div className="catch-stats">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="catch-viewer-icon">
                    <path d="M12 5C7 5 2.73 8.11 1 12.46c1.73 4.35 6 7.54 11 7.54s9.27-3.19 11-7.54C21.27 8.11 17 5 12 5zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="currentColor" />
                  </svg>
                  <span className="catch-viewers">{item.viewers.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="recommend-section category-section" aria-label="category">
        <div className="section-header">
          <h2>카테고리</h2>
        </div>
        <div className="category-scroll">
          {[
            { image: '/assets/reference/a04d9a892d2e9a8d05b6fddd4c5f4f8a4d11fb5d.png', title: '배틀 그라운드', tags: ['드롭스', '토크'], viewers: 235 },
            { image: '/assets/reference/c8f7743530fab1c504b9f27b01a5758a8cbc8d4b.png', title: '리그오브레전드', tags: ['보라', '토크'], viewers: 235 },
            { image: '/assets/reference/649f593840cd12791e8f9005ac5f8d54d181c4fa.png', title: '던전앤파이터', tags: ['보라', '토크'], viewers: 235 },
            { image: '/assets/reference/e8f94d47993c896733499a4ef03aec6401393c9d.png', title: '서든어택', tags: ['보라', '토크'], viewers: 235 },
            { image: '/assets/reference/a04d9a892d2e9a8d05b6fddd4c5f4f8a4d11fb5d.png', title: '배틀 그라운드', tags: ['드롭스', '토크'], viewers: 235 },
            { image: '/assets/reference/c8f7743530fab1c504b9f27b01a5758a8cbc8d4b.png', title: '리그오브레전드', tags: ['보라', '토크'], viewers: 235 },
          ].map((category, index) => (
            <div key={index} className="category-item">
              <button className="category-card" aria-label={`category ${category.title}`}>
                <img src={category.image} alt={category.title} />
                <span className="category-badge">
                  <span className="category-badge-dot" />
                  {category.viewers}
                </span>
              </button>
              <div className="category-info">
                <p className="category-title">{category.title}</p>
                <div className="category-tags">
                  {category.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="category-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 더 많은 라이브 방송 */}
      <section className="live-list">
        {liveItems.slice(2, 4).map((item) => (
          <LiveCard
            key={item.id}
            item={item}
            onOpenPlayer={onOpenPlayer}
            variant="default"
          />
        ))}
      </section>

      {/* 전체 방송 가기 */}
      <section className="view-all-section">
        <div className="view-all-content">
          <p>더 많은 방송이 보고 싶다면?</p>
          <button className="view-all-button">
            <span>전체 방송 가기</span>
          </button>
        </div>
      </section>

      {/* 선호 스트리머 VOD */}
      <section className="recommend-section vod-section" aria-label="preferred streamer vod">
        <div className="section-header">
          <h2>선호 스트리머 VOD</h2>
        </div>
        <div className="vod-scroll">
          {vodItems.map((item) => (
            <div key={item.id} className="vod-card-wrapper">
              <button
                className="vod-card"
                onClick={() => onOpenPlayer(item.id)}
                aria-label={`open vod`}
              >
                <video src={item.media} muted playsInline loop style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '8px' }} />
                <span className="vod-badge">다시보기</span>
              </button>
              <div className="vod-bottom">
                <div className="vod-info">
                <span className="vod-avatar">
                  <img src={item.avatar} alt="" />
                </span>
                <div className="vod-details">
                  <div className="vod-broadcaster">
                    <span>{item.broadcaster}</span>
                  </div>
                  <p className="vod-title">{item.title}</p>
                  <div className="vod-meta">
                    <span className="vod-viewers">{item.viewers.toLocaleString()} 조회</span>
                    <span className="vod-divider">·</span>
                    <span className="vod-date">2일 전</span>
                  </div>
                  <div className="vod-tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="vod-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
                <button type="button" className="vod-more-button" aria-label="more options">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 추천 스트리머 */}
      <section className="recommend-section streamer-section" aria-label="recommended streamers">
        <div className="section-header">
          <h2>추천 스트리머</h2>
        </div>
        <div className="streamer-scroll">
          {recommendedStreamers.map((broadcaster, index) => (
            <div key={broadcaster.id} className="streamer-card">
              <video src={liveItems[index % liveItems.length].media} autoPlay muted playsInline loop className="streamer-card-video" />
              <div className="streamer-card-content">
                <button
                  type="button"
                  className={`streamer-avatar-wrapper ${broadcaster.isLive ? 'live' : ''}`}
                  onClick={() => onOpenPlayer(liveItems[index % liveItems.length].id)}
                  aria-label={`open ${broadcaster.name}'s live`}
                  style={{ border: 'none', padding: 0, cursor: 'pointer' }}
                >
                  <img src={broadcaster.avatar} alt={broadcaster.name} className="streamer-avatar" />
                </button>
                <p className="streamer-name">{broadcaster.name}</p>
                <button
                  className={`streamer-follow-btn ${followState[broadcaster.id] ? 'following' : ''}`}
                  onClick={() => toggleFollow(broadcaster.id)}
                  aria-label={followState[broadcaster.id] ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <Star
                    size={16}
                    fill={followState[broadcaster.id] ? '#FFD700' : 'none'}
                    color={followState[broadcaster.id] ? '#FFD700' : 'currentColor'}
                    strokeWidth={followState[broadcaster.id] ? 0 : 2}
                  />
                  <span>{followState[broadcaster.id] ? '즐겨찾기' : '즐겨찾기'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </section>
  );
}
