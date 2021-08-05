//$('.fancybox').fancybox();

$('.connect__button').click(function(){
  let descr = document.getElementById("con-descr").value;
  document.getElementById("data-descr").innerHTML=descr;
  
});

let images = document.querySelector(".data__images");

function download(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  let name = file.name;
  reader.onload = function () {
    
    let img = document.createElement("img");
    let text = document.createElement("p")
    let wrapper = document.createElement("div")

    text.innerHTML = name;

    images.appendChild(wrapper);
    wrapper.appendChild(img);
    wrapper.appendChild(text);

    img.src = reader.result;
  }
}

let task = document.querySelector('.data__task')

function document1(input) {
  let file1 = input.files[0];
  let reader1 = new FileReader();
  reader1.readAsDataURL(file1);
  let name = file1.name;
  reader1.onload = function () {
    
    let text1 = document.createElement("p")

    text1.innerHTML = name;

    task.appendChild(text1);
  }
}
$('.completed__list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 961,
      settings: {
        rows: 2,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        rows: 1,
        slidesToShow: 1,
      }
    },
  ]
});




if($(window).width() < 960){
  $('.trust__list').slick({
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  });
} else {
  $('.trust__list').slick("unslick");
}


function createLine(lineHeight, lineColor) {
  var canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = lineHeight;
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(0,lineHeight - 0.5);
  ctx.lineTo(1,lineHeight - 0.5);
  ctx.strokeStyle=lineColor;
  ctx.stroke();
  return canvas.toDataURL();
}

var base64 = createLine(48, 'rgba(255, 255, 255, 0.2)');

//console.log(base64);


// let descr=document.getElementById("con-descr").value;
// console.log(descr);
// document.getElementById("data-descr").innerHTML=descr;
