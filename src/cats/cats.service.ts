import { Injectable } from '@nestjs/common';
import { Cat } from './cat';

@Injectable()
export class CatsService {
  cats: Array<Cat> = [{ id: 1, name: 'Cat'}];

  getCats() {
    return this.cats;
  }

  geCat(catID: number) {
    return this.cats.filter(cat => cat.id == catID);
  }

  createCat(cat: Cat) {
    this.cats = [ ...this.cats, {...cat}];
  }
}