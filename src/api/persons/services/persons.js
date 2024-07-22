'use strict';

/**
 * persons service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::persons.persons');
