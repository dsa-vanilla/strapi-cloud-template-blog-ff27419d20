'use strict';

/**
 * persons controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::persons.persons');
