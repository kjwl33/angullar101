export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Hamburger',
    price: 12.99,
    description: 'A burger with steak, cheese, barbaque sauce, salad, tomato, and bacon.'
  },
  {
    id: 2,
    name: 'Pizza',
    price: 9.99,
    description: 'A pizza with tomato sauce, cheese, bacon, and more cheese.'
  },
  {
    id: 3,
    name: 'Salad',
    price: 8.99,
    description: 'A salad with ranch dressing and croutons.'
  },
  {
    id: 4,
    name: 'Mac & Cheese',
    price: 7.99,
    description: 'Fresh pasta with cheddar cheese orginated from France'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/