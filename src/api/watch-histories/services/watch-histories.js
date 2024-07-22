'use strict';

/**
 * watch-histories service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::watch-histories.watch-histories');
