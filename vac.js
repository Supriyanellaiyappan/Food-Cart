document
  .querySelectorAll("input[type='checkbox']")
  .forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      const quantityInput = checkbox
        .closest(".menu-item")
        .querySelector("input[type='number']");
      quantityInput.disabled = !checkbox.checked;
      if (!checkbox.checked) quantityInput.value = "";
    });
  });
var summary = document.getElementById("summary");
var screen = document.getElementById("screen");
var h33 = document.getElementById("h33");
h33.addEventListener("click", function () {
  summary.style.display = "block";
  screen.style.display = "block";
  summary.style.top = scrollY + 100 + "px";
  screen.style.top = scrollY + "px";
  const items = document.querySelectorAll("input[type='checkbox']");
  const orderList = document.getElementById("orderList");
  const totalSpan = document.getElementById("totalAmount");
  orderList.innerHTML = "";
  let total = 0;
  items.forEach((item) => {
    if (item.checked) {
      const itemName = item.value;
      const price = parseFloat(item.dataset.price);
      const quantityInput = item
        .closest(".menu-item")
        .querySelector("input[type='number']");
      const quantity = parseInt(quantityInput.value);
      if (!quantity || quantity < 1) {
        alert(`Please enter a valid quantity for ${itemName}`);
        return;
      }
      const itemTotal = price * quantity;
      total += itemTotal;
      const listItem = document.createElement("li");
      listItem.textContent = `${itemName} x ${quantity} = ₹${itemTotal}`;
      orderList.appendChild(listItem);
    }
  });
  totalSpan.textContent = total;
});
screen.addEventListener("click", function () {
  screen.style.display = "none";
  summary.style.display = "none";
});
function placeOrder() {
  summary.style.display = "block";
  screen.style.display = "block";
  summary.style.top = scrollY + 100 + "px";
  screen.style.top = scrollY + "px";
  const items = document.querySelectorAll("input[type='checkbox']");
  const orderList = document.getElementById("orderList");
  const totalSpan = document.getElementById("totalAmount");
  orderList.innerHTML = "";
  let total = 0;
  let dish = false;
  items.forEach((item) => {
    if (item.checked) {
      dish = true;
      const itemName = item.value;
      const price = parseFloat(item.dataset.price);
      const quantityInput = item
        .closest(".menu-item")
        .querySelector("input[type='number']");
      const quantity = parseInt(quantityInput.value);
      if (!quantity || quantity < 1) {
        alert(`Please enter a valid quantity for ${itemName}`);
        return;
      }
      const itemTotal = price * quantity;
      total += itemTotal;
      const listItem = document.createElement("li");
      listItem.textContent = `${itemName} x ${quantity} = ₹${itemTotal.toFixed(
        2
      )}`;
      orderList.appendChild(listItem);
    }
  });
  if (!dish) {
    alert("Please select at least one item.");
    summary.style.display = "none";
    screen.style.display = "none";
    return;
  }
  totalSpan.textContent = total.toFixed(2);
}
