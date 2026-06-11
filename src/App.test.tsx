import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('SOOP reference prototype', () => {
  it('starts on the live reference screen with the URL header and live preview', () => {
    render(<App />);

    expect(screen.getByLabelText('SOOP home')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '라이브' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(screen.getByText('LIVE 전체')).toBeInTheDocument();
    expect(screen.getByText('김민교 LCK DK vs NS #LckWatchParty')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'A' })).not.toBeInTheDocument();
  });

  it('switches to the live screen and expands related broadcasts from a row', async () => {
    const user = userEvent.setup();
    render(<App />);

    expect(screen.getByText('LIVE 전체')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', {
        name: /expand related for 김민교 LCK DK vs NS #LckWatchParty/,
      }),
    );

    expect(screen.getByText('비슷한 방송 더보기')).toBeInTheDocument();
    expect(screen.getByText('시네티팬1')).toBeInTheDocument();
  });

  it('opens a player detail screen and returns to the previous tab', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(
      screen.getAllByRole('button', {
        name: /open player for 김민교 LCK DK vs NS #LckWatchParty/,
      })[0],
    );

    expect(screen.getByText('김민교 LCK DK vs NS #LckWatchParty')).toBeInTheDocument();
    expect(screen.getByText('채팅을 시작합니다.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('채팅 입력')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', {
        name: /toggle player controls for 김민교 LCK DK vs NS #LckWatchParty/,
      }),
    );
    expect(screen.getAllByText('나만 이거 재밌나?').length).toBeGreaterThan(0);

    await user.click(screen.getByRole('button', { name: 'close player' }));
    expect(screen.getByText('김민교 LCK DK vs NS #LckWatchParty')).toBeInTheDocument();
    expect(screen.queryByPlaceholderText('채팅 입력')).not.toBeInTheDocument();
  });
});
