// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price,0); //menghitung total harga
  const newOrder = {
    id: generateUniqueId(), //menggunakan fungsi genereteUniqueId
    customerName,
    items,
    totalPrice,
    status: 'Menunggu' //status awal pesanan
  };

  orders.push(newOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((sum, order) => {
    return order.status === 'Selesai' ? sum + order.totalPrice : sum;
  }, 0)
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter(orderd => order.id !== id);
}

//Ekspor semua fungsi yang sudah dibuat
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
