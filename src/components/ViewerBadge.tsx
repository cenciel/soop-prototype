type ViewerBadgeProps = {
  count: number;
};

export function ViewerBadge({ count }: ViewerBadgeProps) {
  return (
    <span className="viewer-badge">
      <span className="live-dot" />
      {count.toLocaleString('en-US')}
    </span>
  );
}
