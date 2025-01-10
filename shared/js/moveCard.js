document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const sortable = new Sortable(container, {
    animation: 150,
    handle: '.sortable-handle',
    ghostClass: 'sortable-ghost',
    onEnd: () => {
      updateCardNumbers();
    },
  });


  const updateCardNumbers = () => {
    const cards = container.querySelectorAll('.card-initial');
    cards.forEach((card, index) => {
      const cardNumberElement = card.querySelector('.card-number');
      if (cardNumberElement) {
        cardNumberElement.textContent = index + 1;
      }
    });
  };

  updateCardNumbers();
});
