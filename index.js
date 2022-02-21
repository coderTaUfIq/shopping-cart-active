function handleProductChange(product, isIncrease){
    var productInput = document.getElementById(product + '-count');
    var productCount = parseInt(productInput.value);
    let productNewCount = 0;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    else if(isIncrease == false  && productCount > 0){
        productNewCount = productCount -1;
    }
    productInput.value = productNewCount;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    else if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = productTotal;

    calculateTotal();
}

function calculateTotal(){
    const phoneInput = document.getElementById('phone-count')
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('case-count')
    const caseCount = parseInt(caseInput.value);

                      //  sub total
    const totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText = totalPrice;

                      //   tax
    const taxCount = Math.round(totalPrice * (8/100));
    document.getElementById('tax-amount').innerText = taxCount;

                      //   grand total
    const grandTotal = totalPrice + taxCount;
    document.getElementById('grand-total').innerText = grandTotal;
}

