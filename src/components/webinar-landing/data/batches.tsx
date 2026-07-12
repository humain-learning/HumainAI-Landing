import type { ReactNode } from 'react';
export type WebinarBatch = {
  id: number;
  accent: string;
  label: [string, string];
  title?: string;
  date: string;
  time: string;
  bullets: string[];
  buttonLabel: ReactNode;
  buttonTextColor: string;
  buttonHref: string;
  campaign: string;
  closesAt?: Date;
};

export const webinarBatches: WebinarBatch[] = [
  {
    id: 1,
    accent: '#AAC191',
    label: ['OPTION 1', 'WEEKEND'],
    // title: 'One Power Session',
    date: 'Sun, 12 July',
    time: '11:00 AM – 1:00 PM',
    bullets: [
      'Create and Learn with AI in one immersive sitting',
      'Perfect for busy school weeks',
      'Parents can join for the full experience',
    ],
    buttonLabel: <span>Register <span className="line-through">₹499</span> Free!</span>,
    buttonTextColor: 'text-white',
    buttonHref: 'https://learn.humainlearning.ai/event/1063?autojoin=1',
	campaign: 'Masterclass12-7',
	closesAt: new Date(Date.UTC(2026, 6, 12, 5, 30, 0)), // 11:00 AM IST, 12 July 2026
  },
  {
    id: 2,
    accent: '#E7A572',
    label: ['OPTION 2', 'WEEKDAY'],
    // title: 'One Power Session',
    date: 'Wed, 15 July',
    time: '6:00 PM – 8:00 PM',
    bullets: [
      'Create and Learn with AI in one immersive sitting',
      'Perfect for an after school session',
      'Parents can join for the full experience',
    ],
    buttonLabel: <span>Register <span className="line-through">₹499</span> Free!</span>,
    buttonTextColor: 'text-white',
    buttonHref: 'https://learn.humainlearning.ai/event/1063?autojoin=1',
	campaign: 'Masterclass15-7',
	closesAt: new Date(Date.UTC(2026, 6, 15, 12, 30, 0)), // 6:00 PM IST, 15 July 2026
  },
];

export const firstSessionStart = new Date(Date.UTC(2026, 6, 12, 5, 30, 0)); // 12 July 11:00 IST
export const secondSessionStart = new Date(Date.UTC(2026, 6, 14, 12, 30, 0)); // 14 July 6:00 PM IST
export const thirdSessionStart = new Date(Date.UTC(2026, 6, 15, 12, 30, 0)); // 15 July 6:00 PM IST
export const lastSessionEnd = new Date(Date.UTC(2026, 6, 15, 12, 30, 0)); // 15 July 6:00 PM IST

const batchStarts = [
  firstSessionStart,
  secondSessionStart,
  thirdSessionStart,
];

function getNextBatchStart(now = Date.now()) {
  const upcomingBatch = batchStarts.find((start) => start.getTime() > now);
  return upcomingBatch ?? batchStarts[batchStarts.length - 1];
}

export function isRegistrationClosed(now = Date.now()) {
  const cutoff = getNextBatchStart(now).getTime() - 2 * 60 * 60 * 1000;
  return now >= cutoff;
}

export function isBatchRegistrationClosed(batch: WebinarBatch, now = Date.now()) {
  return batch.closesAt ? now >= batch.closesAt.getTime() : false;
}

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
};

export function getCountdown(now = Date.now()): Countdown {
  const target = getNextBatchStart(now).getTime();
  const diffMs = Math.max(target - now, 0);
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isLive: diffMs <= 0,
  };
}

export function getUrgencyText(now = Date.now()) {
  const target = getNextBatchStart(now).getTime();
  const diff = target - now;

  if (diff <= 0) return 'Session is live now!';

  const totalMinutes = Math.floor(diff / 60000);
  const totalHours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (days >= 2) return `Only ${days} days remaining`;
  if (days === 1) return 'Only 1 day remaining';
  if (totalHours >= 1) return `Only ${totalHours} hour${totalHours > 1 ? 's' : ''} remaining`;
  if (totalMinutes >= 1) return `Only ${totalMinutes} minute${totalMinutes > 1 ? 's' : ''} remaining`;
  return 'Starting very soon!';
}
