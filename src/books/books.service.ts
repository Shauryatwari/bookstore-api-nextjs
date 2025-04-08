import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(@InjectRepository(Book) private repo: Repository<Book>) {}

  create(data: Partial<Book>) {
    return this.repo.save(data);
  }

  

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, data: Partial<Book>) {
    return this.repo.update(id, data);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
  async findAll(query: any): Promise<Book[]> {
    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const sortBy = query.sortBy || 'price';
    const order = query.order?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
  
    const where: any = {};
    if (query.author) where.author = query.author;
    if (query.category) where.category = query.category;
    if (query.rating) where.rating = Number(query.rating); // parse rating
  
    return this.repo.find({
      where,
      skip: (page - 1) * limit,
      take: limit,
      order: {
        [sortBy]: order,
      },
    });
  }
  
  
}
