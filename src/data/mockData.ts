export type MainTab = 'explore' | 'recommend' | 'issue' | 'live';

export type Banner = {
  title: string;
  subtitle: string;
  image: string;
  tone: 'blue' | 'gray';
};

export type Broadcaster = {
  id: string;
  name: string;
  avatar: string;
  isLive?: boolean;
};

export type LiveItem = {
  id: string;
  broadcaster: string;
  title: string;
  viewers: number;
  tags: string[];
  avatar: string;
  media: string;
  category: 'game' | 'radio' | 'sports';
};

export const mainTabs: Array<{ id: MainTab; label: string; icon?: string }> = [
  { id: 'explore', label: '탐색', icon: 'leaf' },
  { id: 'recommend', label: '추천' },
  { id: 'issue', label: '이슈' },
  { id: 'live', label: '라이브' },
];

export const recommendBanner: Banner = {
  title: '더운 날엔 컬쳐캐쉬로 시원하게',
  subtitle: '컬쳐캐쉬 충전부터 사용까지 간편하게',
  image: '/assets/reference/recommend-upper.jpg',
  tone: 'blue',
};

export const liveBanner: Banner = {
  title: 'Mercedes SL Roadster',
  subtitle: '강렬한 움직임을 실시간으로 보여준다.',
  image: 'https://x-ll-p-a8b2c4.web.app/assets/mercedes_ad-CnD5m54f.png',
  tone: 'gray',
};

export const liveItems: LiveItem[] = [
  {
    id: 'minkyo',
    broadcaster: '김민교.',
    title: '김민교 LCK DK vs NS #LckWatchParty',
    viewers: 8574,
    tags: ['한국어', '먹방'],
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119095/0_minkyo_gi0ioe.mp4',
    category: 'game',
  },
  {
    id: 'gomi',
    broadcaster: '마이고미_',
    title: '4일차 모바일. 오늘은 라디오로 시작!',
    viewers: 8574,
    tags: ['한국어', '버추얼'],
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119101/1_gomi_pewdfm.mp4',
    category: 'radio',
  },
  {
    id: 'gamst',
    broadcaster: '감스트',
    title: '감스트 출동 서버 5강 갑니다 시작합니다',
    viewers: 7726,
    tags: ['한국어', '스타'],
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119092/2_gamst_vt6nnk.mp4',
    category: 'game',
  },
  {
    id: 'namsoon',
    broadcaster: '남순',
    title: '남순 라디오 말문 열었습니다',
    viewers: 5595,
    tags: ['한국어', '보라'],
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119105/3_namsoon_neoij4.mp4',
    category: 'radio',
  },
  {
    id: 'minkyo-2',
    broadcaster: '김민교.',
    title: '김민교 LCK DK vs NS #LckWatchParty',
    viewers: 8574,
    tags: ['한국어', '먹방'],
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119095/0_minkyo_gi0ioe.mp4',
    category: 'game',
  },
  {
    id: 'gomi-2',
    broadcaster: '마이고미_',
    title: '4일차 모바일. 오늘은 라디오로 시작!',
    viewers: 8574,
    tags: ['한국어', '버추얼'],
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119101/1_gomi_pewdfm.mp4',
    category: 'radio',
  },
  {
    id: 'gamst-2',
    broadcaster: '감스트',
    title: '감스트 출동 서버 5강 갑니다 시작합니다',
    viewers: 7726,
    tags: ['한국어', '스타'],
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119092/2_gamst_vt6nnk.mp4',
    category: 'game',
  },
  {
    id: 'namsoon-2',
    broadcaster: '남순',
    title: '남순 라디오 말문 열었습니다',
    viewers: 5595,
    tags: ['한국어', '보라'],
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119105/3_namsoon_neoij4.mp4',
    category: 'radio',
  },
];

export const recommendHero: LiveItem = {
  id: 'woogi',
  broadcaster: '우기성',
  title: '[WG]정신차리고 왔습니다 혜자샵 인형...',
  viewers: 77,
  tags: ['토크/캠방'],
  avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
  media:
    'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119076/4_cineti_x8wnq8.mp4',
  category: 'radio',
};

