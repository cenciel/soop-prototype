import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import {
  BellPlus,
  Gift,
  Pause,
  Play,
  Smile,
  Star,
  ThumbsUp,
} from 'lucide-react';
import type { LiveItem } from '../data/mockData';
import { chatMessages } from '../data/mockData';

type PlayerScreenProps = {
  item: LiveItem;
  onBack: () => void;
};

type PlayerChatMessage = {
  id: string;
  nickname: string;
  content: string;
  type: string;
};

const chatPool: Omit<PlayerChatMessage, 'id'>[] = [
  { nickname: '나만봄', content: '나만 이거 재밌나?', type: 'fan' },
  { nickname: '응원합니다', content: '항상 응원하고 있어요', type: 'bigfan' },
  { nickname: '오늘도화이팅', content: '오늘 방송 폼 미쳤다', type: 'viewer' },
  { nickname: '채팅쟁이', content: '채팅창 속도 무엇 ㅋㅋ', type: 'viewer' },
  { nickname: '수박박수', content: '와 진짜 대박이네요!', type: 'fan' },
  { nickname: '리스팩트', content: '리스트 색감이 진짜 깔끔하네요', type: 'fan' },
  { nickname: '민트초코단', content: '이 장면 클립 따야겠다', type: 'viewer' },
  { nickname: '제로콜라', content: '오늘 방송 오래 가나요?', type: 'viewer' },
  { nickname: '레알무리냐', content: '이런 텐션 오랜만이다', type: 'viewer' },
  { nickname: '구독중', content: '방금 플레이 좋았다', type: 'bigfan' },
];

function randomChatMessage() {
  const message = chatPool[Math.floor(Math.random() * chatPool.length)];
  return {
    ...message,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  };
}

function IconChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289L12 14.5858L19.2929 7.29289C19.6834 6.90237 20.3166 6.90237 20.7071 7.29289C21.0976 7.68342 21.0976 8.31658 20.7071 8.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L3.29289 8.70711C2.90237 8.31658 2.90237 7.68342 3.29289 7.29289Z" fill="currentColor" />
    </svg>
  );
}

function IconCast() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 17C4.65228 17 6 18.3477 6 20C6 20.5523 5.55228 21 5 21C4.44772 21 4 20.5523 4 20C4 19.4523 3.54772 19 3 19C2.44772 19 2 18.5523 2 18C2 17.4477 2.44772 17 3 17ZM3 13C6.85228 13 10 16.1477 10 20C10 20.5523 9.55228 21 9 21C8.44772 21 8 20.5523 8 20C8 17.2523 5.74772 15 3 15C2.44772 15 2 14.5523 2 14C2 13.4477 2.44772 13 3 13ZM3 9C9.05228 9 14 13.9477 14 20C14 20.5523 13.5523 21 13 21C12.4477 21 12 20.5523 12 20C12 15.0523 7.94772 11 3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9ZM17.9004 3C20.1525 3.0002 21.9004 4.74785 21.9004 7V17C21.9004 19.2522 20.1525 20.9998 17.9004 21H17C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19H17.9004C19.0479 18.9998 19.9004 18.1476 19.9004 17V7C19.9004 5.85242 19.0479 5.00019 17.9004 5H3C2.44772 5 2 4.55228 2 4C2 3.44772 2.44772 3 3 3H17.9004Z" fill="currentColor" />
    </svg>
  );
}

function IconSchedule() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15.7998 2.4502C19.1997 2.4502 22 5.04737 22 8.35059V15.75C22 19.0408 19.2131 21.6502 15.9004 21.6504H8.09961C4.7869 21.6502 2 19.0408 2 15.75V8.35059C2 5.05983 4.7869 2.4504 8.09961 2.4502H15.7998ZM4 15.75C4 17.859 5.81267 19.6502 8.09961 19.6504H15.9004C18.1873 19.6502 20 17.859 20 15.75V9.85059H4V15.75ZM7.59473 4.48047C5.72841 4.70018 4.27322 6.11936 4.03516 7.85059H5.68945L7.59473 4.48047ZM17.2793 7.85059H19.9639C19.8345 6.91516 19.3483 6.06737 18.6182 5.45215L17.2793 7.85059ZM12.5879 7.85059H14.9893L16.8232 4.56445C16.4979 4.4902 16.1554 4.4502 15.7998 4.4502H14.5088L12.5879 7.85059ZM7.9873 7.85059H10.29L12.2119 4.4502H9.90918L7.9873 7.85059Z" fill="currentColor" />
    </svg>
  );
}

