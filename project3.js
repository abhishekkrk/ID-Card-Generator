const form = document.forms['id-card'];
const cardContent = document.querySelector('.card');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const name = form.elements['name'].value;
  const college = form.elements['college'].value;
  const location = form.elements['location'].value;
  const picture = form.elements['picture'].files[0];

  cardContent.innerHTML = '';

  const cardTitle = document.createElement('p');
  cardTitle.innerText = 'Generated ID Card';
  cardTitle.style.textAlign = 'center';
  cardContent.appendChild(cardTitle);

  const stdImg = document.createElement('div');
  stdImg.className = 'div';

  const stdDet = document.createElement('div');
  stdDet.className = 'div';

  const nameElement = document.createElement('p');
  nameElement.innerHTML = 'Name: ' + name;
  stdDet.appendChild(nameElement);

  const collegeElement = document.createElement('p');
  collegeElement.innerHTML = 'College: ' + college;
  stdDet.appendChild(collegeElement);

  const locationElement = document.createElement('p');
  locationElement.innerHTML = 'Location: ' + location;
  stdDet.appendChild(locationElement);

  if (picture) {
    const picElement = document.createElement('img');
    picElement.src = URL.createObjectURL(picture);
    picElement.alt = 'Student Picture';
    stdImg.appendChild(picElement);
  }

  cardContent.appendChild(stdImg);
  cardContent.appendChild(stdDet);
});