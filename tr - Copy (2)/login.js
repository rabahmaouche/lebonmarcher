let signkey = document.getElementById('sinscrire');
let loginKey = document.getElementById('sinscrire1')
let loginForm = document.querySelector('.form3');
let login = document.querySelector('.dorm4')
let header = document.querySelector('header');
let overlay = document.querySelector('.overlay');
let xMark = document.querySelector('#iconx');
let submitBtn = document.getElementById('submitbotton');
let forgetpass = document.getElementById('forgotpass');
let wantToJoin = document.querySelector('.envie');
let connectdisc = document.querySelector('.connect-discription');
let email = document.querySelector('.email');
let Email = document.getElementById('email');
let password = document.getElementById('password');
let usernameInput = document.getElementById('username');
let createAcounte = document.getElementById('create');
let links = document.querySelector('.links');

function clearData(){
    usernameInput.value = '';
    Email.value = '';
    password.value='';
}


signkey.addEventListener('click', function(e){
    e.preventDefault();
    if(signkey.innerHTML == "S'inscrire"){
    loginForm.style.display ='block';
    overlay.style.display= 'block';
    submitBtn.value ='Sinscrire';
    forgetpass.style.display ='none';
    wantToJoin.innerHTML = 'Envie de se connecter?';
    createAcounte.innerHTML = ' Se connecter';
    connectdisc.innerHTML = 'Inscris-vous pour découvrir toutes nos fonctionnalités.';
    usernameInput.focus();
    clearData();
   
    }else{
        setTimeout(() =>{
            window.location = 'index.html';
        },1500);
        alert('you loged out succefully')
        localStorage.clear();
        clearData();

    }
    
})

createAcounte.addEventListener('click', function(e){
    e.preventDefault();
    if(createAcounte.innerHTML === ' Créer un compte'){
    loginForm.style.display ='block';
    overlay.style.display= 'block';
    email.style.display ='block';
    submitBtn.value ='Sinscrire';
    forgetpass.style.display ='none';
    wantToJoin.innerHTML = 'Envie de se connecter?';
    createAcounte.innerHTML = ' Se connecter';
    connectdisc.innerHTML = 'Inscris-vous pour découvrir toutes nos fonctionnalités.';
    }else{
    loginForm.style.display ='block';
    overlay.style.display= 'block';
    email.style.display = 'none';
    submitBtn.value ='Se connecter';
    forgetpass.style.display ='block';
    wantToJoin.innerHTML = 'Envie de nous rejoindre?';
    createAcounte.innerHTML = ' Créer un compte';
    connectdisc.innerHTML = 'Connectez-vous  pour découvrir toutes nos fonctionnalités.';
    }
   
})


loginKey.addEventListener('click', function(e){
    e.preventDefault();
    loginForm.style.display ='block';
    overlay.style.display= 'block';
    email.style.display = 'none';
    clearData();
    usernameInput.focus();

})



xMark.addEventListener('click', function(e){
    loginForm.style.display = 'none';
} )


// sign up click 



submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if (submitBtn.value === 'Sinscrire'){
        if(usernameInput.value === "" || Email.value === "" || password.value === ""){
            alert('please fill the form')
        }else{
            localStorage.setItem("username", usernameInput.value);
            localStorage.setItem("email",Email.value);
            localStorage.setItem("password", password.value);
            alert('User data has been saved to local storage.');
            setTimeout(() =>{
                window.location = loginForm.innerHTML;
                email.style.display = 'none';
                submitBtn.value ='Se connecter';
                forgetpass.style.display ='block';
                wantToJoin.innerHTML = 'Envie de nous rejoindre?';
                createAcounte.innerHTML = ' Créer un compte';
                connectdisc.innerHTML = 'Connectez-vous  pour découvrir toutes nos fonctionnalités.';
            },1000);
            
            
        }
        usernameInput.focus();
    }else{
        if(usernameInput.value === ""  || password.value === ""){
            alert('please fill the form')
        }else{
            let storedUsername = localStorage.getItem('username');
            let storedPassword = localStorage.getItem('password');

      if (storedUsername && storedUsername.trim() === usernameInput.value.trim() &&
          storedPassword && storedPassword === password.value){
                setTimeout(() =>{
                    window.location = 'index.html'
                },1500);
                
            }else{
                alert('wrong information  try again')
            }
            
            
        }
        clearData();
        usernameInput.focus();
    }
    
    
})



let Acount = document.getElementById('useracount');

let storedUsername = localStorage.getItem('username');

if(storedUsername){
    Acount.innerHTML = storedUsername;
    signkey.innerHTML= 'log out';
    links.style.display = 'block';
    loginKey.remove();
}


// definf product 

