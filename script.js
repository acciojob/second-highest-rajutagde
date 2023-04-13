//your JS code here. If required.
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith', 'Rolling Stones', 'Queen', 'Anthrax', 'Black Sabbath'];

function sortBands(bands) {
  const articles = ['the', 'a', 'an'];
  const sortedBands = bands.sort(function(a, b) {
    const nameA = a.toLowerCase().replace(/^(the|an|a)\s+/, '');
    const nameB = b.toLowerCase().replace(/^(the|an|a)\s+/, '');
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return sortedBands;
}

bandNames = sortBands(bandNames);

const bandList = document.getElementById('band');
bandNames.forEach(function(band) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(band));
  bandList.appendChild(li);
});
