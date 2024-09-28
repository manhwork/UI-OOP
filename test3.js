const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button, index){
    button.addEventListener("click", function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("ten").innerText
        var productPrice = product.querySelector("price").innerText
        //console.log(productPrice, productImg, productName)
        addCart(productPrice, productImg, productName)
    }})
})

function addCart(productPrice, productImg, productName){
    var addTr = document.createElement("tr")
    var trconten = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px" src="'+productImg+'" alt="">'+productName+'</td><td><span>'+productPrice+'</span></td><td><input style="width: 30px; outline: none; " type="number" value = "1" min = "1"></td><td style="cursor: pointer;">Xóa</td></tr> '
    addTr.innerHTML = trconten
    var cartTable = document.querySelector("tbody")
    cartTable.append(addTr)
}