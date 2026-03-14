export function ObsidLogo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      {/* Outer diamond */}
      <path d="M16 1L31 16L16 31L1 16L16 1Z" fill="#4d7c6f" fillOpacity="0.15" />
      {/* Diamond ring — two mirrored chevrons forming <> */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1L31 16L16 31L1 16L16 1ZM16 9L23 16L16 23L9 16L16 9Z"
        fill="#4d7c6f"
      />
    </svg>
  );
}
