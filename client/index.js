const countItem = document.querySelector('.navbar__count-item');
const countItems = document.querySelector('.container-your-cart__count_items');
const countItemBut = document.querySelectorAll('.main-container-cart-total__contain__count-item-1');
const closet =  document.querySelectorAll('.main-container-cart-total__item-1_img');
const items = document.querySelectorAll('.main-container-cart-total__item-1');
const itemPrice = document.querySelectorAll('.main-container-cart-total__item_price');
const totalPrice = document.querySelector('.navbar__total_price')
const totalPriceCard = document.querySelector('.total__container__sum-row-title-2');
const totalPriceCard2 = document.querySelector('.total__container__sum-row-title');
const amountItems = document.querySelector('#amount');
const x = document.querySelectorAll('#x');
const hr = document.querySelectorAll('hr');
const minus = document.querySelectorAll('.main-container-cart-total__contain-count__minus-btn');
const plus = document.querySelectorAll('.main-container-cart-total__contain__plus')
const check = document.querySelector('#check');
const install = document.querySelector('#install');
const btnSendServer = document.querySelector('.total__container-btn__title-1');
const clearBtn = document.querySelector('.container-your-cart__clear-cart');

//



// clearBtn.addEventListener('click', () => {
//   for (let i = 0; i < items.length; i++) {
//     items[i].remove()
//     hr[i].remove()
//   }
// })

check.addEventListener('click', function () {
  if (install.innerText === 'Да') {
    return install.innerText = 'Нет'
  } 
  if (install.innerText === 'Нет'){
    return install.innerText = 'Да'
  }
})

//
for (let q = 0; q < minus.length; q++) {
  //
  minus[q].addEventListener('click', () => {
    if(countItemBut[q].innerText >= 1) {
      countItemBut[q].innerText -= 1;

      amountItems.innerText = `${+(document.querySelector('#amount').innerText[0]) - 1} шт`
      countItem.innerText = `${+(document.querySelector('.navbar__count-item').innerText[0]) - 1} товара`
      countItems.innerText = `${+(document.querySelector('.container-your-cart__count_items').innerText[0]) - 1} товара`
    }

    totalCount = 0
      for(let j = 0; j < document.querySelectorAll('.main-container-cart-total__item_price').length; j++) {
        count = document.querySelectorAll('.main-container-cart-total__contain__count-item-1')[j].innerText;
        totalCount += +(document.querySelectorAll('.main-container-cart-total__item_price')[j].innerText.replace(/\s/g, '').slice(0,-1)) * count;
      }
      totalPrice.innerText = `${totalCount} ₽`
      totalPriceCard.innerText = `${totalCount} ₽`
      totalPriceCard2.innerText = `${totalCount} ₽`

  })
  //
  plus[q].addEventListener('click', () => {
    
          countItemBut[q].innerText = +countItemBut[q].innerText + 1;
    
          amountItems.innerText = `${+(document.querySelector('#amount').innerText[0]) + 1} шт`
          countItem.innerText = `${+(document.querySelector('.navbar__count-item').innerText[0]) + 1} товара`
          countItems.innerText = `${+(document.querySelector('.container-your-cart__count_items').innerText[0]) + 1} товара`

      totalCount = 0
      for(let j = 0; j < document.querySelectorAll('.main-container-cart-total__item_price').length; j++) {
        count = document.querySelectorAll('.main-container-cart-total__contain__count-item-1')[j].innerText;
        totalCount += +(document.querySelectorAll('.main-container-cart-total__item_price')[j].innerText.replace(/\s/g, '').slice(0,-1)) * count;
      }
      totalPrice.innerText = `${totalCount} ₽`
      totalPriceCard.innerText = `${totalCount} ₽`
      totalPriceCard2.innerText = `${totalCount} ₽`
  })
}

//
let totalCount = 50576
for(let i = 0; i < x.length; i++) {
  //
  x[i].addEventListener('click', () => {

      items[i].remove()
      hr[i].remove()

      totalCount = 0
      for(let j = 0; j < document.querySelectorAll('.main-container-cart-total__item_price').length; j++) {
        count = document.querySelectorAll('.main-container-cart-total__contain__count-item-1')[j].innerText;
        totalCount += +(document.querySelectorAll('.main-container-cart-total__item_price')[j].innerText.replace(/\s/g, '').slice(0,-1)) * count;
        console.log(document.querySelectorAll('.main-container-cart-total__contain__count-item-1')[j].innerText);
      }

      totalPrice.innerText = `${totalCount} ₽`
      totalPriceCard.innerText = `${totalCount} ₽`
      totalPriceCard2.innerText = `${totalCount} ₽`
      amountItems.innerText = `${document.querySelectorAll('.main-container-cart-total__item-1').length} шт`
      countItem.innerText = `${document.querySelectorAll('.main-container-cart-total__item-1').length} товара`
      countItems.innerText = `${document.querySelectorAll('.main-container-cart-total__item-1').length} товара`
  })
}

btnSendServer.addEventListener('click', () => {
  fetch('http://localhost:3000/', {
    method: 'POST',
    body: JSON.stringify({
      items: 'cart'
    }),
    headers: { 'Content-Type': 'application/json'}
  })
})
