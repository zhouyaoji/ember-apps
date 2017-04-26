import Ember from 'ember';

export default Ember.Controller.extend({

  msg: '',
  emailAddress: '',
  validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  validMessage: Ember.computed.gte(msg.length, 5),
  isValid: Ember.computed.and('validEmail', 'validMessage'),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    sendMessage() {
     alert(`Sending the msg to ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just sent the following msg from ${this.get('emailAddress')}: \n${this.get('msg')}`);
      this.set('emailAddress', '');
      this.set('msg', '');
    }
  }
});
