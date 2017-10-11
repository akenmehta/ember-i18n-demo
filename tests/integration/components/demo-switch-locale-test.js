import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('demo-switch-locale', 'Integration | Component | demo switch locale', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{demo-switch-locale}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#demo-switch-locale}}
      template block text
    {{/demo-switch-locale}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
