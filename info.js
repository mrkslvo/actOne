export function createInfo(titleOne, titleTwo, paragraphOne, paragraphTwo, buttonOne, buttonTwo, buttonThree, buttonFour) {
  const infoDiv = document.createElement('div');
  infoDiv.className = 'right'
  infoDiv.innerHTML = `
      <h1>${titleOne}</h1>
      <p>${paragraphOne}</p>
      <h1>${titleTwo}</h1>
      <p>${paragraphTwo}</p>
      <div>
      <button id="btn1">${buttonOne}</button>
      <button id="btn2">${buttonTwo}</button>
      <button id="btn3">${buttonThree}</button>
      <button id="btn4">${buttonFour}</button>
      </div>
  `;
  return infoDiv;
}
