import type { SVGProps } from "react";

const paths: Record<string, string> = {
  sun: "M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  calendar: "M8 3v4m8-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Zm3 9h2m4 0h2m-8 3h2",
  pantry: "M5 3h14v18H5V3Zm0 9h14M9 7v2m0 6v3",
  camera: "M8 6l2-3h4l2 3h5v14H3V6h5Zm8 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  book: "M12 6c-3-2-6-2-9-1v15c3-1 6-1 9 1m0-15c3-2 6-2 9-1v15c-3-1-6-1-9 1V6Z",
  pot: "M5 10h14v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-7Zm-3 2h3m14 0h3M4 7h16M9 3v1m6-1v1",
  bag: "M4 7h16l1 14H3L4 7Zm4 2V6a4 4 0 0 1 8 0v3",
  users: "M16 21v-3a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v3m20 0v-3a4 4 0 0 0-3-3.9M13 3.2a4 4 0 0 1 0 7.6M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  sparkles: "m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Zm7-1v4m-2-2h4",
  sliders: "M3 6h5m4 0h9M3 12h11m4 0h3M3 18h3m4 0h11M8 3v6m6 0v6M6 15v6",
  shield: "m12 2 9 4v6c0 5-5 8-9 10-4-2-9-5-9-10V6l9-4Zm-4 10 3 3 5-6",
  search: "m16 16 5 5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  chevron: "m9 5 7 7-7 7",
  mail: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
};

export default function HelpIcon({ name, ...props }: SVGProps<SVGSVGElement> & { name: string }) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name] ?? paths.book} /></svg>;
}
