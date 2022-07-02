//alert("working");
var a=Math.floor(Math.random()*6)+1;
    var b=Math.floor(Math.random()*6)+1;
    // console.log(a);
    // console.log(b);
    var image="/images/dice"+a+".png";
    //console.log(image);
    const image1=document.getElementsByClassName('img1')[0];
    image1.setAttribute('src',image);
    var imagee="/images/dice"+b+".png";
    const image2=document.getElementsByClassName('img2')[0];
    image2.setAttribute('src',imagee);

   //console.log(image1);
    // image1.setAttribute("src",image[a]);
    const heading=document.getElementsByTagName('h1')[0];
    if(a>b){
        heading.innerHTML="Yayy!player1 won!";
    }else if(a<b){
        heading.innerHTML="Yayy!player2 won!";
    }
    
    // var image2=document.querySelector(".img2");
    // image2.setAttribute("src",image[b]);