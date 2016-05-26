import {capitalize} from 'helpers.js'

let did = 1000;

// Get next named element id
export function eid(name) {
  return 'Svgjs' + capitalize(name) + (did++)
}

//returns did
export function getDid(){
	return did;
}