function IconMoreVertical() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z" fill="currentColor" />
    </svg>
  );
}

function IconBadge() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M11.7998 1C17.1565 1 21.5145 5.3582 21.5146 10.7148C21.5146 15.6857 17.7617 19.7939 12.9404 20.3604C13.119 20.8886 13.4112 21.1275 13.4717 21.168C13.9312 21.4743 14.0554 22.0952 13.749 22.5547C13.4427 23.0142 12.8218 23.1384 12.3623 22.832C11.884 22.5131 11.1382 21.7278 10.8867 20.3857C5.95666 19.9238 2.08496 15.7636 2.08496 10.7148C2.08509 5.35828 6.44324 1.00013 11.7998 1ZM11.7998 3C7.54781 3.00013 4.08509 6.46285 4.08496 10.7148C4.08496 14.9669 7.54781 18.4296 11.7998 18.4296C16.052 18.4296 19.5146 14.967 19.5146 10.7148C19.5145 6.46277 16.0519 3 11.7998 3ZM14.8164 7.2334C16.3514 7.2334 17.9629 8.46196 17.9629 10.6035C17.9629 11.6269 17.6175 12.4821 17.0166 13.083C16.4213 13.6782 15.6248 13.9736 14.8164 13.9736H13.1406C12.6989 13.9735 12.3408 13.6146 12.3408 13.1729V8.0332C12.3411 7.59164 12.699 7.2335 13.1406 7.2334H14.8164ZM8.7832 7.26172C9.36553 7.26172 9.86397 7.63112 10.085 8.18359L10.0898 8.19531L11.877 12.8887C12.0341 13.3014 11.8276 13.7635 11.415 13.9209C11.0022 14.0782 10.5391 13.8709 10.3818 13.458L10.0244 12.5205H7.63086L7.30176 13.4424C7.15307 13.8583 6.69531 14.0753 6.2793 13.9268C5.86349 13.7781 5.64655 13.3202 5.79492 12.9043L7.47168 8.21094C7.47498 8.20171 7.47878 8.19269 7.48242 8.18359C7.70339 7.63118 8.20096 7.2618 8.7832 7.26172ZM13.9404 12.373H14.8164C15.2368 12.373 15.6142 12.2216 15.8848 11.9512C16.1497 11.6862 16.3633 11.2561 16.3633 10.6035C16.3633 9.39312 15.516 8.83398 14.8164 8.83398H13.9404V12.373ZM8.20312 10.9209H9.41602L8.79004 9.27734L8.20312 10.9209Z" fill="currentColor" />
    </svg>
  );
}

function IconCheckNote() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15.9271 2C17.6076 2 18.8453 3.34434 18.9955 4.94824C18.9984 4.97919 19.0003 5.01091 19.0003 5.04199V14.0117C20.364 14.1372 21.3891 15.2914 21.6488 16.5381L21.6517 16.5547L21.9593 18.3252C22.237 20.0579 21.0093 21.9997 19.057 22H4.9437C3.00991 22 1.76548 20.1783 2.0394 18.3369L2.04038 18.3252L2.348 16.5547L2.3519 16.5381C2.61166 15.2912 3.63632 14.1369 5.00034 14.0117V5.04199C5.00034 3.34954 6.29488 2 7.96421 2H15.9271ZM19.0003 17C19.0003 17.5522 18.5525 17.9999 18.0003 18H6.00034C5.44806 18 5.00034 17.5523 5.00034 17V16.0537C4.71751 16.1683 4.41446 16.4671 4.31284 16.9316L4.01597 18.6416C3.89298 19.5033 4.46016 20 4.9437 20H19.057C19.5226 19.9996 20.1076 19.4277 19.9857 18.6475L19.6878 16.9316C19.5863 16.4674 19.283 16.1685 19.0003 16.0537V17ZM7.96421 4C7.45172 4 7.00034 4.40111 7.00034 5.04199V16H17.0003V5.09375C16.9173 4.39034 16.4188 4 15.9271 4H7.96421ZM14.2796 7.30664C14.6626 6.90872 15.2958 6.89637 15.6937 7.2793C16.0915 7.66218 16.1038 8.2954 15.721 8.69336L11.8714 12.6934C11.6829 12.8892 11.4226 13 11.1507 13C10.879 12.9999 10.6185 12.8892 10.43 12.6934L8.27964 10.458C7.89669 10.06 7.90902 9.42689 8.30698 9.04395C8.70496 8.66123 9.33818 8.67341 9.72104 9.07129L11.1507 10.5576L14.2796 7.30664Z" fill="currentColor" />
    </svg>
  );
}

