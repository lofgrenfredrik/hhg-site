function InfiniteCarouselDots({ carouselName, numberOfDots, activePage, onClick }) {
  const dots = []
  let classNameIcon
  let dotName

  for (let i = 0; i < numberOfDots; i += 1) {
    classNameIcon = `InfiniteCarouselDotIcon ${
      i === activePage ? "InfiniteCarouselDotActiveIcon" : ""
    }`
    dotName = `${carouselName}-dots-${i}`
    dots.push(
      <button
        name={dotName}
        data-testid={dotName}
        className="InfiniteCarouselDot"
        data-index={i}
        key={i + 1}
        onClick={onClick}
        type="button"
      >
        <i className={classNameIcon} />
      </button>
    )
  }

  return (
    <ul data-testid={`${carouselName}-dots`} className="InfiniteCarouselDots">
      {dots}
    </ul>
  )
}

export default InfiniteCarouselDots
