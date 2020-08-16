export const flatten = (arrays) => [].concat.apply([], arrays)

export const shouldStartSlideshow = () => {
  const url = new URL(window.location.href)
  return !url.searchParams.has("no-slideshow")
}
