function InfiniteCarouselArrow({ carouselName, next = true, onClick }) {
  const arrowClassName = "InfiniteCarouselArrow"
  let typeClassName
  if (next) {
    typeClassName = "InfiniteCarouselArrowNext"
  } else {
    typeClassName = "InfiniteCarouselArrowPrev"
  }

  const iconClassName = "InfiniteCarouselArrowIcon"
  let iconTypeClassName
  if (next) {
    iconTypeClassName = "InfiniteCarouselArrowNextIcon"
  } else {
    iconTypeClassName = "InfiniteCarouselArrowPrevIcon"
  }

  const className = `${arrowClassName} ${typeClassName}`
  const classNameIcon = `${iconClassName} ${iconTypeClassName}`
  const buttonName = `${carouselName}-button-${next ? "next" : "previous"}`

  return (
    <button
      name={buttonName}
      data-testid={buttonName}
      className={className}
      onClick={onClick}
      type="button"
    >
      <i className={classNameIcon} />
    </button>
  )
}

export default InfiniteCarouselArrow
