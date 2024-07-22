'use strict';

/**
 * persons router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::persons.persons');
