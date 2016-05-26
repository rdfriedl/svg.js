import Container from 'container.js';
import {create} from 'svg.js';
export default class Defs extends Container{
	constructor(){
		super(create('defs'));
	}
}
