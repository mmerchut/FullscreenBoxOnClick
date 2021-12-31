const itemBoxes = document.getElementsByClassName('item');
const box = document.querySelector('.box')

let boxColors = [
    {
      "id": "item1c",
      "colorBox": 'rgb(218, 143, 143)'
    },
    {
      "id": "item2c",
      "colorBox": 'rgb(127, 184, 132)'
    },
    {
        "id": "item3c",
        "colorBox": 'rgb(117, 84, 112)'
      },
      {
        "id": "item4c",
        "colorBox": 'rgb(142, 153, 78)'
      },
      {
        "id": "item5c",
        "colorBox": 'rgb(75, 154, 156)'
      },
      {
        "id": "item6c",
        "colorBox": 'rgb(14, 66, 36)'
      }
];
let bgc;



Array.prototype.forEach.call(itemBoxes, function(element) {
  element.addEventListener('click', function() {
    

    boxColors.filter(x => {
      if(x.id === `${element.id}`) {
          box.style.backgroundColor = `${x.colorBox}`;
      }
    });
        lightBox();

  });
});

const lightBox = () => {
    box.style.display = 'block';
}

const normalCss = () => {
    box.style.display = 'none';
}

box.addEventListener('click', normalCss)

