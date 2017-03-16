import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';
import './tablesort.js';

Template.Home_Page.helpers({
  contactsList() {
    return Contacts.find();
  },
  groupBackground(field, contact) {
    const contactData = Contacts.findOne(contact);
    return contactData[field];
  },
  starFavorite(field, contact) {
    const contactData = Contacts.findOne(contact);
    const icon = 'star icon';
    if (contactData[field] === true) {
      return icon;
    }
    return ' ';
  },
});

Template.Home_Page.events({
  'click .sortable-table'() {
    $('table').tablesort();
  },
});

Template.Home_Page.onCreated(function onCreated() {
  this.subscribe('Contacts');
});
