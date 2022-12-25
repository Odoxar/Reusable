'use strict';

const fn = () => {
  const obj1 = { name: 'Denys' };
  let obj2 = { name: 'Denys' };
  obj1.name = 'Thomas';
  obj2.name = 'Thomas';

  obj2 = { name: 'Ivan' };
};

module.exports = { fn };
