import { Component } from '@angular/core';

interface Order {
  date: string;
  productName: string;
}

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  orders: Order[] = [];
  newOrder: Order = { date: '', productName: '' };

  addOrder() {
    if (this.newOrder.date && this.newOrder.productName) {
      this.orders.push({ ...this.newOrder });
      this.newOrder.date = '';
      this.newOrder.productName = '';
    }
  }

  isWeekend(date: string): boolean {
    const dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }
}
