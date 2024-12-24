// class Storage {
// #items;
// constructor(initialItems) {
//     this.#items = initialItems;
// }
// getItems() {
//     return this.#items;
// }
// addItem(newItem) {
//      this.#items.push(newItem);
// }
// removeItem(itemToRemove) {
//     const itemIndex = this.#items.indexOf(itemToRemove);
//     if (itemIndex !== -1) {
//     this.#items.splice(itemIndex, 1);
//     }
// }
// }  
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"] 
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]  
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// public function initContent()
// {
//     if (Configuration::isCatalogMode()) {
//         Tools::redirect('index.php');
//     }

//     $this->restorePersistedData($this->checkoutProcess);
//     $this->checkoutProcess->handleRequest(Tools::getAllValues());

//     $presentedCart = $this->cart_presenter->present($this->context->cart, true);

//     if (count($presentedCart['products']) <= 0 || $presentedCart['minimalPurchaseRequired']) {
//         $cartLink = $this->context->link->getPageLink('cart');
//         Tools::redirect($cartLink);
//     }

//     $currentStep = $this->checkoutProcess->getCurrentStep(); // Определяем текущий шаг

//     // Логика отображения доставки
//     if ($currentStep < 3) { // До этапа "Способ доставки"
//         $presentedCart['delivery_message'] = 'Выберите способ доставки';
//     } else { // После шага 3, показываем стандартную информацию
//         $presentedCart['delivery_message'] = $this->context->cart->getDeliveryOptionList();
//     }

//     $this->context->smarty->assign([
//         'checkout_process' => new RenderableProxy($this->checkoutProcess),
//         'cart' => $presentedCart,
//     ]);

//     $this->context->smarty->assign([
//         'display_transaction_updated_info' => Tools::getIsset('updatedTransaction'),
//         'tos_cms' => $this->getDefaultTermsAndConditions(),
//     ]);

//     parent::initContent();
//     $this->setTemplate('checkout/checkout');
// }


{/* <div class="card-block cart-summary-totals js-cart-summary-totals">

{block name='cart_summary_total'}
  {if !$configuration.display_prices_tax_incl && $configuration.taxes_enabled}
    <div class="cart-summary-line">
      <span class="label">{$cart.totals.total.label}&nbsp;{$cart.labels.tax_short}</span>
      <span class="value">{$cart.totals.total.value}</span>
    </div>
    <div class="cart-summary-line cart-total">
      <span class="label">{$cart.totals.total_including_tax.label}</span>
      <span class="value">{$cart.totals.total_including_tax.value}</span>
    </div>
  {else}
    <div class="cart-summary-line cart-total">
      <span class="label">{$cart.totals.total.label}&nbsp;{if $configuration.taxes_enabled}{$cart.labels.tax_short}{/if}</span>
      <span class="value">{$cart.totals.total.value}</span>
    </div>
  {/if}
{/block}

{block name='cart_summary_tax'}
  {if $cart.subtotals.tax}
    <div class="cart-summary-line">
      <span class="label sub">{l s='%label%:' sprintf=['%label%' => $cart.subtotals.tax.label] d='Shop.Theme.Global'}</span>
      <span class="value sub">{$cart.subtotals.tax.value}</span>
    </div>
  {/if}
{/block}

{if $cart.current_step < 3}
  <!-- Отображаем текст, если шаг оформления заказа меньше 3 (выбор способа доставки) -->
  <div class="cart-summary-line">
    <span class="label">Выберите способ доставки</span>
    <span class="value">-</span> <!-- Можно добавить другой текст или информацию -->
  </div>
{else}
  {if $cart.delivery_option == 'free'}
    <!-- Отображаем информацию о бесплатной доставке, если она выбрана -->
    <div class="cart-summary-line">
      <span class="label">Доставка</span>
      <span class="value">Бесплатно</span>
    </div>
  {else}
    <!-- Здесь можно отобразить информацию о стоимости доставки, если способ не выбран или отличается -->
    <div class="cart-summary-line">
      <span class="label">Доставка</span>
      <span class="value">{$cart.delivery_option} - {$cart.delivery_price}</span> <!-- Пример вывода стоимости -->
    </div>
  {/if}
{/if}

</div> */}
