"use strict";

/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const response = await strapi.db.query("api::blog.blog").findOne({
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
