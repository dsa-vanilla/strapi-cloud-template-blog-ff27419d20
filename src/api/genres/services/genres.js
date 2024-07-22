'use strict';

/**
 * genres service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::genres.genres');
