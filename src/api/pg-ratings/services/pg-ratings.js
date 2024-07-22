'use strict';

/**
 * pg-ratings service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pg-ratings.pg-ratings');
