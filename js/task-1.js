// const customer = {
// username: "Mango",
// balance: 24000,
// discount: 0.1,
// orders: ["Burger", "Pizza", "Salad"],
// getBalance() {
//     return this.balance;
// },
// getDiscount() {
//     return this.discount;
// },
// setDiscount(value) {
//     this.discount = value;
// },
// getOrders() {
//     return this.orders;
// },
// addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
// },
// };
// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// const categories = document.querySelectorAll('.item');
// console.log(`Number of categories: ${categories.length}`);
// categories.forEach(item => {
// console.log(`Category: ${item.firstElementChild.textContent}`);
// console.log(`Elements: ${item.lastElementChild.children.length}`);
// });


// function toggleModalVisibility(isVisible) {
//     const result = !isVisible || true && false
//     return result
//     }

//     isVisible()a


// function calculateTotal(number) {
//     let result = 0;
//     for(i = 1; i <= number; i +=1){
    
//     result += i
//     }
    
//     return result
//     }

//     calculateTotal(number)

// function makeTransaction(quantity, pricePerDroid){
//     const result = quantity * pricePerDroid
//     return `You ordered ${quantity} droids worth ${result} credits!`
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// function getShippingMessage(country, price, deliveryFee){
// const result = price + deliveryFee
//     return `Shipping to ${country} will cost ${result} credits`
// }

// console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

// function getElementWidth(content, padding, border){
//     const calc = parseFloat(content)
//     const pars = parseFloat(padding)
//     const bord = parseFloat(border)
// const result = calc + pars * 2 + bord * 2
// return result
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

