export default function ChartSVG({ className, currentColor }: { className: string, currentColor?: string }) {
    return (
        <svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke={currentColor || "currentColor"}  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className={`${className}`}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M9 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M15 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" /><path d="M4 20h14" /></svg>
    )
  }