function IconLinkShare() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M1.80005 12.5C2.35233 12.5 2.80005 12.9477 2.80005 13.5C2.80005 16.4839 4.51464 19.0537 6.97192 20.3369L7.92798 19.3818C8.24292 19.0669 8.75268 19.0669 9.06763 19.3818L11.0657 21.3789C11.178 21.4542 11.274 21.5516 11.3479 21.665C11.5827 21.9201 11.6301 22.2975 11.4602 22.6025C11.4293 22.658 11.3903 22.7066 11.3489 22.752C11.1707 23.0271 10.8622 23.2099 10.51 23.21C5.23449 23.21 0.800049 18.8991 0.800049 13.5C0.800049 12.9477 1.24776 12.5 1.80005 12.5ZM7.29224 4.58496C8.8093 3.06804 11.3123 3.00113 12.7786 4.60352L19.4143 11.2393C20.9313 12.7562 20.999 15.2592 19.3967 16.7256L16.7083 19.4141C15.1913 20.931 12.6883 20.9986 11.2219 19.3965L4.58521 12.7598C3.06851 11.2426 3.00128 8.73958 4.60376 7.27344L7.29224 4.58496ZM11.2004 6.06543C10.6337 5.43573 9.54414 5.37505 8.81274 6.10645L6.08618 8.83301L6.06567 8.85156C5.43597 9.41829 5.37529 10.5079 6.10669 11.2393L12.7805 17.9141L12.7991 17.9346C13.3658 18.5642 14.4554 18.6248 15.1868 17.8936L17.9143 15.167L17.9348 15.1484C18.5645 14.5817 18.6252 13.4912 17.8938 12.7598L11.22 6.08594L11.2004 6.06543ZM13.5002 0.799805C18.7757 0.799938 23.2102 5.11075 23.2102 10.5098C23.2101 11.0619 22.7623 11.5096 22.2102 11.5098C21.658 11.5098 21.2103 11.062 21.2102 10.5098C21.2102 7.59105 19.5698 5.06765 17.1985 3.75781L16.3284 4.62793C16.1388 4.81746 15.879 4.89014 15.6331 4.85156C15.3872 4.89004 15.1272 4.81738 14.9377 4.62793L12.9329 2.62305C12.8301 2.55214 12.7411 2.46281 12.6711 2.35938C12.4246 2.10435 12.372 1.71807 12.5452 1.40723C12.5791 1.34639 12.6218 1.2928 12.6682 1.24414C12.8476 0.976139 13.1535 0.799805 13.5002 0.799805Z" fill="currentColor" />
    </svg>
  );
}

function chatBadgeFor(type: string) {
  if (type === 'fan') return 'F';
  if (type === 'bigfan') return '열';
  return null;
}