// function makeTransaction(quantity, pricePerDroid, customerCredits){
// let result = 0;
// const calk = quantity * pricePerDroid
// if(calk <= customerCredits){
// return `You ordered ${quantity} droids worth ${calk} credits!`
// } 
// return "Insufficient funds!"
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function formatMessage(message, maxLength){
// if(message.length <= maxLength){
// return message
// }
// return message.slice(0, maxLength) + "..."
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// function checkForSpam(message){
// const result = message.toLowerCase()
//     if(result.includes("spam") || result.includes("sale")){
//         return true
//     }
//     return false
// }


// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// function getShippingCost(country){
//     let result = 0;
// switch(country){
// case "China": result = 100;
// break;
// case "Chile":  result = 250;
// break;
// case "Australia": result = 170;
// break;
// case "Jamaica" : result = 120;
// break;
// default: 
// `Sorry, there is no delivery to your country`
// }
// return `Shipping to ${country} will cost ${result} credits`
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


// function calcNr(){
//     const name = "davyd"
//     console.log(`"Hello" ${name}`)
    
// }
// const name = calcNr()
// calcNr()
//     console.log("name", name)

// function makeTransaction(quantity, pricePerDroid, customerCredits){
//     const  result = quantity * pricePerDroid;
//     if(result > customerCredits){
// return "Insufficient funds!";
//     }
//     return `You ordered ${quantity} droids worth ${result} credits!`
// }

// function formatMessage(message, maxLength){
// if(message.length <= maxLength){
//     return message
// } else if(message.length > maxLength){
//     return message.slice(0, maxLength) + "..."
// }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


// function checkForSpam(message){
// const result = message.toLowerCase();
// if(result.includes("spam") || result.includes("sale")){
//     return true
// }
// return false
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


// function getShippingCost(country){
//     let result = 0;
//     switch(country){
//         case "China": result =100;
//         break;
//         case "Chile": result =250;
//         break;
//         case "Australia": result =170;
//         break;
//         case "Jamaica": result =120;
//         break;
//         default:  return "Sorry, there is no delivery to your country";
//     }
//     return `Shipping to ${country} will cost ${result} credits`;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"



// const resalt = "Hello world"
// let calk = [];
// for(let i = 0; i < resalt.length; i += 1){
// calk.push(resalt[i])
// }
// console.log(calk)

// function sumEvenNumbers(array){
// const result = []
// for(let i = 0; i <= array.length; i +=1){
//     if(array[i] % 2 === 0){
// result += array[i]
//     }
// }
// return result
// }

// const result = 10;
// if(result % 2 === 0){
//     console.log("Hello Worl")
// }
// to ="number"
// function calCk(to){
//     const name = "Davyd";
//     console.log()
    
// // return `HEllo ${to}`
// }
// const resalt = calCk(to)
// console.log(resalt)
// // console.log(calCk())


// function slugify(title){
// const result = title.toLowerCase().split(" ").join("-")
// return result
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"


// function makeArray(irstArray, secondArray, maxLength){
// let result =[];
// if(result > maxLength){
//      return result.slice(0, maxLength)
// }
// return result
// }

// function nameS(username) {
//     const loverTo = username.toLowerCase();
//     const resalt = loverTo.split(" ").join("-")
//     return resalt
// }
// console.log(nameS("Arrays for beginners")); // "arrays-for-beginners"
// console.log(nameS("English for developer")); // "english-for-developer"
// console.log(nameS("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(nameS("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//     const cancaTe = firstArray.concat(secondArray);
//     if(cancaTe.length > maxLength){
//     return cancaTe.slice(0, maxLength)
//     }
// return cancaTe
// }


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// function filterArray(numbers, value){
// const result = []
// for(let i = 0; i < numbers.length; i += 1){
// if(numbers[i] > value)
// result.push(numbers[i])
// }
// return result
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// public function initContent()
//     {
//         if (Configuration::isCatalogMode()) {
//             Tools::redirect('index.php');
//         }

//         $this->restorePersistedData($this->checkoutProcess);
//         $this->checkoutProcess->handleRequest(
//             Tools::getAllValues()
//         );

//         $presentedCart = $this->cart_presenter->present($this->context->cart, true);

//         if (count($presentedCart['products']) <= 0 || $presentedCart['minimalPurchaseRequired']) {
//             // if there is no product in current cart, redirect to cart page
//             $cartLink = $this->context->link->getPageLink('cart');
//             Tools::redirect($cartLink);
//         }

//         $product = $this->context->cart->checkQuantities(true);
//         if (is_array($product)) {
//             // if there is an issue with product quantities, redirect to cart page
//             $cartLink = $this->context->link->getPageLink('cart', null, null, ['action' => 'show']);
//             Tools::redirect($cartLink);
//         }

//         $this->checkoutProcess
//             ->setNextStepReachable()
//             ->markCurrentStep()
//             ->invalidateAllStepsAfterCurrent();

//         $this->saveDataToPersist($this->checkoutProcess);

//         if (!$this->checkoutProcess->hasErrors()) {
//             if ($_SERVER['REQUEST_METHOD'] !== 'GET' && !$this->ajax) {
//                 return $this->redirectWithNotifications(
//                     $this->checkoutProcess->getCheckoutSession()->getCheckoutURL()
//                 );
//             }
//         }

//         $this->context->smarty->assign([
//             'checkout_process' => new RenderableProxy($this->checkoutProcess),
//             'cart' => $presentedCart,
//         ]);

//         $this->context->smarty->assign([
//             'display_transaction_updated_info' => Tools::getIsset('updatedTransaction'),
//             'tos_cms' => $this->getDefaultTermsAndConditions(),
//         ]);

//         parent::initContent();
//         $this->setTemplate('checkout/checkout');
//     }

// {/* <div class="card-block cart-summary-totals js-cart-summary-totals">

// {block name='cart_summary_total'}
//   {if !$configuration.display_prices_tax_incl && $configuration.taxes_enabled}
//     <div class="cart-summary-line">
//       <span class="label">{$cart.totals.total.label}&nbsp;{$cart.labels.tax_short}</span>
//       <span class="value">{$cart.totals.total.value}</span>
//     </div>
//     <div class="cart-summary-line cart-total">
//       <span class="label">{$cart.totals.total_including_tax.label}</span>
//       <span class="value">{$cart.totals.total_including_tax.value}</span>
//     </div>
//   {else}
//     <div class="cart-summary-line cart-total">
//       <span class="label">{$cart.totals.total.label}&nbsp;{if $configuration.taxes_enabled}{$cart.labels.tax_short}{/if}</span>
//       <span class="value">{$cart.totals.total.value}</span>
//     </div>
//   {/if}
// {/block}

// {block name='cart_summary_tax'}
//   {if $cart.subtotals.tax}
//     <div class="cart-summary-line">
//       <span class="label sub">{l s='%label%:' sprintf=['%label%' => $cart.subtotals.tax.label] d='Shop.Theme.Global'}</span>
//       <span class="value sub">{$cart.subtotals.tax.value}</span>
//     </div>
//   {/if}
// {/block}

// </div> */}