let productDom = document.querySelector('.main-product')
let cardProductDom = document.querySelector('.card-product div');
let cardMenu  = document.querySelector('.card-product'); 
let mesfavorite = document.querySelector('.mes-favorite');
let productNumber = document.getElementById('product-n');
let productShopingCardNumber = document.getElementById('shoping-card-n')
let product;



     product = [
    {
       id : '1',
       imageUrl : './Dark Futuristic Wave Lines Desktop Background (2) - Copy.png',
       CurrentPrice :'3500DA',
       oldPrice :'4500DA',
       reduction :'-3% ',
       newProduct : 'offrebienvenue ',
       productSold : '+10000',
       review : '4.4',
       productName : 'jet',
       freeDelevery : 'Livraison gratuite',
    },
    {
        id : '2',
        imageUrl : './Dark Futuristic Wave Lines Desktop Background (2) - Copy.png',
        CurrentPrice :'3500DA',
        oldPrice :'4500DA',
        reduction :'-3% ',
        newProduct : 'offrebienvenue ',
        productSold : '+10000 ',
        review : '4.4',
        productName : 'plan',
        freeDelevery : 'Livraison gratuite',
     },
     {
        id : '3',
        imageUrl : './Dark Futuristic Wave Lines Desktop Background (2) - Copy.png',
        CurrentPrice :'3500DA',
        oldPrice :'4500DA',
        reduction :'-3% ',
        newProduct : 'offrebienvenue ',
        productSold : '+6000 ',
        review : '4.4',
        productName : 'bike',
        freeDelevery : 'Livraison gratuite',
     },
     {
        id : '4',
        imageUrl : './Dark Futuristic Wave Lines Desktop Background (2) - Copy.png',
        CurrentPrice :'5000DA',
        oldPrice :'2000DA',
        reduction :'-3% ',
        newProduct : 'offrebienvenue ',
        productSold : '+5000 ',
        review : '4.4',
        productName : 'car',
        freeDelevery : 'Livraison gratuite',
     },
     {
        id : '4',
        imageUrl : './Dark Futuristic Wave Lines Desktop Background (2) - Copy.png',
        CurrentPrice :'5000DA',
        oldPrice :'2000DA',
        reduction :'-3% ',
        newProduct : 'offrebienvenue ',
        productSold : '+5000 ',
        review : '4.4',
        productName : 'car',
        freeDelevery : 'Livraison gratuite',
     },
     
];



function drawProductUi() {
    let ProductUi = product.map((item) =>{
        return`
        <div class="main-product1">
        <a href=""><img src="${item.imageUrl}" alt=""></a>
        <i class="fa-regular fa-heart" onclick="addedToCrad(${item.id})"></i>
        <a href="">
            <strong>${item.CurrentPrice}</strong> 
            <del>${item.oldPrice}</del><br>
            <span>${item.reduction} avec les pieces</span><br>
        </a>
        <a href=""><h6>${item.newProduct}</h6></a>
        <a href="">
            <span class="sp-0">${item.productSold} vendus(s)</span>
            <span class="sp-1"><i class="fa-solid fa-star fa-2xs"></i>${item.review}</span><br> 
            <span class="sp-2">${item.productName}</span><br>
            <span class="sp-3">${item.freeDelevery}</span>
        </a>
    </div>
    
    
        `
    })

    productDom.innerHTML = ProductUi.join('');
};
drawProductUi()

let addeditem = [];

function addedToCrad(id){
    if(localStorage.getItem('username')){
        let choseitem = product.find((item) => item.id == id)
        cardProductDom.innerHTML += `<p>${choseitem.productName}</p>`;
        let productLength = document.querySelectorAll('.card-product div p');
        addeditem = [...addeditem, choseitem];
        localStorage.setItem('product', JSON.stringify(addeditem));
        productNumber.innerHTML = productLength.length;
        productShopingCardNumber.style.display = 'block';
        productShopingCardNumber.innerHTML = productLength.length;
    }else{
    loginForm.style.display ='block';
    overlay.style.display= 'block';
    email.style.display ='block';
    document.body.style.overflow = "hidden";
    submitBtn.value ='Sinscrire';
    forgetpass.style.display ='none';
    wantToJoin.innerHTML = 'Envie de se connecter?';
    createAcounte.innerHTML = ' Se connecter';
    connectdisc.innerHTML = 'Inscris-vous pour découvrir toutes nos fonctionnalités.';

    }

    

    
}


function checkLogInUser(){
    
    
}


mesfavorite.addEventListener('click', function(){
        if(cardProductDom.innerHTML != ''){
            if(cardMenu.style.display == 'block'){
                cardMenu.style.display = 'none';
            }else{
                cardMenu.style.display = 'block';
            }
        }   
        
    
})










