import Ember from 'ember';
import formBufferProperty from 'ember-validated-form-buffer';
import { validator, buildValidations } from 'ember-cp-validations';
// import BufferedProxy from 'ember-buffered-proxy/proxy';

const Validations = buildValidations({
    // username: validator('presence', true)

    username: validator('presence', {
        presence: Ember.computed.equal('model.isRequired', true)
    })

});

export default Ember.Component.extend({
    // model: null,
    // formValues: formBufferProperty('model', Validations),

    init() {
        this._super(...arguments);

        this.set('formValues', formBufferProperty('model', Validations));

        //let UserBuffer = Ember.ObjectProxy.extend(Validations);

        // this.set('formValues', UserBuffer.create(Ember.getOwner(this).ownerInjection(),
        //                                          { content: this.get('model') })
        // );

        // this.set('formValues', Ember.ObjectProxy.create(Ember.getOwner(this).ownerInjection(),
        //                                          { content: this.get('model') })
        // );

        // this.set('formValues', BufferedProxy.create({ content: this.get('model')})
        // );

    }

});