const adviceButton = document.getElementById("btn");
const adviceNumber = document.getElementById("advice-id");
const adviceDescription = document.getElementById("advice-description");

async function getAdvice(){
  const response = await fetch("https://api.adviceslip.com/advice")
  const adviceContent = await response.json();
  console.log(adviceContent)
  const adviceId = `Advice #${adviceContent.slip.id}`;
  const adviceText = `"${adviceContent.slip.advice}"`;

  adviceNumber.innerHTML = adviceId;
  adviceDescription.innerHTML = adviceText;
}

adviceButton.addEventListener('click', getAdvice);
getAdvice()