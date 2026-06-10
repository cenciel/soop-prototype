import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/Live전체/svg-6zcp6dxmwy";
import imgContentPublicThumbInfoProfile from "../imports/Live전체/ff629cc07c0b23c63647492ae80326bd007aeeb1.png";
import imgContentPublicThumbInfoProfile1 from "../imports/Live전체/f010bfe47da80e6554146cb0ecf3097eb2cf2d74.png";
import imgContentPublicThumbInfoProfile2 from "../imports/Live전체/e8708db5abafe80aef6b2f06ad7ecdd815f6bcdb.png";
import imgContentPublicThumbInfoProfile3 from "../imports/Live전체/333afdbf20ff8fbdba7e68d377aab28f2d7fac20.png";
import imgContentPublicThumbInfoProfile4 from "../imports/Live전체/72ccd4f81a78a6294417ff2cdde4e8e226ff3551.png";
import imgContentPublicThumbInfoProfile5 from "../imports/Live전체/0a2e232a7d028643e9bc993c198a0557eed7cf72.png";
import imgContentPublicThumbInfoProfile6 from "../imports/Live전체/8afec9a36a8965b38725b84ee681551d3a5e296b.png";
import imgContentPublicThumbInfoProfile7 from "../imports/Live전체/2671b3b0a3b50f647616469d5e2f84ae91d78991.png";
import imgContentPublicThumbInfoProfile8 from "../imports/Live전체/ba398e9e915faa31b070fd012c41b0ba52e4f16e.png";
import img20110 from "../imports/Live전체/62d105c496f69fe63c59c355845ad8753327d124.png";
import img4011 from "../imports/Live전체/89143cdab0b9443d5913d1ad7aa8d748937f84ce.png";
import imgPortrait from "../imports/Live전체/26d1846a83695c1c65344e4009690bae3966a8f5.png";
import imgPortrait1 from "../imports/Live전체/adcda73a535c8f2b8d71cea2f48d443d7e5620a3.png";
import img11 from "../imports/Live전체/53f10169853dede19915a235593acf028092a365.png";

// Game thumbnail images from Unsplash
const GAME_THUMBNAILS = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1548003693-b55d51032288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1612151388040-9ec75d2de8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1628565239608-47549a1126e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1560419398-c36ab8c174b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1548686304-5c3be888a00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  "https://images.unsplash.com/photo-1627244714766-94dab62ed964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
];

// Game cover (portrait) images for category section
const GAME_COVERS = [
  "https://images.unsplash.com/photo-1715279240000-9a50953e327d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  "https://images.unsplash.com/photo-1573349836982-d14092e1665e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  "https://images.unsplash.com/photo-1780442491245-90152c92d84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  "https://images.unsplash.com/photo-1665041982909-8a86864a1e49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  "https://images.unsplash.com/photo-1730578726542-383486366699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  "https://images.unsplash.com/photo-1736882176361-469e7692e22f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
];

const profileImages = [
  imgContentPublicThumbInfoProfile,
  imgContentPublicThumbInfoProfile1,
  imgContentPublicThumbInfoProfile2,
  imgContentPublicThumbInfoProfile3,
  imgContentPublicThumbInfoProfile4,
  imgContentPublicThumbInfoProfile5,
  imgContentPublicThumbInfoProfile6,
];

const portraitImages = [imgPortrait, imgPortrait1, imgContentPublicThumbInfoProfile7, imgContentPublicThumbInfoProfile8];

const STREAMERS = [
  { nick: "일이삼사오육", profile: 0 },
  { nick: "길경우길경...", profile: 1 },
  { nick: "신주아", profile: 2 },
  { nick: "이상호", profile: 3 },
  { nick: "그런달라스", profile: 4 },
  { nick: "루피루피", profile: 5 },
  { nick: "슈퍼도모", profile: 6 },
];

const LIVE_STREAMS = [
  {
    id: 1,
    thumbnail: GAME_THUMBNAILS[0],
    viewers: 23541,
    streamer: "BJ흔한",
    profileImg: 0,
    title: "[생]롤드컵 선발전 킹존:SB 5전3선승 롤lol",
    tags: ["롤", "e스포츠"],
    chatMessages: [
      { nick: "그런달라스", color: "#dc3585", msg: "ㅋㅋㅋ 겁나 우끼네" },
      { nick: "닉네임여섯자", color: "#158304", msg: "굳굳굳~" },
      { nick: "슈퍼도모슈퍼도모", color: "#6518c8", msg: "같이가자고 해봐 ㅋㅋㅋㅋ" },
      { nick: "루피루피", color: "#e07e0a", msg: "ㅋㅋㅋㅋㅋㅋㅋ" },
      { nick: "김영민", color: "#0082FF", msg: "저도 보고 있어요" },
    ],
  },
  {
    id: 2,
    thumbnail: GAME_THUMBNAILS[1],
    viewers: 15820,
    streamer: "게임왕배틀",
    profileImg: 1,
    title: "[배그] 솔로 스쿼드 도전! 닭저녁 먹방 예정",
    tags: ["배그", "먹방"],
    chatMessages: [
      { nick: "팬클럽1호", color: "#dc3585", msg: "화이팅!!!" },
      { nick: "배틀킹", color: "#158304", msg: "오늘도 치킨 ㄱ" },
      { nick: "고수가왔다", color: "#6518c8", msg: "실력 보여줘요" },
    ],
  },
  {
    id: 3,
    thumbnail: GAME_THUMBNAILS[2],
    viewers: 8923,
    streamer: "스타리그BJ",
    profileImg: 2,
    title: "스타1 레전드 프로경기 리뷰 & 해설 방송",
    tags: ["스타크래프트", "e스포츠"],
    chatMessages: [
      { nick: "올드팬", color: "#dc3585", msg: "추억이다ㅠ" },
      { nick: "임요환팬", color: "#158304", msg: "테란 화이팅" },
      { nick: "토스팬", color: "#6518c8", msg: "저그가 최고죠" },
    ],
  },
  {
    id: 4,
    thumbnail: GAME_THUMBNAILS[3],
    viewers: 31205,
    streamer: "먹방퀸지수",
    profileImg: 3,
    title: "신메뉴 탕후루 도전 ASMR 먹방",
    tags: ["먹방", "ASMR"],
    chatMessages: [
      { nick: "먹방팬", color: "#dc3585", msg: "맛있겠다~" },
      { nick: "다이어터", color: "#158304", msg: "저 대신 드세요" },
      { nick: "탕후루러버", color: "#6518c8", msg: "어디 꺼예요?" },
    ],
  },
];

