class GroceryList {
  constructor(info, checked = false) {
    this.info = info;
    this.checked = checked;
  }
}

class UI {
  addItemList(item) {
    const list = document.getElementById('list');
    const li = document.createElement('li');
    if (!item.checked) {
      li.innerHTML = `
        ${item.info}
        <div class='opt'>
        <i class="fas fa-eraser"></i>
        <i class="fas fa-check"></i>
        </div>
      `
      list.appendChild(li);
    } else {
      li.className = 'checked';
      li.innerHTML = `
        ${item.info}
        <div class='opt'>
        <i class="fas fa-eraser"></i>
        <i class="fas fa-check"></i>
        </div>
      `
      list.appendChild(li);
    }
  }

  // mexer
  showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.list');
    const form = document.querySelector('.grocery-list');

    form.insertBefore(div, container);

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteItemList(target) {
    if (target.className === 'fas fa-eraser') {
      target.parentElement.parentElement.remove();
    }
  }

  checkedItemList(target) {
    if (target.className === 'fas fa-check') {
      target.parentElement.parentElement.className = 'checked';
    }
  }

  clearFields() {
    document.getElementById('info').value = '';
  }
}

// Local Storage
class Store {
  static getItemsList() {
    let items;
    if (localStorage.getItem('items') === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
  }

  static displayItems() {
    const items = Store.getItemsList();
    items.forEach(function (item) {
      const ui = new UI();
      ui.addItemList(item);
    });
  }

  static addItem(item) {
    const items = Store.getItemsList();
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  static removeItem(info) {
    const items = Store.getItemsList();
    items.forEach(function (item, index) {
      if (item.info === info) {
        items.splice(index, 1);
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }

  static updateItem(info) {
    const items = Store.getItemsList();
    items.forEach(function (item, index) {
      if (item.info === info) {
        item.checked = true;
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displayItems);

document.getElementById('list-form').addEventListener('submit', function (e) {
  const item = document.getElementById('info').value;
  const info = new GroceryList(item);
  const ui = new UI();
  if (item === '') {
    ui.showAlert('Please fill field', 'error');
  }
  else {
    ui.addItemList(info);
    Store.addItem(info);
    ui.clearFields();
    ui.showAlert('Item Added!', 'success')
  }

  e.preventDefault();
});

document.getElementById('list').addEventListener('click', function (e) {
  let info = e.target.parentElement.parentElement.textContent.replaceAll(/\s/g, '')
  const ui = new UI();
  if (e.target.className === 'fas fa-eraser') {
    ui.deleteItemList(e.target);
    Store.removeItem(info);
    ui.showAlert('Item Removed!', 'success');
    e.preventDefault();
  } else if (e.target.className === 'fas fa-check') {
    ui.checkedItemList(e.target);
    Store.updateItem(info);
    e.preventDefault();
  }
})
