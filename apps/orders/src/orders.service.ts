import { Injectable } from '@nestjs/common';
import { CreateOderRequest } from './dto/create-oder-request';
import { OrderRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async createOrder(request: CreateOderRequest) {
    return this.orderRepository.create(request);
  }

  async getOrders() {
    return this.orderRepository.find({});
  }
}
