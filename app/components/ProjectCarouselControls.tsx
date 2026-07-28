"use client";

type ProjectCarouselControlsProps = {
  railId: string;
};

export default function ProjectCarouselControls({
  railId,
}: ProjectCarouselControlsProps) {
  const moveRail = (direction: -1 | 1) => {
    const rail = document.getElementById(railId);

    if (!rail) return;

    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.82, 760),
      behavior: "smooth",
    });
  };

  return (
    <div
      className="recent-project-controls"
      aria-label="Project carousel controls"
    >
      <button
        type="button"
        aria-label="Show previous project"
        onClick={() => moveRail(-1)}
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Show next project"
        onClick={() => moveRail(1)}
      >
        →
      </button>
    </div>
  );
}
