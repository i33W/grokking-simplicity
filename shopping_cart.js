// 장바구니 제품과 합계를 담고 있는 전역 변수
var shopping_cart = [];
var shopping_cart_total = 0;

// 장바구네에 제품을 담기 위해 cart 배열에 레코드를 추가하는 함수
function add_item_to_cart(name, price) {
  shopping_cart.push({ name: name, price: price });
  calc_cart_total();
}

// 장바구니 제품 금액 합계를 구하는 함수
function calc_cart_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons();
  set_tax_dom();
}

// 무료 배송비 계산하기
function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

// 장바구니 금액 합계에 따른 세금 계산하기
function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}
