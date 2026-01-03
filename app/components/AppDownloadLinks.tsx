"use client";

interface AppDownloadLinksProps {
  variant?: "horizontal" | "vertical" | "compact";
  className?: string;
}

export const AppDownloadLinks = ({
  variant = "horizontal",
  className = "",
}: AppDownloadLinksProps) => {
  const appleStoreUrl = "https://apps.apple.com/us/app/b-b-coffee-house/id1562147546";
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=uz.bnb.android";

  const isVertical = variant === "vertical";
  const isCompact = variant === "compact";

  return (
    <div
      className={`flex ${isVertical ? "flex-col" : "flex-row"} gap-3 ${className}`}
    >
      {/* Apple App Store */}
      <a
        href={appleStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 ${
          isCompact
            ? "px-4 py-2 border border-white/30 hover:border-white hover:bg-white/5 transition-all"
            : "px-5 py-3 bg-black border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all"
        }`}
      >
        <svg
          className={`${isCompact ? "w-5 h-5" : "w-6 h-6"} text-white`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C1.79 15.25 2.18 8.85 6.38 6.74c1.16-.58 2.21-.5 3.24.4.96.84 1.88.84 2.76 0 1.03-.9 2.08-.98 3.24-.4 2.11 1.05 3.5 2.9 3.88 5.5-1.8-1.1-3.96-1.7-6.12-1.7-2.16 0-4.32.6-6.12 1.7.38-2.6 1.77-4.45 3.88-5.5 1.16-.58 2.21-.5 3.24.4.88.84 1.8.84 2.76 0 1.03-.9 2.08-.98 3.24-.4 4.2 2.11 4.59 8.51 1.37 12.24zM12.03 3.5c.5 0 .95.2 1.3.55.35.35.55.8.55 1.3s-.2.95-.55 1.3c-.35.35-.8.55-1.3.55s-.95-.2-1.3-.55c-.35-.35-.55-.8-.55-1.3s.2-.95.55-1.3c.35-.35.8-.55 1.3-.55z" />
        </svg>
        <div className="flex flex-col">
          <span
            className={`${
              isCompact ? "text-[10px]" : "text-[10px]"
            } text-white/60 leading-tight`}
          >
            Download on the
          </span>
          <span
            className={`${
              isCompact ? "text-xs" : "text-sm"
            } font-medium text-white leading-tight`}
          >
            App Store
          </span>
        </div>
      </a>

      {/* Google Play Store */}
      <a
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex items-center gap-3 ${
          isCompact
            ? "px-4 py-2 border border-white/30 hover:border-white hover:bg-white/5 transition-all"
            : "px-5 py-3 bg-black border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all"
        }`}
      >
        <svg
          className={`${isCompact ? "w-5 h-5" : "w-6 h-6"} text-white`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
        <div className="flex flex-col">
          <span
            className={`${
              isCompact ? "text-[10px]" : "text-[10px]"
            } text-white/60 leading-tight`}
          >
            Get it on
          </span>
          <span
            className={`${
              isCompact ? "text-xs" : "text-sm"
            } font-medium text-white leading-tight`}
          >
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
};