export function PlayerScreen({ item, onBack }: PlayerScreenProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const chatStreamRef = useRef<HTMLDivElement>(null);
  const hideTimerRef = useRef<number | null>(null);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [visibleMessages, setVisibleMessages] = useState<PlayerChatMessage[]>([
    { ...chatPool[0], id: 'initial-chat' },
  ]);

  const scheduleControlsHide = () => {
    if (hideTimerRef.current) {
      window.clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = window.setTimeout(() => {
      setControlsVisible(false);
      hideTimerRef.current = null;
    }, 1600);
  };

  useEffect(() => {
    scheduleControlsHide();
    return () => {
      if (hideTimerRef.current) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setVisibleMessages((messages) => [...messages, randomChatMessage()].slice(-40));
    }, 950);
    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const stream = chatStreamRef.current;
    if (!stream) return;

    const scrollId = window.requestAnimationFrame(() => {
      if (typeof stream.scrollTo === 'function') {
        stream.scrollTo({
          top: stream.scrollHeight,
          behavior: visibleMessages.length > 3 ? 'smooth' : 'auto',
        });
      } else {
        stream.scrollTop = stream.scrollHeight;
      }
    });

    return () => window.cancelAnimationFrame(scrollId);
  }, [visibleMessages]);

  const handlePlayerTap = () => {
    setControlsVisible(true);
    scheduleControlsHide();
    setVisibleMessages((messages) => [...messages, randomChatMessage()].slice(-40));
  };

  const togglePlayback = (event: MouseEvent) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setPaused(false);
    } else {
      video.pause();
      setPaused(true);
    }
    setControlsVisible(true);
    scheduleControlsHide();
  };

  return (
    <section className="player-screen player-screen--reference">
      <div className="reference-player">
        <div
          role="button"
          tabIndex={0}
          className="reference-video"
          aria-label={`toggle player controls for ${item.title}`}
          onClick={handlePlayerTap}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handlePlayerTap();
            }
          }}
        >
          <video ref={videoRef} src={item.media} muted playsInline autoPlay loop />
          <span className={`reference-video-ui ${controlsVisible ? 'is-visible' : ''}`}>
            <span className="reference-top-controls">
              <button
                type="button"
                className="reference-icon-button"
                aria-label="close player"
                onClick={(event) => {
                  event.stopPropagation();
                  onBack();
                }}
              >
                <IconChevronDown />
              </button>
              <span className="reference-right-controls">
                <IconCast />
                <IconSchedule />
                <IconMoreVertical />
              </span>
            </span>
            <button
              type="button"
              className="reference-center-toggle"
              aria-label={paused ? 'play player' : 'pause player'}
              onClick={togglePlayback}
            >
              {paused ? (
                <Play className="reference-center-icon" size={46} fill="currentColor" strokeWidth={2} />
              ) : (
                <Pause className="reference-center-icon" size={46} strokeWidth={2} />
              )}
            </button>
            <span className="reference-bottom-controls">
              <span className="reference-ad">
                <IconBadge />
              </span>
              <span className="reference-check">
                <IconCheckNote />
              </span>
              <span className="reference-muted">
                <IconLinkShare />
              </span>
            </span>
          </span>
        </div>

        <section className={`reference-player-meta ${controlsVisible ? 'is-visible' : ''}`}>
          <h1>{item.title}</h1>
          <div className="reference-chip-row">
            {item.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="reference-owner-row">
            <img src={item.avatar} alt="" />
            <span className="reference-owner-name">{item.broadcaster}</span>
            <span className="reference-live-dot" />
            <strong>{item.viewers.toLocaleString('en-US')}</strong>
            <span className="reference-owner-actions">
              <button type="button" aria-label="add to broadcast">
                <BellPlus size={20} />
              </button>
              <button type="button" aria-label="favorite broadcast">
                <Star size={20} />
              </button>
            </span>
          </div>
        </section>

        <section className="reference-chat" aria-label="채팅">
          <div className="reference-chat-log" ref={chatStreamRef}>
            <strong className="reference-chat-start">{chatMessages[0].content}</strong>
            <div className="reference-chat-stream">
              {visibleMessages.map((message) => {
                const badge = chatBadgeFor(message.type);
                return (
                  <p className={`reference-chat-message reference-chat-message--${message.type}`} key={message.id}>
                    <span>
                      {badge ? (
                        <i className={`reference-chat-badge reference-chat-badge--${badge === 'F' ? 'fan' : 'hot'}`}>
                          {badge}
                        </i>
                      ) : null}
                      {message.nickname}
                    </span>
                    <b>{message.content}</b>
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        <div className="reference-chat-input">
          <button type="button" aria-label="gift">
            <Gift size={24} />
          </button>
          <label>
            <input placeholder="채팅 입력" aria-label="채팅 입력" />
            <Smile size={22} />
          </label>
          <button type="button" aria-label="like">
            <ThumbsUp size={25} />
          </button>
        </div>
      </div>
    </section>
  );
}