const CATEGORIES = [
  { name: "배틀 그라운드", cover: GAME_COVERS[0], viewers: 12500, tags: ["드롭스", "토크"] },
  { name: "리그오브레전드", cover: GAME_COVERS[1], viewers: 28300, tags: ["보라", "토크"] },
  { name: "던전앤파이터", cover: GAME_COVERS[2], viewers: 9800, tags: ["보라", "토크"] },
  { name: "서든어택", cover: GAME_COVERS[3], viewers: 5200, tags: ["보라", "토크"] },
  { name: "오버워치", cover: GAME_COVERS[4], viewers: 18700, tags: ["보라", "토크"] },
  { name: "발로란트", cover: GAME_COVERS[5], viewers: 22100, tags: ["보라", "토크"] },
];

const CATCH_STREAMS = [
  { thumbnail: GAME_THUMBNAILS[4], portrait: portraitImages[0], title: "최대 2줄 제목 최대 2줄 제목 최대 2줄...", viewers: 234, tags: ["게임", "롤"] },
  { thumbnail: GAME_THUMBNAILS[5], portrait: portraitImages[1], title: "배그 솔로 치킨 도전 방송입니다", viewers: 891, tags: ["배그", "FPS"] },
  { thumbnail: GAME_THUMBNAILS[6], portrait: portraitImages[2], title: "스트리머 토크 & 잡담 방송", viewers: 1204, tags: ["토크", "일상"] },
];

