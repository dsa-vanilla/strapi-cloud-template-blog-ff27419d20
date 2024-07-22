'use strict';

/**
 * programs controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::programs.programs');
