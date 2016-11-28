/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

// BEGIN-SNIPPET user-model
// import Ember from 'ember';
import DS from 'ember-data';
// import { validator, buildValidations } from 'ember-cp-validations';

const { attr } = DS;

// const Validations = buildValidations({

// 	// username: validator('presence', true)
  
//   username: validator('presence', {
//     presence: Ember.computed.equal('model.email', 'a@test.com')
//   })

// });

export default DS.Model.extend({
    username: attr('string'),
    password: attr('string'),
    email: attr('string'),
    isRequired: attr('boolean', { defaultValue: true })
});
// END-SNIPPET
