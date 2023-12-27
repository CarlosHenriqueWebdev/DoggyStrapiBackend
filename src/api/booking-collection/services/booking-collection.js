'use strict';

/**
 * booking-collection service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booking-collection.booking-collection');
