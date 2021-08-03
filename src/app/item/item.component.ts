import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../app.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item0 = new Item(0, "Rice", false);
  item1 = new Item(1, "Apples", true);
  item2 = new Item(2, "Oranges", false);
  items = [this.item0, this.item1, this.item2];

  editing = false;
  done = false;

//   outputItemName = () => {
//     if (this.state.editing) {
//         return(
//             <div>
//                 <form onSubmit={this.handleSubmit}> 
//                     <input className="inputFieldEditStyle" type="text" name="editItemField" placeholder={this.props.itemName} value={this.state.newItemName} onChange={this.handleEditing} autoFocus/>
//                 </form>
//             </div>
//         );
//     } else if (this.props.done) {
//         return(<p className="itemSize"><s>{this.props.itemName}</s></p>);
//     } else {
//         return(<p className="itemSize">{this.props.itemName}</p>);
//     }
// }

// editOrSaveButton = () => {
//     if (this.state.editing) {
//         return (
//             <button className="buttonStyle" onClick={this.handleSubmit}>Save</button>
//         );
//     } else {
//         return (
//             <button className="buttonStyle" onClick={this.editItem}>Edit</button>
//         );
//     }
// }

}
