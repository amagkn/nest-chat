import { Injectable } from '@nestjs/common';
import { Chat } from './chat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
  ) {}
  async createMessage(chat: Chat) {
    return this.chatRepository.save(chat);
  }

  async getMessages(): Promise<Chat[]> {
    return this.chatRepository.find();
  }
}
