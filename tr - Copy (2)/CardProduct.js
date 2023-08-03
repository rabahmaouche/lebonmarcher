let checkstorage = localStorage.getItem('product');


if(checkstorage){
    let item = JSON.parse(drawCardProductUi)
    drawCardProductUi(item);
}

function drawCardProductUi(product) {
    let ProductUi = product.map((item) =>{
        return`
        <div class="main-product1">
        <a href=""><img src="${item.imageUrl}" alt=""></a>
        <i  onclick="removeFromCrad(${item.id})">remove from card</i>
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