import store, {Creators, IProduct} from '../../src/Store/Shop';

let product: IProduct;

describe('redux test', () => {
  beforeEach(() => {
    product = {name: 'test', id: 1, price: 1, img: '', count: 10};
  });

  it('should return initState', () => {
    expect(store(undefined, {type: 'initi_test', product})).toEqual({
      cart: [],
      products: [
        {
          id: 1,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
          name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
          price: 27.99,
        },
        {
          id: 2,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/159038-240-240/mascara-banho-de-verniz-brilho-e-hidratacao-extrema-forever-liss-1kg.jpg?v=637103128347670000',
          name: 'Máscara Banho de Verniz 1kg Forever Liss',
          price: 32.99,
        },
        {
          id: 3,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/158849-240-240/Kit-Matizador-de-Cabelos-Pretos-Intensive-Black-Forever-Liss.jpg?v=637064118896000000',
          name: 'Kit Matizador de Cabelos Pretos Intensive Black Forever Liss',
          price: 36.99,
        },
        {
          id: 4,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/158630-240-240/Kit-Babosa-no-Cabelo-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014049994200000',
          name:
            'Kit Babosa no Cabelo Forever Liss com Shampoo 300ml e Máscara 250g',
          price: 29.99,
        },
        {
          id: 5,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/157312-240-240/Mascara-de-Babosa-Hidratacao-Profunda-Forever-Liss-950g.jpg?v=636925124889830000',
          name: 'Máscara de Babosa Hidratação Profunda Forever Liss 950g',
          price: 59.99,
        },
        {
          id: 6,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/157312-240-240/Mascara-de-Babosa-Hidratacao-Profunda-Forever-Liss-950g.jpg?v=636925124889830000',
          name: 'Máscara de Babosa Hidratação Profunda Forever Liss 950g',
          price: 29.99,
        },
        {
          id: 7,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
          name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
          price: 27.99,
        },
        {
          id: 8,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
          name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
          price: 27.99,
        },
        {
          id: 9,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
          name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
          price: 27.99,
        },
        {
          id: 10,
          img:
            'https://foreverliss.vteximg.com.br/arquivos/ids/158633-240-240/Kit-Mandioca-Capilar-Forever-Liss-com-Shampoo-300ml-e-Mascara-250g.jpg?v=637014078441070000',
          name: 'Kit Profissional Shampoo e Máscara de Mandioca Forever Liss',
          price: 27.99,
        },
      ],
    });
  });

  it('should handle ADD_CAR', () => {
    expect(store({products: [], cart: []}, Creators.addCar(product))).toEqual({
      cart: [{count: 1, id: 1, img: '', name: 'test', price: 1}],
      products: [],
    });
  });

  it('should handle ADD_CAR caunt undefined', () => {
    product.count = undefined;
    expect(store({products: [], cart: []}, Creators.addCar(product))).toEqual({
      cart: [{count: 1, id: 1, img: '', name: 'test', price: 1}],
      products: [],
    });
  });

  it('should handle REMOVE_CAR', () => {
    expect(
      store(
        {
          products: [],
          cart: [{count: 1, id: 1, img: '', name: 'test', price: 1}],
        },
        Creators.removeCar(product),
      ),
    ).toEqual({
      cart: [],
      products: [],
    });
  });

  it('should handle ADD_COUNT', () => {
    const {cart} = store(
      {
        products: [],
        cart: [{count: 10, id: 1, img: '', name: 'test', price: 1}],
      },
      Creators.AddCount(product),
    );
    expect(cart[0].count).toEqual(11);
  });
});

it('should handle SUBTRACT_COUNT', () => {
  product.count = 10;
  const {cart} = store(
    {
      products: [],
      cart: [{count: 8, id: 1, img: '', name: 'test', price: 1}],
    },
    Creators.SubtractCount(product),
  );
  expect(cart[0].count).toEqual(9);
});

it('should handle SUBTRACT_COUNT count undefined', () => {
  product.count = undefined;
  const {cart} = store(
    {
      products: [],
      cart: [{id: 1, img: '', name: 'test', price: 1}],
    },
    Creators.SubtractCount(product),
  );
  expect(cart.length).toEqual(0);
});

it('should handle SUBTRACT_COUNT with REMOVE_CAR', () => {
  product.count = 1;
  expect(
    store(
      {
        products: [],
        cart: [{count: 1, id: 1, img: '', name: 'test', price: 1}],
      },
      Creators.SubtractCount(product),
    ),
  ).toEqual({products: [], cart: []});
});
