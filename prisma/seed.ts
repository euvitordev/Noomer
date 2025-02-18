/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.restaurant.deleteMany();
    const restaurant = await tx.restaurant.create({
      data: {
        name: "Burger Express",
        slug: "burger-express",
        description: "O melhor fast food artesanal da cidade",
        avatarImageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy",
        coverImageUrl:
          "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQU3JZGQeTmvPeJLoyOjzNsMqFdxUI423nBl6b",
      },
    });

    const combosCategory = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Combo Clássico Burger Express",
          description:
            "Dois hambúrgueres artesanais 100% bovinos, queijo cheddar, alface, tomate, molho especial e pão brioche. Acompanhado de batata frita e refrigerante.",
          price: 42.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQaHB8tslkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão brioche",
            "Hambúrguer artesanal 100% bovino",
            "Queijo cheddar",
            "Alface",
            "Tomate",
            "Molho especial",
          ],
        },
        {
          name: "Combo Smash Bacon Deluxe",
          description:
            "Dois smash burgers, cheddar cremoso, bacon crocante e maionese especial da casa. Acompanhado de fritas e refrigerante.",
          price: 39.5,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQeGQofnEPyQaHEV2WL8rGUs41oMICtYfNkphl",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "Pão brioche",
            "Smash burger 100% bovino",
            "Cheddar cremoso",
            "Bacon crocante",
            "Maionese especial",
          ],
        },
      ],
    });

    const hamburgersCategory = await tx.menuCategory.create({
      data: {
        name: "Hambúrgueres",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Cheese Bacon Supreme",
          description:
            "Hambúrguer artesanal de 150g, queijo prato, bacon crocante e molho especial no pão australiano.",
          price: 34.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQKfI6fivqActTvBGLXfQe4a8CJ6d3HiR7USPK",
          menuCategoryId: hamburgersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "BBQ Burger Ranch",
          description:
            "Hambúrguer de costela defumada, queijo cheddar, cebola crispy e molho barbecue artesanal.",
          price: 38.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ99rtECuYaDgmA4VujBU0wKn2ThXJvF3LHfyc",
          menuCategoryId: hamburgersCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const friesCategory = await tx.menuCategory.create({
      data: {
        name: "Batatas Fritas",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Batata Frita Clássica",
          description: "Batatas fritas crocantes e bem temperadas.",
          price: 10.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQNd3jSNrcJroaszwjUAlM6iSO5ZTx2HV70t31",
          menuCategoryId: friesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Batata Frita com Cheddar e Bacon",
          description:
            "Batatas fritas cobertas com cheddar cremoso e bacon crocante.",
          price: 15.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7Y6lv9tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: friesCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const drinksCategory = await tx.menuCategory.create({
      data: {
        name: "Bebidas",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Refrigerante Lata",
          description: "Refrigerantes variados para acompanhar seu lanche.",
          price: 6.5,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Suco Natural",
          description: "Opções de suco natural feitos na hora.",
          price: 8.0,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQW7Kxm9gniS9XCLQu7Nb4jvBYZze16goaOqsK",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });

    const dessertsCategory = await tx.menuCategory.create({
      data: {
        name: "Sobremesas",
        restaurantId: restaurant.id,
      },
    });

    await tx.product.createMany({
      data: [
        {
          name: "Brownie com Sorvete",
          description: "Brownie de chocolate servido com sorvete de creme.",
          price: 14.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQtfuQrAKkI75oJfPT0crZxvX82ui9qV3hLFdY",
          menuCategoryId: dessertsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Milkshake de Ovomaltine",
          description: "Milkshake cremoso com pedaços crocantes de Ovomaltine.",
          price: 12.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQBH21ijzEVXRoycAtrP9vH45bZ6WDl3QF0a1M",
          menuCategoryId: dessertsCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
