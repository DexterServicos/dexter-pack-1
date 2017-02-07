import { Injectable } from '@angular/core';

@Injectable()
export class TimesService {

  getTimes() {
    return ['Flamengo','Curitiba', 'São paulo'];
  }

  constructor() { }

}
