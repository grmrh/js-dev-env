import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00')
// debugger;
console.log(`I would play ${courseValue} for tis awesome course!`)
