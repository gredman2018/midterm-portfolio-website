function cycleBackgrounds(interval) {
  let index = 0

  const $imageEls = $('.container .slide') // Get the images to be cycled.

  setInterval(() => {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0

    // Show the next
    $imageEls.eq(index).addClass('show')

    // Hide the previous
    $imageEls.eq(index - 1).removeClass('show')
  }, interval)
}

$(function () {
  // cycleBackgrounds(3000);
});