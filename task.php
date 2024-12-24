<!-- <div class="card-block cart-summary-totals js-cart-summary-totals">

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

</div> -->

<div class="card-block cart-summary-totals js-cart-summary-totals">

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

</div>