import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Contacts = new Mongo.Collection('Contacts');

/**
 * Create the schema for Contacts
 */
export const ContactsSchema = new SimpleSchema({
  first: {
    label: 'first',
    type: String,
    optional: false,
    unique: true,
    max: 200,
  },
  last: {
    label: 'last',
    type: String,
    optional: false,
    unique: true,
    max: 200,
  },
  address: {
    label: 'address',
    type: String,
    optional: false,
    max: 200,
  },
  telephone: {
    label: 'telephone',
    type: String,
    regEx: /(\d{3}\-){2}\d{4}/,
    optional: false,
  },
  email: {
    label: 'email',
    type: String,
    optional: false,
    max: 200,
  },
  group: {
    label: 'group',
    type: String,
    optional: false,
    defaultValue: 'Other',
  },
  favorite: {
    label: 'favorite',
    type: Boolean,
  },

});

Contacts.attachSchema(ContactsSchema);
