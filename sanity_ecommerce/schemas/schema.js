import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import beverage from './beverage';
import appetizers from './appetizers';
import maincourse from './course';
import sweet from './sweet';

import breakfast from './breakfast';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([product, banner, beverage,appetizers,sweet,maincourse,breakfast]),
})
