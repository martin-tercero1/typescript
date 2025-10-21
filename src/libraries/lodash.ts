import _ from 'lodash';

const data = [{
  username: 'martintercero',
  role: 'admin'
}, {
  username: 'pepe',
  role: 'user'
}, {
  username: 'luis',
  role: 'seller'
}, {
  username: 'santiago',
  role: 'seller'
}];

const rta = _.groupBy(data, 'role');
console.log(rta);
