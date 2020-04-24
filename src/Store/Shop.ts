export enum Types {
  ADD_CAR = 'ADD_CAR',
  REMOVE_CAR = 'REMOVE_CAR',
  ADD_COUNT = 'ADD_COUNT',
  SUBTRACT_COUNT = 'SUBTRACT_COUNT',
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  count?: number;
}

export interface IState {
  products: Array<IProduct>;
  cart: Array<IProduct>;
}

interface action {
  type: string;
  product: IProduct;
}

const initialState: IState = {
  products: [
    {
      id: 1,
      name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
      price: 27.99,
    },
    {
      id: 2,
      name: 'Máscara Banho de Verniz 1kg Forever Liss',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/159038-240-240/mascara-banho-de-verniz-brilho-e-hidratacao-extrema-forever-liss-1kg.jpg?v=637103128347670000',
      price: 32.99,
    },
    {
      id: 3,
      name: 'Kit Matizador de Cabelos Pretos Intensive Black Forever Liss',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/158849-240-240/Kit-Matizador-de-Cabelos-Pretos-Intensive-Black-Forever-Liss.jpg?v=637064118896000000',
      price: 36.99,
    },
    {
      id: 4,
      name:
        'Kit Babosa no Cabelo Forever Liss com Shampoo 300ml e Máscara 250g',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/158630-240-240/Kit-Babosa-no-Cabelo-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014049994200000',
      price: 29.99,
    },
    {
      id: 5,
      name: 'Máscara de Babosa Hidratação Profunda Forever Liss 950g',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/157312-240-240/Mascara-de-Babosa-Hidratacao-Profunda-Forever-Liss-950g.jpg?v=636925124889830000',
      price: 59.99,
    },
    {
      id: 6,
      name: 'Máscara de Babosa Hidratação Profunda Forever Liss 950g',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/157312-240-240/Mascara-de-Babosa-Hidratacao-Profunda-Forever-Liss-950g.jpg?v=636925124889830000',
      price: 29.99,
    },
    {
      id: 7,
      name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
      price: 27.99,
    },
    {
      id: 8,
      name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
      price: 27.99,
    },
    {
      id: 9,
      name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
      price: 27.99,
    },
    {
      id: 10,
      name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
      img:
        'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
      price: 27.99,
    },
  ],
  cart: [],
};

const Shop = (
  state: IState = initialState,
  {type, product}: action,
): IState => {
  if (type === Types.ADD_CAR) {
    const newCart: Array<IProduct> = state.cart;
    product.count = 1;
    newCart.push(product);
    return {...state, cart: newCart};
  }
  if (type === Types.REMOVE_CAR) {
    const newCart: Array<IProduct> = state.cart?.filter(
      (item) => product.id !== item.id,
    );

    return {...state, cart: newCart};
  }
  if (type === Types.ADD_COUNT) {
    product.count = (product.count || 0) + 1;
    const newCart: Array<IProduct> = state.cart?.filter(
      (item) => product.id !== item.id,
    );
    newCart.push(product);
    return {...state, cart: newCart};
  }
  if (type === Types.SUBTRACT_COUNT) {
    product.count = (product.count || 0) - 1;
    if (product.count <= 0) {
      const newCart: Array<IProduct> = state.cart?.filter(
        (item) => product.id !== item.id,
      );

      return {...state, cart: newCart};
    }
    const newCart: Array<IProduct> = state.cart?.filter(
      (item) => product.id !== item.id,
    );
    newCart.push(product);

    return {...state, cart: newCart};
  }
  return state;
};

export const Creators = {
  addCar: (product: IProduct) => ({type: Types.ADD_CAR, product}),
  removeCar: (product: IProduct) => ({type: Types.REMOVE_CAR, product}),
  AddCount: (product: IProduct) => ({type: Types.ADD_COUNT, product}),
  SubtractCount: (product: IProduct) => ({type: Types.SUBTRACT_COUNT, product}),
};

export default Shop;
