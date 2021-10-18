import React, { Component} from 'react';
import { DragSource } from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
// snack Drag'nDrop spec
//
// - Required: beginDrag
// - Optional: endDrag
// - Optional: canDrag
// - Optional: isDragging
const snackSpec = {
 beginDrag(props) {
 return {
 name: props.name
 };
 },
 endDrag(props, monitor) {
 const dragItem = monitor.getItem();
 const dropResult = monitor.getDropResult();
 if (dropResult) {
 console.log(`You dropped ${dragItem.name} into ${dropResult.name}`);
 }
 }
};
export default class Snack extends Component {
    render() {
    const { name } = this.props;
    const style = {
    opacity: 1
    };
    return (
    <div className='snack' style={style}>
    {name}
    </div>
    )
    }
   }
   Snack.propTypes = {
    name: PropTypes.string.isRequired
   };