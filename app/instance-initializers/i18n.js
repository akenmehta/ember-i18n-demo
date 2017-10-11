import Ember from 'ember';

export default {
  name: 'i18n',

  initialize(app) {
    const i18n = app.lookup('service:i18n');
    const supported = i18n.get('locales');
    const preferred = Ember.getWithDefault(window, 'navigator.languages', []);
    const found = preferred.find((p) => supported.contains(p.toLowerCase()));
    i18n.set('locale', found || 'en');
  }
};
