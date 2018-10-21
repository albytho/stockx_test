import React, { Component } from 'react';
import Card from './Card.js'
import uuid from 'uuid';
import Popup from "reactjs-popup";
import './ImageGrid.css';

class ImageGrid extends Component {

	constructor(){
		//I'm having trouble coming up with a clever way of getting filenames
		//For now, I hardcoded it
    super();
    this.state = {
    	images: [
    		{
    			id: uuid.v4(),
        	file_path: '1.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '2.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '3.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '4.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '5.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '6.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '7.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '8.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '9.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '10.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '11.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '12.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '13.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '14.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '15.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '16.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '17.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '18.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '19.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '20.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '21.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '22.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '23.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '24.jpg',
    		},
    		{
    			id: uuid.v4(),
        	file_path: '25.jpg',
    		}
    	],
      rows_of_images:[],
      showPopUp:false,
      currentID:0
    }
  }

	componentDidMount(){
		//Creates a list of lists
		//Each element in rows_of_images is a list of images belonging to that row
		let list = this.state.images;
		let rows_of_images = [];
		let images = [];
		for(var i = 0, size = list.length; i < size ; i++){
			var item = list[i];
			if(i!==0 && i%5===0){
				rows_of_images.push(images);
				images = [];
				images.push(item);
			}
			else{
				images.push(item);
			}
		}
		rows_of_images.push(images);

		this.setState({rows_of_images}, () => {
			console.log(this.state.rows_of_images)
		});

	}

	handleModal(id){
		this.setState({showPopUp:true});
		this.setState({currentID:id});
	}

	handleClose(){
		this.setState({showPopUp: false});
		this.setState({currentID:0});
	}

	handleAdd(id){
		console.log(id)
	}

	handleEdit(id){

	}

	handleRemove(id){

	}


  render() {
  	//Uses the rows_of_images to dynamically create the row and column elemnts of the grid
		let image_grid = this.state.rows_of_images.map(row_of_image =>{
			let row = row_of_image.map(image =>{
				let file_name = '/Images/'+image.file_path;
				let id = image.id;
				return <div className="col"> <Card id={id} image_name={file_name} showModal={this.handleModal.bind(this)}/> </div>
			});

			return <div className="row"> {row} </div>
		});	

    return (
      <div>

        <div className="container">
        	<div className="row">
        		<div className="col-sm">
        			<input type="text" className="form-control" id="brandInput" placeholder="Brand"/>
        		</div>
        		<div className="col-sm">
        			<input type="text" className="form-control" id="styleInput" placeholder="Style"/>
        		</div>
        		<div className="col-sm">
        			<input type="text" className="form-control" id="sizeInput" placeholder="Size"/>
        		</div>
        		<div className="col-sm">
        			<input type="text" className="form-control" id="upcidInput" placeholder="UPC ID"/>
        		</div>
        	</div>

        	{image_grid}
        </div>

        <Popup open={this.state.showPopUp} onClose={this.handleClose.bind(this)} modal>
        Item: {this.state.currentID}
        	<div className="content">
        		<button type="button" className="btn btn-primary" onClick={this.handleAdd.bind(this,this.state.currentID)}>Add</button>
						<button type="button" className="btn btn-warning" onClick={this.handleEdit.bind(this,this.state.currentID)}>Edit</button>
						<button type="button" className="btn btn-danger" onClick={this.handleRemove.bind(this,this.state.currentID)}>Remove</button>
        	</div>
			  </Popup>

      </div>
    );
  }
}

export default ImageGrid;
