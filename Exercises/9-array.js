'use strict';

const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554432' },
  { name: 'Aurelius Marcus ', phone: '+380445557733' },
  { name: 'Marrelius Aucus', phone: '+380446664433' }
];

const findPhoneByName = (name) => {
  for (const person of phonebook) {
    if (name === person.name) person.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
