"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const response = await strapi.db.query("api::product.product").findOne({
      where: {
        slug: id,
      },
      populate: {
        thumbnail: true,
      },
    });
    const sanitizedEntity = await this.sanitizeOutput(response, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
