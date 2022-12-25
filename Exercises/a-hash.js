'use strict';

const phonebook = {
  marcus: '+380445554432',
  aurelius: '+380445557733',
  marrelius: '+380446664433',
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
