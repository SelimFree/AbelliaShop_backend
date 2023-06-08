"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { name, surname, tel_number, email, address, shipping_method, products, lang } = ctx.request.body;

    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi.service("api::product.product").findOne(product.id);

        return {
          title: lang == "ENG" ? item.title_eng : (lang == "ENG" ? item.title.rus : item.title_tkm),
          price: item.discount_price ? item.discount_price : item.price,
          qiantity: product.quantity,
        }
      })
    );

    try {

      await strapi.service("api::order.order").create({
        data: {
          name,
          surname,
          tel_number,
          email,
          address,
          shipping_method,
          products: lineItems,
        }
      })

      return {
        orderCreated: true,
      }
    } catch (err) {
      ctx.response.status = 500;
      return err;
    }
  },
}));
