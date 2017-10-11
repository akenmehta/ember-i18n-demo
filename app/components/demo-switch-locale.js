import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: [ 'i18n-demo' ],

  i18n: Ember.inject.service(),

  supportedLocales: Ember.computed('i18n.locales', 'i18n.locale', function() {
    const i18n = this.get('i18n');
    const current = i18n.get('locale');
    const all = i18n.get('locales');

    return all.map((code) => {
      return {
        code,
        isCurrent: code === current,
        text: i18n.t(`languages.${code}`)
      };
    })
  }),

  actions: {
    switchLocale(event) {
      this.set('i18n.locale', event.target.value);
    }
  }
});
