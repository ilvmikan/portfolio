/* carrega components HTML no DOM */
async function loadComponents() {
  var slots = document.querySelectorAll('[data-component]');
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var file = slot.getAttribute('data-component');
    var res  = await fetch(file);
    var html = await res.text();
    slot.outerHTML = html;
  }
}

loadComponents();

