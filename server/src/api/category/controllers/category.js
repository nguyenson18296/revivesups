"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const response = await strapi.db.query("api::category.category").findOne({
          where: {
            slug: id
          },
          populate: {
            products: {
              populate: {
                thumbnail: true
              }
            }
          }
        });
        const sanitizedEntity = await this.sanitizeOutput(response, ctx);

      return this.transformResponse(sanitizedEntity);
      
    },
  })
);
