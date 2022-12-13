'use strict';

/**
 * settings-homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::settings-homepage.settings-homepage',
    ({ strapi }) => ({
        async find(ctx) {
            const response = await strapi.db.query("api::settings-homepage.settings-homepage").findOne({
              populate: {
                categories: {
                  populate: {
                    thumbnail: true
                  }
                },
                new_product: {
                  populate: {
                    thumbnail: true
                  }
                },
                product: {
                  populate: true
                },
                banner: {
                  populate: true
                }
              }
            });
            const sanitizedEntity = await this.sanitizeOutput(response, ctx);
    
          return this.transformResponse(sanitizedEntity);
          
        },
    })
);
