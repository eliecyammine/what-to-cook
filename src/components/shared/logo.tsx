import { TITLE } from '@/lib/constants/site';
import { cn } from '@/lib/utils';

export type IconProps = React.HTMLAttributes<SVGElement>;

/// ---------- || TYPES & INTERFACES || ---------- ///

interface LogoProps {
  width?: string;
  height?: string;

  color?: string;

  iconProps?: IconProps;
}

/// ---------- || LOGO || ---------- ///

export function Logo({ color, width, height, iconProps }: LogoProps) {
  return (
    <svg
      viewBox="0 0 301 329"
      x="0px"
      y="0px"
      width={width}
      height={height}
      fill={color ?? 'hsl(var(--foreground))'}
      xmlns="http://www.w3.org/2000/svg"
      {...iconProps}
    >
      <circle cx="75.52" cy="313.208" r="15" />
      <circle cx="125.52" cy="313.208" r="15" />
      <circle cx="175.52" cy="313.208" r="15" />
      <circle cx="225.52" cy="313.208" r="15" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M277.667 163.869C277.667 163.869 306.117 116.415 280.346 85.501C238.317 35.0851 180.269 67.3832 180.269 67.3832C185.907 61.0168 192.958 55.1451 206.15 51.4218C206.15 51.4218 186.979 16.8021 141.013 23.3845C75.9636 32.6968 61.2098 94.9914 61.2098 94.9914C60.7539 85.5567 61.1511 75.8393 64.2293 65.2269C64.2293 65.2269 39.3429 68.092 24.6468 85.3506C-5.78173 121.086 29.1327 161.272 29.1327 161.272C29.1327 161.272 -18.4619 132.907 9.11745 82.2466C27.5936 48.3068 66.1128 53.0674 66.1128 53.0674C66.1128 53.0674 88.7035 5.25884 139.991 0.975058C211.621 -5.00612 223.395 46.0519 223.395 46.0519C223.395 46.0519 267.93 37.4455 292.024 79.1674C317.464 123.223 277.667 163.869 277.667 163.869ZM119.508 161.53C172.995 151.865 219.774 155.167 255.12 180.578C247.125 194.931 244.049 214.9 250.583 232.284C241.266 223.157 235.83 211.158 236.189 186.455C210.765 166.964 156.768 159.858 119.508 161.53ZM67.4847 183.022C79.0418 197.561 85.5536 220.147 81.6183 242.432C145.34 220.185 197.923 229.714 238.381 253.048C177.241 240.209 118.341 238.298 64.9431 263.208C71.2607 237.847 72.7779 211.286 67.4847 183.022Z"
      />
    </svg>
  );
}

/// ---------- || LOGO WITH TEXT || ---------- ///

export function LogoWithText({
  isSmall,
  className,
  iconProps,
}: {
  isSmall?: boolean;
  className?: string;
  iconProps?: IconProps;
}) {
  return (
    <div className={cn('flex flex-col items-center space-y-3', className)}>
      <Logo height={isSmall ? '50px' : '80px'} {...iconProps} />

      <h4 className={cn('font-logo font-medium', isSmall ? 'text-4xl' : 'text-5xl sm:text-6xl')}>
        {TITLE}
      </h4>
    </div>
  );
}
