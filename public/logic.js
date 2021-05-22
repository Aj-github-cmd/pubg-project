var a = document.getElementById('child1div')
var b = document.getElementById('child2div')
var c = document.getElementById('child3div')
var audio1 = new Audio("image/click1.mp3");
var audio2 = new Audio("image/click2.mp3");
var dataform = document.getElementById('dataform')
  document.getElementById('actionbtn').addEventListener('click',()=>
  {
    audio2.play()
    var id = dataform['fname'].value;
    var level = dataform['lname'].value;
    if(id=="")
    {
      alert('fill the form to proceed')
    }
    else if(level==""){
      alert('Fill the form to proceed')
    }
    else{
      a.style.display = "none";
      c.style.display = "block";
    }

  })
  var images = ["image/1.jpeg","image/2.jpeg","image/3.jpeg","image/4.jpeg","image/5.jpeg","image/6.jpeg"]
  function clickOne()
  {
    audio1.play()
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "block";
    document.getElementById('randompic').src = images[0]
  }
  function clickTwo()
  {
    audio1.play()
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "block";
    document.getElementById('randompic').src = images[1]
  }
  function clickThree()
  {
    audio1.play()
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "block";
    document.getElementById('randompic').src = images[2]
  }
  function clickFour()
  {
    audio1.play()
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "block";
    document.getElementById('randompic').src = images[3]
  }
  function clickFive()
  {
    audio1.play()
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "block";
    document.getElementById('randompic').src = images[4]
  }
  function clickSix()
  {
    audio1.play()
    a.style.display = "none";
    c.style.display = "none";
    b.style.display = "block";
    document.getElementById('randompic').src = images[5]
  }
  function win()
  {
    audio1.play()
  }