

var x = 0;
var y = 0;
var z = 0;
var r = 0;

var rbowChk = document.querySelector('#rainbow');
    rbowChk.addEventListener('click', () =>{
        r = 1;
    });

const container = document.querySelector('#container');


var btnSubmit = document.querySelector('#submit');
    btnSubmit.addEventListener('click', createGrid);
                               
    function createGrid() {
 
    var gridSize = document.getElementById('Size').value;
        if (gridSize > 80){
            alert('Please select a number lower than 80 for your computer\'s sake')
            gridSize = 80;}
        boxSize = (700/gridSize);
        boxSize = boxSize.toFixed(2);
        boxNo = Math.pow(gridSize,2);
    
     
    
     for (i=0; i < boxNo; i++) {
          const div = document.createElement('div');
         div.className = 'gridbox';
         container.appendChild(div);
     }   
        
var grids = document.querySelectorAll('.gridbox');
        
        for (i=0; i < grids.length; i++){
            grids[i].style.height = boxSize+"px";
            grids[i].style.width = boxSize+"px";};
        

            grids.forEach((div) => {
             
                
           div.addEventListener('mouseover', (e) => {
                x = Math.random()*300*r;
                y = Math.random()*300*r;
                z = Math.random()*300*r;
            e.target.style.background = "rgb("+x+","+y+","+z+")"; 
            });
                
        });
    };
//Button Reset -----------------------------------------------------------------
var btnReset = document.querySelector('#reset');
    btnReset.addEventListener('click', () => {
        document.querySelectorAll('.gridbox').forEach((div) => {
            div.style.background = 'white';
            x = 0;
            y = 0;
            z = 0;
            r = 0;
        });
    });
//Default Grid Generation--------------------------------------------------------
function defaultGrid() {
var defaultInput = document.querySelector('#Size')
defaultInput.value = 23;
    createGrid();
    defaultInput.value = '';
}

window.onload = defaultGrid;