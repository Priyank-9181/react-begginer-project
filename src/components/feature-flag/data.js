const dummyJson = {
  showLightAndDarkMode: false,
  showTicTacToe: true,
  showRandomColorGenerator: true,
  showTreeView: false,
  showStarRating: false,
};

export function featureFlagsServiceCall() {
  return new Promise((res, rej) => {
    if (dummyJson) {
      setTimeout(() => {
        res(dummyJson);
      }, 500);
    } else {
      rej("Some Error Found");
    }
  });
}
