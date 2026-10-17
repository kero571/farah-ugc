const P = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  play: <path d="M8 5v14l11-7z" fill="currentColor" stroke="none" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  up: <path d="M12 19V5M6 11l6-6 6 6" />,
  down: <path d="m6 9 6 6 6-6" />,
  left: <path d="m15 6-6 6 6 6" />,
  right: <path d="m9 6 6 6-6 6" />,
  home: <path d="M4 11l8-7 8 7v9H4zM10 20v-6h4v6" />,
  user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.8-4 3.5-5.5 7-5.5s6.2 1.5 7 5.5z" /></>,
  stack: <><rect x="5" y="9" width="14" height="11" rx="2" /><path d="M8 9V6h8v3M10 14h4" /></>,
  playCircle: <><circle cx="12" cy="12" r="8.5" /><path d="M10 8.5v7l6-3.5z" /></>,
  videoOff: <><rect x="3" y="6.5" width="12.5" height="11" rx="2" /><path d="m15.5 10.5 5-3v9l-5-3M3 3l18 18" /></>,
  gauge: <><circle cx="12" cy="12" r="8.5" /><path d="m12 12 4-2M8.5 12H8" /></>,
  cube: <><path d="M3 8l9-5 9 5v8l-9 5-9-5z" /><path d="M3 8l9 5 9-5M12 13v8" /></>,
  timer: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></>,
  house: <path d="M4 11l8-7 8 7v9H4zM9 20v-5h6v5" />,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  whatsapp: <><path d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8z" fill="currentColor" stroke="none" /><path d="M9 9.5c0 2.8 2.7 5.5 5.5 5.5" stroke="#fff" /></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17" cy="7" r=".7" fill="currentColor" /></>,
  tiktok: <path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5M14 4c.5 2.5 2 4 4.5 4.2" strokeWidth="2.2" />,
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5c0-.3.2-.5.5-.5z" fill="currentColor" stroke="none" />,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" stroke="none" />,
};
export default function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      {P[name]}
    </svg>
  );
}
