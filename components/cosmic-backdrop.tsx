export function CosmicBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-stars animate-twinkle" />
      <div className="absolute -top-40 -left-32 size-[38rem] rounded-full bg-primary/30 blur-[120px] animate-drift" />
      <div className="absolute top-1/3 -right-40 size-[34rem] rounded-full bg-primary/25 blur-[140px] animate-drift-slow" />
      <div className="absolute -bottom-48 left-1/4 size-[30rem] rounded-full bg-primary/20 blur-[130px] animate-drift" />
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
    </div>
  )
}
