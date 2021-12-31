var itemBoxes = document.getElementsByClassName('item');

let boxColors = [
    {
      "id": "item1c",
      "colorBox": 'background-color: rgb(218, 143, 143)'
    },
    {
      "id": "item2c",
      "colorBox": 'background-color: rgb(127, 184, 132)'
    },
    {
        "id": "item3c",
        "colorBox": 'background-color: rgb(117, 84, 112)'
      },
      {
        "id": "item4c",
        "colorBox": 'background-color: rgb(142, 153, 78)'
      },
      {
        "id": "item5c",
        "colorBox": 'background-color: rgb(75, 154, 156)'
      },
      {
        "id": "item6c",
        "colorBox": 'background-color: rgb(14, 66, 36)'
      }
];
let bgc;



Array.prototype.forEach.call(itemBoxes, function(element) {
  element.addEventListener('click', function() {
    
    // console.log('data: ' + boxColors[id[element.id]]);
    // console.log(boxColors.filter(x => x.id === `${element.id}`));
    boxColors.filter(x => {
      bgc = x.id === `${element.id}`}
        );
        console.log(bgc);

  });
});

