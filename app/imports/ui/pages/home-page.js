import { Template } from 'meteor/templating';
import { Contacts } from '../../api/contacts/contacts.js';
import './tablesort.js';

Template.Home_Page.helpers({
  contactsList() {
    return Contacts.find();
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
