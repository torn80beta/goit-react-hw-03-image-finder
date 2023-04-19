export function scroll() {
  try {
    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 3.2,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  }
}
