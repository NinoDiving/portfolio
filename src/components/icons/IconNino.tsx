export const IconNino = ({ width = 200, height = 80, className = "" }) => {
  return (
    <svg
      viewBox="0 0 200 80"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ccf381", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#4831d4", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#4831d4", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#ccf381", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Cercle principal avec le "N" */}
      <circle
        cx="35"
        cy="40"
        r="25"
        fill="url(#mainGradient)"
        filter="url(#glow)"
      />
      <text
        x="35"
        y="48"
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="900"
        textAnchor="middle"
        fill="white"
      >
        N
      </text>

      {/* Nom "INO" en typographie géométrique */}
      <g transform="translate(70, 25)">
        {/* I stylisé */}
        <rect x="0" y="0" width="4" height="30" rx="2" fill="#4831d4" />
        <rect x="-2" y="0" width="8" height="4" rx="2" fill="#4831d4" />
        <rect x="-2" y="26" width="8" height="4" rx="2" fill="#4831d4" />

        {/* N stylisé */}
        <rect
          x="15"
          y="0"
          width="4"
          height="30"
          rx="2"
          fill="url(#accentGradient)"
        />
        <rect
          x="35"
          y="0"
          width="4"
          height="30"
          rx="2"
          fill="url(#accentGradient)"
        />
        <rect
          x="19"
          y="12"
          width="16"
          height="4"
          rx="2"
          fill="url(#accentGradient)"
          transform="rotate(25 27 14)"
        />

        {/* O stylisé */}
        <circle
          cx="55"
          cy="15"
          r="12"
          fill="none"
          stroke="#ccf381"
          strokeWidth="4"
        />
        <circle cx="55" cy="15" r="5" fill="#ccf381" />
      </g>

      {/* Éléments décoratifs tech */}
      <g transform="translate(10, 65)">
        <rect
          x="0"
          y="0"
          width="8"
          height="2"
          rx="1"
          fill="#ccf381"
          opacity="0.7"
        />
        <rect
          x="12"
          y="0"
          width="4"
          height="2"
          rx="1"
          fill="#4831d4"
          opacity="0.7"
        />
        <rect
          x="20"
          y="0"
          width="12"
          height="2"
          rx="1"
          fill="#ccf381"
          opacity="0.7"
        />
        <text
          x="40"
          y="8"
          fontFamily="Arial, sans-serif"
          fontSize="8"
          fill="#4831d4"
          opacity="0.8"
        >
          WEB &amp; MOBILE DEV
        </text>
      </g>

      {/* Particules flottantes avec animations */}
      <circle cx="160" cy="20" r="2" fill="#ccf381" opacity="0.6">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="170" cy="35" r="1.5" fill="#4831d4" opacity="0.5">
        <animate
          attributeName="opacity"
          values="0.5;0.9;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <rect
        x="175"
        y="50"
        width="3"
        height="3"
        rx="1"
        fill="#ccf381"
        opacity="0.4"
      >
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  );
};
