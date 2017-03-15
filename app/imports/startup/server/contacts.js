import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactsSeeds = [
  {
    first: 'Chaselyn',
    last: 'Pugh',
    address: '123 Rainbow Drive',
    telephone: '123-456-7890',
    email: 'abc@123.com',
    group: 'Other',
  },
  {
    first: 'Bob',
    last: 'Loo',
    address: '123 Rainbow Drive',
    telephone: '123-456-7890',
    email: 'abc@123.com',
    group: 'Other',
  },
  {
    first: 'Boo',
    last: 'Boo',
    address: '123 Rainbow Drive',
    telephone: '123-456-7890',
    email: 'abc@123.com',
    group: 'Other',
  },
  {
    first: 'Berry',
    last: 'Foo',
    address: '123 Rainbow Drive',
    telephone: '123-456-7890',
    email: 'abc@123.com',
    group: 'Other',
  },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactsSeeds, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