function formatViewers(n: number) {
  if (n >= 10000) return `${Math.floor(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function SoopLogo() {
  return (
    <div className="absolute inset-[9.68%_3.28%]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.7544 21.8564">
        <g>
          <path d={svgPaths.p2cdde800} fill="white" />
          <path d={svgPaths.p2c225b00} fill="url(#paint0_linear_logo)" />
          <path d={svgPaths.p30d68c00} fill="white" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_logo" x1="22.1447" x2="54.145" y1="-1.03544" y2="24.5041">
            <stop stopColor="#0082FF" />
            <stop offset="0.42" stopColor="#0A96FF" />
            <stop offset="0.56" stopColor="#05BCFF" />
            <stop offset="0.76" stopColor="#00F0FF" />
            <stop offset="0.94" stopColor="#82FFB0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function GradientCircle({ src }: { src: string }) {
  return (
    <div className="relative shrink-0 size-[72px]">
      <div className="absolute left-[2px] size-[68px] top-[2px]">
        <div className="absolute inset-[-2.94%]">
          <svg className="block size-full" fill="none" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="35" stroke="url(#grad_circle)" strokeWidth="2" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="grad_circle" x1="8.94688" x2="84.7922" y1="-1.23644" y2="32.279">
                <stop stopColor="#0082FF" />
                <stop offset="0.56" stopColor="#05BCFF" />
                <stop offset="0.94" stopColor="#82FFB0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[5px] size-[62px] top-[5px] overflow-hidden rounded-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={src} />
      </div>
    </div>
  );
}

function LiveBadge({ viewers }: { viewers: number }) {
  return (
    <div className="absolute bg-[rgba(23,25,28,0.8)] flex gap-[5px] items-center left-[8px] px-[6px] py-[1.5px] rounded-[10px] top-[8px]">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="#FF2F00" r="3" />
        </svg>
      </div>
      <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-white whitespace-nowrap">{formatViewers(viewers)}</p>
    </div>
  );
}

function TagChip({ label, gradient }: { label: string; gradient?: boolean }) {
  if (gradient) {
    return (
      <div
        className="flex h-[20px] items-center justify-center min-w-[37px] px-[8px] rounded-[10px] relative"
        style={{ backgroundImage: "linear-gradient(109.334deg, rgba(119,44,232,0.2) 7.7763%, rgba(1,130,255,0.15) 83.284%)" }}
      >
        <div className="absolute border border-[#b985f5] inset-0 rounded-[10px]" />
        <span
          className="font-['Pretendard:Medium',sans-serif] text-[12px] text-transparent bg-clip-text"
          style={{ backgroundImage: "linear-gradient(105.996deg, rgb(188,106,230) 5.2289%, rgb(66,121,255) 94.371%)" }}
        >
          {label}
        </span>
      </div>
    );
  }
  return (
    <div className="bg-[rgba(145,150,161,0.15)] flex h-[20px] items-center justify-center min-w-[37px] px-[8px] rounded-[10px]">
      <span className="font-['Pretendard:Regular',sans-serif] text-[#757b8a] text-[12px]">{label}</span>
    </div>
  );
}

function StreamCard({ stream, onClick }: { stream: typeof LIVE_STREAMS[0]; onClick: () => void }) {
  const [viewers, setViewers] = useState(stream.viewers);

  useEffect(() => {
    const iv = setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 10) - 3);
    }, 2000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div
      className="drop-shadow-[0px_10px_20px_rgba(0,0,0,0.08)] flex flex-col items-start relative shrink-0 w-full cursor-pointer active:scale-[0.99] transition-transform"
      onClick={onClick}
    >
      {/* Thumbnail area */}
      <div className="aspect-[336/224] flex flex-col items-start overflow-clip relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
        <div className="absolute inset-0 bg-black">
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={stream.thumbnail} />
        </div>
        <LiveBadge viewers={viewers} />
        {/* Chat overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-[8px] pb-[4px]" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
          <div className="flex flex-col gap-[2px]">
            {stream.chatMessages.slice(-3).map((msg, i) => (
              <div key={i} className="flex gap-[4px] items-center">
                <span className="font-['Pretendard:Medium',sans-serif] text-[11px] whitespace-nowrap" style={{ color: msg.color }}>{msg.nick}</span>
                <span className="font-['Pretendard:Regular',sans-serif] text-[11px] text-white opacity-90 truncate">{msg.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Info area */}
      <div className="bg-[#1e2028] min-h-[86px] relative rounded-bl-[20px] rounded-br-[20px] shrink-0 w-full">
        <div className="flex gap-[10px] items-start pl-[12px] py-[12px] pr-[4px]">
          <div className="shrink-0 size-[34px] overflow-hidden rounded-full">
            <img alt="" className="w-full h-full object-cover" src={profileImages[stream.profileImg]} />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
            <p className="font-['Pretendard:Medium',sans-serif] text-[15px] text-white whitespace-nowrap">{stream.streamer}</p>
            <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#acb0b9] line-clamp-2">{stream.title}</p>
            <div className="flex gap-[4px] flex-wrap">
              {stream.tags.map((tag, i) => <TagChip key={i} label={tag} gradient={i === 0} />)}
            </div>
          </div>
          <div className="shrink-0 w-[32px] flex items-center justify-center pt-[4px]">
            <svg width="3" height="13" fill="none" viewBox="0 0 3 13">
              <path d={svgPaths.p18a2ab80} fill="#757b8a" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ cat }: { cat: typeof CATEGORIES[0] }) {
  return (
    <div className="flex flex-col gap-[8px] shrink-0 w-[101px]">
      <div className="aspect-[100/133] overflow-clip relative rounded-[16px] w-full">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={cat.cover} />
        <div className="absolute bg-[rgba(23,25,28,0.8)] flex gap-[3px] h-[18px] items-center left-[8px] px-[6px] rounded-[9px] top-[8px]">
          <div className="size-[5px]">
            <svg className="block size-full" viewBox="0 0 5 5" fill="none">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#FF2F00" />
            </svg>
          </div>
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[12px] text-white">{formatViewers(cat.viewers)}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] px-[4px]">
        <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-white whitespace-nowrap">{cat.name}</p>
        <div className="flex gap-[4px] flex-wrap">
          {cat.tags.map((tag, i) => <TagChip key={i} label={tag} gradient={i === 0} />)}
        </div>
      </div>
    </div>
  );
}

function CatchCard({ stream }: { stream: typeof CATCH_STREAMS[0] }) {
  return (
    <div className="flex flex-col gap-[8px] shrink-0 w-[158px]">
      <div className="aspect-[158/263] overflow-clip relative rounded-[16px] w-full">
        <div className="absolute inset-0 overflow-clip">
          <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" src={stream.thumbnail} />
          <div className="absolute inset-0 backdrop-blur-[10px] bg-[rgba(23,25,28,0.1)]" />
          <img alt="" className="absolute inset-0 w-full h-full object-cover" src={stream.portrait} />
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
          <p className="font-['Pretendard:Regular',sans-serif] text-[14px] text-[#acb0b9] line-clamp-2">{stream.title}</p>
          <div className="flex items-center gap-[4px]">
            <svg width="8" height="10" fill="none" viewBox="0 0 7.08444 7.54204">
              <path clipRule="evenodd" d={svgPaths.p3802c1f0} fill="#757b8a" fillRule="evenodd" />
            </svg>
            <span className="font-['Pretendard:Regular',sans-serif] text-[#757b8a] text-[12px]">{stream.viewers}</span>
          </div>
        </div>
        <div className="shrink-0 w-[32px] flex items-center justify-center">
          <svg width="3" height="13" fill="none" viewBox="0 0 3 13">
            <path d={svgPaths.p18a2ab80} fill="#757b8a" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const GRADIENT_COLORS = [
  "from-blue-500/30 via-blue-600/20 to-black/60",
  "from-purple-500/30 via-purple-600/20 to-black/60",
  "from-pink-500/30 via-pink-600/20 to-black/60",
  "from-cyan-500/30 via-cyan-600/20 to-black/60",
  "from-orange-500/30 via-orange-600/20 to-black/60",
  "from-red-500/30 via-red-600/20 to-black/60",
];

function StreamerCard({ streamer, onStreamClick }: { streamer: typeof RECOMMENDED_STREAMERS[0]; onStreamClick?: (stream: typeof LIVE_STREAMS[0]) => void }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const gradientClass = GRADIENT_COLORS[streamer.id % GRADIENT_COLORS.length];
  const isLive = [1, 3, 5].includes(streamer.id);

  const handleProfileClick = () => {
    if (isLive && onStreamClick) {
      const liveStreamIndex = (streamer.id - 1) % LIVE_STREAMS.length;
      onStreamClick(LIVE_STREAMS[liveStreamIndex]);
    }
  };

  return (
    <div className="flex flex-col shrink-0 w-[148px] rounded-[16px] overflow-hidden bg-[#1e2028] drop-shadow-[0px_4px_12px_rgba(0,0,0,0.3)]">
      {/* Background gradient area */}
      <div className={`relative h-[160px] overflow-hidden bg-gradient-to-b ${gradientClass}`}></div>
      {/* Profile and info area */}
      <div className="flex flex-col items-center px-[12px] pb-[16px] -mt-[32px] relative z-10">
        {isLive ? (
          <button onClick={handleProfileClick} className="relative shrink-0 size-[72px] mb-[8px] cursor-pointer active:scale-95 transition-transform">
            <div className="absolute left-[2px] size-[68px] top-[2px]">
              <div className="absolute inset-[-2.94%]">
                <svg className="block size-full" fill="none" viewBox="0 0 72 72">
                  <circle cx="36" cy="36" r="35" stroke="url(#grad_circle_streamer)" strokeWidth="2" />
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="grad_circle_streamer" x1="8.94688" x2="84.7922" y1="-1.23644" y2="32.279">
                      <stop stopColor="#0082FF" />
                      <stop offset="0.56" stopColor="#05BCFF" />
                      <stop offset="0.94" stopColor="#82FFB0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="absolute left-[5px] size-[62px] top-[5px] overflow-hidden rounded-full">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={(streamer as any).profileImg || profileImages[streamer.profile]} />
            </div>
          </button>
        ) : (
          <div className="size-[64px] rounded-full overflow-hidden border-[3px] border-[#1e2028] mb-[8px]">
            <img alt="" className="w-full h-full object-cover" src={(streamer as any).profileImg || profileImages[streamer.profile]} />
          </div>
        )}
        <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-white mb-[8px] text-center truncate w-full">
          {streamer.name}
        </p>
        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={`w-full h-[32px] rounded-[16px] font-['Pretendard:SemiBold',sans-serif] text-[13px] transition-all ${
            isFollowing
              ? "bg-[#1e2028] text-[#acb0b9] border border-[#757b8a]"
              : "bg-[#0082FF] text-white hover:bg-[#0066cc]"
          }`}
        >
          {isFollowing ? "팔로잉" : "Follow"}
        </button>
      </div>
    </div>
  );
}

function AutoPlaySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LIVE_STREAMS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stream = LIVE_STREAMS[currentIndex];

  return (
    <div className="relative w-full aspect-[336/224] overflow-hidden rounded-[20px] drop-shadow-[0px_10px_20px_rgba(0,0,0,0.08)]">
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={stream.thumbnail} />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Live Badge */}
      <div className="absolute top-[8px] left-[8px] bg-[rgba(23,25,28,0.8)] flex gap-[5px] items-center px-[6px] py-[1.5px] rounded-[10px]">
        <div className="relative shrink-0 size-[6px]">
          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 6 6">
            <circle cx="3" cy="3" fill="#FF2F00" r="3" />
          </svg>
        </div>
        <p className="font-['Pretendard:SemiBold',sans-serif] text-[14px] text-white whitespace-nowrap">{formatViewers(stream.viewers)}</p>
      </div>

      {/* Streamer Info */}
      <div className="absolute bottom-0 left-0 right-0 p-[12px] flex items-center gap-[8px]">
        <div className="size-[40px] rounded-full overflow-hidden border-2 border-white">
          <img alt="" className="w-full h-full object-cover" src={profileImages[stream.profileImg]} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Pretendard:SemiBold',sans-serif] text-[13px] text-white">{stream.streamer}</p>
          <p className="font-['Pretendard:Regular',sans-serif] text-[11px] text-[#acb0b9] line-clamp-1">{stream.title}</p>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-[8px] right-[12px] flex gap-[4px]">
        {LIVE_STREAMS.map((_, i) => (
          <div
            key={i}
            className={`h-[6px] rounded-full transition-all ${
              i === currentIndex ? "w-[16px] bg-white" : "w-[6px] bg-[rgba(255,255,255,0.4)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function LivePlayerModal({ stream, onClose }: { stream: typeof LIVE_STREAMS[0]; onClose: () => void }) {
  const [viewers, setViewers] = useState(stream.viewers);
  const [messages, setMessages] = useState(stream.chatMessages);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const sampleChats = [
    "ㅋㅋㅋㅋㅋ", "대박이다", "와 진짜", "레전드", "화이팅!!!", "굳굳굳", "ㅠㅠ", "오 진짜요?", "ㄷㄷ", "존잼ㅋㅋ"
  ];
  const nickColors = ["#dc3585", "#158304", "#6518c8", "#e07e0a", "#0082FF", "#63a4e7"];
  const nicks = ["게임팬123", "롤마스터", "배그킹", "방송매니아", "유저1234", "팬클럽회원"];

  useEffect(() => {
    const iv = setInterval(() => {
      setViewers((v) => v + Math.floor(Math.random() * 8) - 2);
      const newMsg = {
        nick: nicks[Math.floor(Math.random() * nicks.length)],
        color: nickColors[Math.floor(Math.random() * nickColors.length)],
        msg: sampleChats[Math.floor(Math.random() * sampleChats.length)],
      };
      setMessages((prev) => [...prev.slice(-20), newMsg]);
    }, 1500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendChat = () => {
    if (!chatInput.trim()) return;
    setMessages((prev) => [...prev, { nick: "나", color: "#0082FF", msg: chatInput }]);
    setChatInput("");
  };

  return (
    <div className="absolute inset-0 z-50 bg-[#17191c] flex flex-col">
      {/* Video area */}
      <div className="relative flex-shrink-0" style={{ aspectRatio: "16/9" }}>
        <img alt="" className="w-full h-full object-cover" src={stream.thumbnail} />
        {/* Top controls */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-[12px]" style={{ background: "linear-gradient(rgba(0,0,0,0.5), transparent)" }}>
          <button onClick={onClose} className="text-white flex items-center gap-[6px] font-['Pretendard:Medium',sans-serif] text-[14px]">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#FF2F00] flex items-center gap-[4px] px-[8px] py-[2px] rounded-[10px]">
              <div className="size-[5px] bg-white rounded-full animate-pulse" />
              <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[12px]">LIVE</span>
            </div>
            <span className="font-['Pretendard:Medium',sans-serif] text-white text-[13px]">{viewers.toLocaleString()}명</span>
          </div>
        </div>
        {/* Bottom stream info */}
        <div className="absolute bottom-0 left-0 right-0 p-[12px]" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}>
          <p className="font-['Pretendard:SemiBold',sans-serif] text-white text-[14px]">{stream.streamer}</p>
          <p className="font-['Pretendard:Regular',sans-serif] text-white text-[12px] opacity-80 mt-[2px] line-clamp-1">{stream.title}</p>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-[12px] py-[8px] flex flex-col gap-[4px] bg-[#17191c]" style={{ minHeight: 0 }}>
        <p className="font-['Pretendard:SemiBold',sans-serif] text-[#63a4e7] text-[13px] mb-[4px]">라이브 채팅</p>
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-[4px] items-start">
            <span className="font-['Pretendard:Medium',sans-serif] text-[13px] shrink-0 max-w-[80px] truncate" style={{ color: msg.color }}>{msg.nick}</span>
            <span className="font-['Pretendard:Regular',sans-serif] text-[#acb0b9] text-[13px]">{msg.msg}</span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Chat input */}
      <div className="shrink-0 flex items-center gap-[12px] px-[12px] py-[12px] border-t border-[#2a2d35] bg-[#17191c]">
        {/* Gift icon */}
        <button className="shrink-0 text-[#757b8a] hover:text-white transition-colors">
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1 12.1C18.1 10.3 18 8.6 17.9 7.3C17.8 6.3 17.3 5.4 16.5 4.9C16.7 4.5 16.8 4 16.8 3.6C16.8 1.6 15.2 0 13.2 0C11.3 0 9.8 1.2 8.9 2.6C8 1.2 6.4 0 4.6 0C2.6 0 1 1.6 1 3.6C1 4.1 1.1 4.6 1.3 5.1C0.7 5.6 0.3 6.4 0.2 7.3C0.1 8.7 0 10.3 0 12.1C0 13.9 0.1 15.6 0.2 16.9C0.3 18.4 1.4 19.6 2.8 19.7C4 19.9 6 20 9 20C12 20 14 19.9 15.2 19.8C16.6 19.7 17.7 18.5 17.8 17C18 15.6 18.1 14 18.1 12.1ZM3 6.5C4 6.4 5.6 6.3 7.9 6.3V11.2H2C2 9.8 2.1 8.6 2.2 7.5C2.2 6.9 2.5 6.5 3 6.5ZM9.9 6.2C12.3 6.2 14 6.3 15.1 6.4C15.5 6.4 15.9 6.8 15.9 7.4C16 8.5 16 9.8 16 11.1H9.8V6.2H9.9ZM13.2 2C14.1 2 14.8 2.7 14.8 3.6C14.8 3.9 14.7 4.2 14.6 4.4C13.6 4.3 12.2 4.2 10.3 4.2C10.8 3.2 11.8 2 13.2 2ZM4.6 2C6 2 7 3.2 7.6 4.3C5.7 4.3 4.3 4.4 3.3 4.5C3.1 4.2 3 3.9 3 3.6C3 2.7 3.7 2 4.6 2ZM2.2 16.8C2.1 15.7 2 14.5 2 13.1H7.9V18C5.6 18 4 17.9 3 17.8C2.5 17.7 2.2 17.3 2.2 16.8ZM15.1 17.8C14.1 17.9 12.4 18 9.9 18V13.1H16.1C16.1 14.5 16 15.7 15.9 16.8C15.8 17.3 15.5 17.7 15.1 17.8Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Chat input */}
        <input
          className="flex-1 bg-transparent text-white outline-none placeholder:text-[#757b8a] font-['Pretendard:Regular',sans-serif] text-[14px]"
          placeholder="채팅 입력"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") sendChat(); }}
        />

        {/* Emoji icon */}
        <button className="shrink-0 text-[#757b8a] hover:text-white transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C17.5227 2 22 6.47727 22 12C22 17.5227 17.5227 22 12 22C6.47727 22 2 17.5227 2 12C2 6.47727 6.47727 2 12 2ZM12 4C7.58184 4 4 7.58184 4 12C4 16.4182 7.58184 20 12 20C16.4182 20 20 16.4182 20 12C20 7.58184 16.4182 4 12 4ZM8.47754 8.625C9.27987 8.6252 9.92962 9.27479 9.92969 10.0771C9.92969 10.8786 9.28001 11.5291 8.47754 11.5293C7.67582 11.5293 7.02539 10.8789 7.02539 10.0771C7.02546 9.27457 7.67596 8.625 8.47754 8.625ZM15.5273 8.625C16.3289 8.62506 16.9794 9.27461 16.9795 10.0771C16.9795 10.8788 16.329 11.5292 15.5273 11.5293C14.7247 11.5293 14.0752 10.8788 14.0752 10.0771C14.0753 9.27467 14.7248 8.625 15.5273 8.625Z" fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1283 13.6438C15.4087 13.1652 16.0222 13.01 16.4953 13.2882C16.9743 13.568 17.1302 14.1826 16.8499 14.6568C16.2218 15.7242 14.7152 17.6379 11.9989 17.6379C9.28548 17.6379 7.77892 15.7261 7.15032 14.6608L7.15124 14.6623C6.86808 14.1864 7.02777 13.5725 7.50332 13.2928L7.50545 13.2915C7.97647 13.0176 8.58859 13.1673 8.8709 13.6452C9.34213 14.4431 10.3301 15.6397 11.9989 15.6397C13.6699 15.6397 14.6586 14.4411 15.1289 13.6428L15.1283 13.6438Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Like icon */}
        <button className="shrink-0 text-[#757b8a] hover:text-white transition-colors" onClick={sendChat}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.82291 7.33754L7.07692 1.92792L7.08619 1.90639C7.67017 0.592435 8.9905 -0.12162 10.3951 0.0170516C12.0495 0.169752 13.2 1.53987 13.2 3.21253V5.61253H17C18.7479 5.61253 20.337 7.22098 19.876 9.13102L18.3806 16.5086L18.3803 16.5103C17.9867 18.4744 16.2786 19.9125 14.2 19.9125H8.9L8.86921 19.9126C8.69655 19.9133 8.34601 19.9148 7.97285 19.7615L6.07713 19.2876C5.73076 19.2139 5.43311 19.0632 5.19271 18.8584C4.95135 18.9568 4.68547 19.0124 4.4 19.0124H3.2C1.44772 19.0124 0 17.5647 0 15.8124V10.5124C0 8.76013 1.44772 7.31241 3.2 7.31241H4.5C4.60971 7.31241 4.71756 7.321 4.82291 7.33754ZM6.5 8.51253L8.91794 2.70948C9.13527 2.23041 9.61048 1.94857 10.2005 2.00757L10.2095 2.00842C10.7526 2.0578 11.2 2.48671 11.2 3.21253V6.11253C11.2 6.48978 11.3301 6.88186 11.6304 7.18214C11.9307 7.48242 12.3228 7.61253 12.7 7.61253H17C17.6448 7.61253 18.0497 8.19057 17.9299 8.67C17.9262 8.68454 17.9229 8.69917 17.9199 8.71387L16.4199 16.1139L16.4194 16.1164C16.2124 17.1514 15.3208 17.9125 14.2 17.9125H8.9C8.8474 17.9125 8.81302 17.9124 8.78123 17.9115C8.75363 17.9106 8.73676 17.9092 8.72649 17.908C8.66748 17.8802 8.60587 17.8582 8.54254 17.8424L6.54254 17.3424C6.53726 17.3411 6.53198 17.3398 6.52668 17.3386C6.55178 17.2521 6.57176 17.1646 6.58639 17.0768C6.59545 17.0225 6.6 16.9675 6.6 16.9124V9.41241C6.6 9.19066 6.5649 8.97649 6.5 8.77518V8.51253ZM4.5 9.31241H3.2C2.55228 9.31241 2 9.8647 2 10.5124V15.8124C2 16.4601 2.55228 17.0124 3.2 17.0124H4.4C4.41296 17.0124 4.44931 17.0081 4.5 16.9612V9.31241Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

const NAV_TABS = ["라이브", "팔로잉", "카테고리", "MY"];

function NavIcon({ icon, color }: { icon: string; color: string }) {
  const iconMap: { [key: string]: { viewBox: string; path: string } } = {
    home: { viewBox: "0 0 18 19", path: svgPaths.p30c34280 },
    esports: { viewBox: "0 0 21 20", path: svgPaths.p15b94980 },
    catch: { viewBox: "0 0 20 19", path: svgPaths.p3ad03b00 },
    my: { viewBox: "0 0 20 19", path: svgPaths.p35b30380 },
    more: { viewBox: "0 0 18 20", path: svgPaths.p2024ee00 },
  };

  const data = iconMap[icon];
  return (
    <svg width="20" height="20" viewBox={data.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={data.path} fill={color} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}

const TOP_CHIPS = ["탐색", "추천", "이슈", "라이브"];

const RECOMMENDED_STREAMERS = [
  { id: 1, name: "크림슨플레이", profile: 0, bgImage: GAME_THUMBNAILS[0], profileImg: portraitImages[0] },
  { id: 2, name: "써니", profile: 1, bgImage: GAME_THUMBNAILS[1], profileImg: portraitImages[1] },
  { id: 3, name: "스카이라인마스터", profile: 2, bgImage: GAME_THUMBNAILS[2], profileImg: portraitImages[2] },
  { id: 4, name: "드래곤슬레이어", profile: 3, bgImage: GAME_THUMBNAILS[3], profileImg: portraitImages[3] },
  { id: 5, name: "펜타킹", profile: 4, bgImage: GAME_THUMBNAILS[4], profileImg: profileImages[2] },
  { id: 6, name: "에코스타", profile: 5, bgImage: GAME_THUMBNAILS[5], profileImg: profileImages[4] },
];

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [activeTab, setActiveTab] = useState(0);
  const [activeStream, setActiveStream] = useState<typeof LIVE_STREAMS[0] | null>(null);
  const [bottomNav, setBottomNav] = useState(0);
  const [selectedChip, setSelectedChip] = useState(1);

  if (activeStream) {
    return (
      <div className="size-full flex items-center justify-center bg-[#0d0e12]">
        <div className="relative bg-[#17191c] overflow-hidden" style={{ width: "390px", height: "844px", maxHeight: "100vh", maxWidth: "100vw" }}>
          <LivePlayerModal stream={activeStream} onClose={() => setActiveStream(null)} />
        </div>
      </div>
    );
  }

  return (
    <div className="size-full flex items-center justify-center bg-[#0d0e12]">
      <div
        className="relative bg-[#17191c] overflow-hidden flex flex-col"
        style={{ width: "390px", height: "844px", maxHeight: "100vh", maxWidth: "100vw" }}
      >
        {/* Status bar */}
        <div className="flex items-start justify-between shrink-0 px-[6px] pt-[14px]">
          <p className="font-['SF_Pro:Semibold',sans-serif] text-[17px] text-white px-[16px]">9:41</p>
          <div className="flex items-center gap-[6px] pr-[16px] pt-[2px]">
            <svg width="17" height="12" fill="none" viewBox="0 0 17 12">
              <path clipRule="evenodd" d={svgPaths.p33c47380} fill="white" fillRule="evenodd" />
            </svg>
            <svg width="16" height="12" fill="none" viewBox="0 0 15.9975 12">
              <path clipRule="evenodd" d={svgPaths.p3e080800} fill="white" fillRule="evenodd" />
            </svg>
            <svg width="25" height="12" fill="none" viewBox="0 0 25 12">
              <rect height="12" opacity="0.35" rx="3.8" stroke="white" width="24" x="0.5" y="0" />
              <rect fill="white" height="9" rx="2.5" width="21" x="2" y="1.5" />
            </svg>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="h-[44px] relative shrink-0 flex items-center px-[8px]">
          <div className="absolute left-1/2 -translate-x-1/2 h-[27px] w-[80px]">
            <SoopLogo />
          </div>
          <div className="ml-auto flex items-center">
            <button className="size-[44px] flex items-center justify-center">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.p3a4f4400} fill="white" fillRule="evenodd" />
              </svg>
            </button>
            <button className="size-[44px] flex items-center justify-center">
              <svg width="18" height="20" fill="none" viewBox="0 0 18 20">
                <path clipRule="evenodd" d={svgPaths.p88d6600} fill="white" fillRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Top chips */}
        <div className="shrink-0 flex items-center justify-center gap-[8px] px-[12px] py-[12px]">
          {TOP_CHIPS.map((chip, i) => (
            <button
              key={chip}
              onClick={() => setSelectedChip(i)}
              className={`px-[16px] py-[6px] rounded-full transition-all ${
                selectedChip === i
                  ? "bg-[#17191c] text-[#0082FF] border border-[#0082FF]"
                  : "bg-[#2a2d35] text-[#757b8a]"
              }`}
            >
              <span className="font-['Pretendard:Medium',sans-serif] text-[13px]">
                {chip}
              </span>
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto" style={{ overscrollBehavior: "contain", scrollbarWidth: "none", msOverflowStyle: "none" }} onScroll={(e) => { (e.target as any).style.setProperty('scrollbar-width', 'none'); }}>
          {selectedChip === 0 && (
            <>
          {/* Exploration Tab Content - Banner */}
          <div className="px-[12px] pt-[12px]">
            <div className="bg-[#c0c5d0] h-[100px] rounded-[20px] overflow-hidden relative flex items-center justify-center">
              <img alt="" className="h-[110px] object-contain" src={img11} />
            </div>
          </div>

          {/* Profile row */}
          <div className="pt-[16px] pb-[8px]">
            <div className="flex gap-[10px] items-start px-[12px] overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {STREAMERS.map((s, i) => {
                const isLiveStreamer = LIVE_STREAMS.some(stream => stream.profileImg === s.profile);
                const liveStream = LIVE_STREAMS.find(stream => stream.profileImg === s.profile);
                return (
                  <button
                    key={i}
                    onClick={() => {
                      if (isLiveStreamer && liveStream) setActiveStream(liveStream);
                    }}
                    disabled={!isLiveStreamer}
                    className="flex flex-col gap-[4px] items-center shrink-0 bg-none border-none p-0 cursor-pointer disabled:cursor-default"
                  >
                    <GradientCircle src={profileImages[s.profile]} />
                    <p className="font-['Pretendard:Medium',sans-serif] text-[#acb0b9] text-[12px] text-center whitespace-nowrap">{s.nick}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live section 1 */}
          <div className="pt-[8px]">
            <div className="flex items-center justify-between px-[12px] py-[8px]">
              <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">라이브 추천</span>
            </div>
            <div className="flex flex-col gap-[12px] px-[12px]">
              {LIVE_STREAMS.slice(0, 2).map((stream) => (
                <StreamCard key={stream.id} stream={stream} onClick={() => setActiveStream(stream)} />
              ))}
            </div>
          </div>

          {/* Category section */}
          <div className="pt-[20px]">
            <div className="flex items-center justify-between px-[12px] py-[8px]">
              <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">카테고리</span>
            </div>
            <div className="flex gap-[12px] items-start px-[12px] overflow-x-auto pb-[4px]" style={{ scrollbarWidth: "none" }}>
              {CATEGORIES.map((cat, i) => (
                <CategoryCard key={i} cat={cat} />
              ))}
            </div>
          </div>

          {/* Live section 2 */}
          <div className="pt-[20px]">
            <div className="flex items-center justify-between px-[12px] py-[8px]">
              <div className="flex items-center gap-[4px]">
                <div className="size-[10px] bg-[#0182FF] rounded-full flex items-center justify-center">
                  <svg width="6" height="7" fill="none" viewBox="0 0 19 20.002">
                    <path d={svgPaths.p3bd65980} fill="#0182FF" />
                  </svg>
                </div>
                <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">Live</span>
              </div>
            </div>
            <div className="flex flex-col gap-[12px] px-[12px]">
              {LIVE_STREAMS.slice(2).map((stream) => (
                <StreamCard key={stream.id} stream={stream} onClick={() => setActiveStream(stream)} />
              ))}
            </div>
          </div>

          {/* Catch section */}
          <div className="pt-[20px]">
            <div className="flex items-center justify-between px-[12px] py-[8px]">
              <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">추천 Catch</span>
            </div>
            <div className="flex gap-[12px] items-start px-[12px] overflow-x-auto pb-[4px]" style={{ scrollbarWidth: "none" }}>
              {CATCH_STREAMS.map((stream, i) => (
                <CatchCard key={i} stream={stream} />
              ))}
            </div>
          </div>

          {/* More button */}
          <div className="px-[12px] pt-[16px] pb-[12px]">
            <div className="bg-[#1e2028] rounded-[16px] flex flex-col items-center gap-[12px] py-[20px]">
              <p className="font-['Pretendard:Regular',sans-serif] text-[#acb0b9] text-[15px]">더 많은 방송이 보고 싶다면?</p>
              <button className="bg-[#2a2d35] h-[34px] px-[16px] rounded-[17px]">
                <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[13px]">전체 방송 가기</span>
              </button>
            </div>
          </div>

          {/* Recommended Streamers */}
          <div className="pt-[20px] pb-[24px]">
            <div className="flex items-center justify-between px-[12px] py-[8px]">
              <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">추천 스트리머</span>
            </div>
            <div className="flex gap-[12px] items-start px-[12px] overflow-x-auto pb-[4px]" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
              {RECOMMENDED_STREAMERS.map((streamer) => (
                <StreamerCard key={streamer.id} streamer={streamer} onStreamClick={(stream) => setActiveStream(stream)} />
              ))}
            </div>
          </div>
            </>
          )}

          {selectedChip === 1 && (
            <>
              {/* Recommendation Tab - Same as Exploration but with auto-play slider at top */}

              {/* Banner */}
              <div className="px-[12px] pt-[12px]">
                <div className="bg-[#c0c5d0] h-[100px] rounded-[20px] overflow-hidden relative flex items-center justify-between px-[20px]">
                  <div className="flex-1"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-[8px]">
                    <img alt="" className="h-[140px] object-contain" src={img11} />
                  </div>
                </div>
              </div>

              {/* Auto-play Slider */}
              <div className="px-[12px] pt-[16px] pb-[12px]">
                <AutoPlaySlider />
              </div>

              {/* Profile row */}
              <div className="pt-[8px] pb-[8px]">
                <div className="flex gap-[10px] items-start px-[12px] overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                  {STREAMERS.map((s, i) => {
                    const isLiveStreamer = LIVE_STREAMS.some(stream => stream.profileImg === s.profile);
                    const liveStream = LIVE_STREAMS.find(stream => stream.profileImg === s.profile);
                    return (
                      <button
                        key={i}
                        onClick={() => {
                          if (isLiveStreamer && liveStream) setActiveStream(liveStream);
                        }}
                        disabled={!isLiveStreamer}
                        className="flex flex-col gap-[4px] items-center shrink-0 bg-none border-none p-0 cursor-pointer disabled:cursor-default"
                      >
                        <GradientCircle src={profileImages[s.profile]} />
                        <p className="font-['Pretendard:Medium',sans-serif] text-[#acb0b9] text-[12px] text-center whitespace-nowrap">{s.nick}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live section 1 */}
              <div className="pt-[8px]">
                <div className="flex items-center justify-between px-[12px] py-[8px]">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">라이브 추천</span>
                </div>
                <div className="flex flex-col gap-[12px] px-[12px]">
                  {LIVE_STREAMS.slice(0, 2).map((stream) => (
                    <StreamCard key={stream.id} stream={stream} onClick={() => setActiveStream(stream)} />
                  ))}
                </div>
              </div>

              {/* Category section */}
              <div className="pt-[20px]">
                <div className="flex items-center justify-between px-[12px] py-[8px]">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">카테고리</span>
                </div>
                <div className="flex gap-[12px] items-start px-[12px] overflow-x-auto pb-[4px]" style={{ scrollbarWidth: "none" }}>
                  {CATEGORIES.map((cat, i) => (
                    <CategoryCard key={i} cat={cat} />
                  ))}
                </div>
              </div>

              {/* Live section 2 */}
              <div className="pt-[20px]">
                <div className="flex items-center justify-between px-[12px] py-[8px]">
                  <div className="flex items-center gap-[4px]">
                    <div className="size-[10px] bg-[#0182FF] rounded-full flex items-center justify-center">
                      <svg width="6" height="7" fill="none" viewBox="0 0 19 20.002">
                        <path d={svgPaths.p3bd65980} fill="#0182FF" />
                      </svg>
                    </div>
                    <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">Live</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] px-[12px]">
                  {LIVE_STREAMS.slice(2).map((stream) => (
                    <StreamCard key={stream.id} stream={stream} onClick={() => setActiveStream(stream)} />
                  ))}
                </div>
              </div>

              {/* Catch section */}
              <div className="pt-[20px]">
                <div className="flex items-center justify-between px-[12px] py-[8px]">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">추천 Catch</span>
                </div>
                <div className="flex gap-[12px] items-start px-[12px] overflow-x-auto pb-[4px]" style={{ scrollbarWidth: "none" }}>
                  {CATCH_STREAMS.map((stream, i) => (
                    <CatchCard key={i} stream={stream} />
                  ))}
                </div>
              </div>

              {/* More button */}
              <div className="px-[12px] pt-[16px] pb-[12px]">
                <div className="bg-[#1e2028] rounded-[16px] flex flex-col items-center gap-[12px] py-[20px]">
                  <p className="font-['Pretendard:Regular',sans-serif] text-[#acb0b9] text-[15px]">더 많은 방송이 보고 싶다면?</p>
                  <button className="bg-[#2a2d35] h-[34px] px-[16px] rounded-[17px]">
                    <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[13px]">전체 방송 가기</span>
                  </button>
                </div>
              </div>

              {/* Recommended Streamers */}
              <div className="pt-[20px] pb-[24px]">
                <div className="flex items-center justify-between px-[12px] py-[8px]">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">추천 스트리머</span>
                </div>
                <div className="flex gap-[12px] items-start px-[12px] overflow-x-auto pb-[4px]" style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}>
                  {RECOMMENDED_STREAMERS.map((streamer) => (
                    <StreamerCard key={streamer.id} streamer={streamer} onStreamClick={(stream) => setActiveStream(stream)} />
                  ))}
                </div>
              </div>
            </>
          )}

          {selectedChip === 2 && (
            <>
              {/* Issue Tab */}
              {/* Issue Sections */}
              <div className="pt-[16px] pb-[24px]">
                <div className="flex flex-col gap-[12px] px-[12px]">
                  {LIVE_STREAMS.map((stream) => (
                    <StreamCard key={stream.id} stream={stream} onClick={() => setActiveStream(stream)} />
                  ))}
                </div>
              </div>
            </>
          )}

          {selectedChip === 3 && (
            <>
              {/* Live Tab */}
              <div className="pt-[20px] pb-[24px]">
                <div className="px-[12px] py-[8px]">
                  <span className="font-['Pretendard:SemiBold',sans-serif] text-white text-[18px]">LIVE 전체</span>
                </div>
                <div className="flex flex-col gap-[12px] px-[12px]">
                  {LIVE_STREAMS.map((stream) => (
                    <StreamCard key={stream.id} stream={stream} onClick={() => setActiveStream(stream)} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom nav */}
        <div className="shrink-0 border-t border-[#2a2d35] flex items-center bg-[#17191c] pb-[safe-area-inset-bottom]">
          {[
            { label: "홈", icon: "home" },
            { label: "e스포츠", icon: "esports" },
            { label: "Catch", icon: "catch" },
            { label: "MY", icon: "my" },
            { label: "더보기", icon: "more" },
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => setBottomNav(i)}
              className="flex-1 flex flex-col items-center justify-center gap-[4px] py-[8px]"
            >
              <div className="h-[24px] flex items-center justify-center">
                <NavIcon icon={item.icon} color={bottomNav === i ? "#0082FF" : "#757b8a"} />
              </div>
              <span
                className="font-['Pretendard:Medium',sans-serif] text-[10px] leading-tight"
                style={{ color: bottomNav === i ? "#0082FF" : "#757b8a" }}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
