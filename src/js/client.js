const state = {
  number: []
};

//lState
const render = lState =>  {
  // Clear previous root content
  
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  //Div1
  const box1 = document.createElement('div');
  box1.className= 'box1';

  //Input 
  const entry = document.createElement('input');
  entry.className = 'entry';
  entry.id = 'myInput';
  entry.innerHTML = 'Ingrese el número';

  //Button 
  const generateBtn = document.createElement('button');
  generateBtn.className = 'generateBtn';
  generateBtn.innerHTML = 'Generar';

  root.appendChild(box1);
  box1.appendChild(entry);
  box1.appendChild(generateBtn);

  // Events: onclick
  // Using render cycle 
  generateBtn.onclick = () => {
    getNumber();
    const divContainer = document.createElement('div');
    divContainer.className = 'divContainer';
    for (let i = 0; i < state.number[i]; i += 1) {
      consolo.log('crear divs');
    }
    //render(lState);
  };
  
}

function getNumber(){
  let inputValue = document.getElementById('myInput').value;
  if (inputValue === '') {
    alert("Blank field");
  } else {
    //Adding the new task in the array
    state.number.push([document.getElementById('myInput').value]);
    console.log(state.number);
  }
  //Empty field
  document.getElementById("myInput").value = "";
}

//Function that add a new graph
function addGraph(){
  //Get the date
  const d = new Date();
  console.log(d);

  //Create a div container
  const divContainer = document.createElement('div');
  divContainer.className = 'divContainer';
  root.appendChild(divContainer);
  
  for (let i = 0; i < state.number[i]; i += 1) {
    const miniDiv = document.createElement('div');
    miniDiv.className = 'miniDiv';
  }
}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

//Rendering 
render(state);