export const broadcasters: Broadcaster[] = [
  {
    id: 'gamst',
    name: '감스트',
    avatar: '/assets/reference/avatar-gamst.jpg',
  },
  {
    id: 'taoyo',
    name: '타요*',
    avatar: '/assets/reference/avatar-taoyo.jpg',
  },
  {
    id: 'mawang',
    name: '마왕루야',
    avatar: '/assets/reference/avatar-mawang.jpg',
  },
  {
    id: 'doochi',
    name: '두치와뿌꾸',
    avatar: '/assets/reference/avatar-doochi.jpg',
  },
  {
    id: 'jjam',
    name: '짬타수아',
    avatar: '/assets/reference/avatar-jjam.jpg',
  },
];

export const recommendedStreamers: Broadcaster[] = [
  {
    id: 'nova',
    name: '노바',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    isLive: true,
  },
  {
    id: 'luna',
    name: '루나✨',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    isLive: true,
  },
  {
    id: 'raven',
    name: '레이븐',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    isLive: true,
  },
  {
    id: 'echo',
    name: '에코',
    avatar: 'https://images.unsplash.com/photo-1517849845537-1d51a20414de?w=100&h=100&fit=crop',
    isLive: false,
  },
  {
    id: 'iris',
    name: '아이리스',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    isLive: true,
  },
];

export const recommendFeed: LiveItem[] = [
  {
    ...liveItems[1],
    id: 'recommend-maple',
    broadcaster: '파이요',
    title: '파이요 방송에 참여해보세요',
    viewers: 7336,
    tags: ['한국어', '스타'],
  },
  {
    ...liveItems[2],
    id: 'recommend-openrun',
    broadcaster: '마왕루야',
    title: '버추얼 친구들과 함께하는 오늘의 추천',
    viewers: 42919,
    tags: ['한국어', '버추얼'],
  },
];

export const relatedItems: LiveItem[] = [
  {
    id: 'related-cineti-1',
    broadcaster: '시네티팬1',
    title: '시네티님 영상 정주행 오늘은 90분 특집',
    viewers: 385,
    tags: ['한국어', 'LOL'],
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119110/5_harami_swt8lm.mp4',
    category: 'radio',
  },
  {
    id: 'related-cineti-2',
    broadcaster: '박하사탕',
    title: '[시네티] 추억의 가요 리액션 방송',
    viewers: 321,
    tags: ['한국어', '먹방'],
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119095/6_shijo_p6q4rg.mp4',
    category: 'radio',
  },
];

export const vodItems: LiveItem[] = [
  {
    id: 'vod-minkyo-1',
    broadcaster: '김민교.',
    title: '김민교 LCK DK vs NS #LckWatchParty',
    viewers: 8574,
    tags: ['한국어', '먹방'],
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119095/0_minkyo_gi0ioe.mp4',
    category: 'game',
  },
  {
    id: 'vod-gomi-1',
    broadcaster: '마이고미_',
    title: '4일차 모바일. 오늘은 라디오로 시작!',
    viewers: 8574,
    tags: ['한국어', '버추얼'],
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119101/1_gomi_pewdfm.mp4',
    category: 'radio',
  },
  {
    id: 'vod-gamst-1',
    broadcaster: '감스트',
    title: '감스트 출동 서버 5강 갑니다 시작합니다',
    viewers: 7726,
    tags: ['한국어', '스타'],
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119092/2_gamst_vt6nnk.mp4',
    category: 'game',
  },
  {
    id: 'vod-namsoon-1',
    broadcaster: '남순',
    title: '남순 라디오 말문 열었습니다',
    viewers: 5595,
    tags: ['한국어', '보라'],
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
    media:
      'https://res.cloudinary.com/dqlcjjm9b/video/upload/q_auto/v1775119105/3_namsoon_neoij4.mp4',
    category: 'radio',
  },
];

export const chatMessages = [
  { nickname: '채팅이', content: '채팅을 시작합니다.', type: 'viewer' },
  { nickname: '하박박수', content: '와 진짜 대박이네요!', type: 'fan' },
  { nickname: '오버액션', content: '채팅창 속도 무엇 ㅋㅋㅋ', type: 'bigfan' },
  { nickname: '오늘도화이팅', content: '김민교 폼 미쳤다', type: 'viewer' },
  { nickname: '리스펙트', content: '리스트 색감 진짜 깔끔하네요', type: 'fan' },
];
