import React, { Component } from 'react';
import { ListItem } from './ListItem';
// Parent Component
export class GroceryList extends Component {
 render() {
 return (
/* <ul>
 <ListItem quantity="1" name="Bread" />
 <ListItem quantity="6" name="Eggs" />
 <ListItem quantity="2" name="Milk" />
 </ul>*/

 <ul>
 <ListItem quantity="1">pan</ListItem>
 <ListItem quantity="6">queso </ListItem>
 <ListItem quantity="2">chocolate</ListItem>
 </ul>

 );
 }
}