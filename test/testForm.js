const assert = require('assert');
const { Form } = require("../src/Form.js");
const { Field } = require("../src/field.js");

describe('Form', () => {
  it('Should give the entries', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob');

    const form = new Form(nameField, dobField);
    form.fillField('ram');
    form.fillField('1111-1-1');

    const expected = { name: 'ram', dob: '1111-1-1' };
    assert.deepStrictEqual(form.getEntries(), expected);
  });

});