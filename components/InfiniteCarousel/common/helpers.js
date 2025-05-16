export function getElementWidth(elem) {
  return elem.getBoundingClientRect().width || elem.offsetWidth || 0
}

export function getElementHeight(elem) {
  return elem.getBoundingClientRect().height || elem.offsetHeight || 0
}

export function getSwipeDirection(x1, x2, y1, y2) {
  const xDist = x1 - x2
  const yDist = y1 - y2

  let swipeAngle = Math.round((Math.atan2(yDist, xDist) * 180) / Math.PI)

  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle)
  }
  if (swipeAngle <= 45 && swipeAngle >= 0) {
    return 1
  }
  if (swipeAngle <= 360 && swipeAngle >= 315) {
    return 1
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return -1
  }
  return 0
}

export function isTouchDevice() {
  return typeof document !== "undefined" && "ontouchstart" in document.documentElement
}

export function sortNumber(a, b) {
  return a - b
}

export function getScreenWidth() {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  }
  return 0 // Return a default or handle appropriately for server-side
}
