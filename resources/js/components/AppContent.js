import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
import Product from './Product';
import { map } from 'lodash';
import axios from 'axios';

export default class AppContent extends Component{
	constructor(props){
		super(props);
		this.state = {
			imageList: null,
			selectedSymbol: null,
		}
		this.selectSymbol = this.selectSymbol.bind(this);
	}
	componentDidMount(){
		axios.get("/api/symbols").then((res)=>{
			if(res.data){
				this.setState({
					imageList: res.data,
				})
			}
		})
	}
	selectSymbol(symbol){
		this.setState({
			selectedSymbol: symbol,
		})
	}
	render(){
		const{imageList,selectedSymbol} = this.state;
		return(
			<Container>
				<Row>
					{
						imageList ? 
							map(imageList,(imageData)=><ImgCol src={imageData.img} selectSymbol={this.selectSymbol}/>)
						: 
							null
					}
				</Row>
				<Row>
					{
						selectedSymbol ? 
							<Product symbol={selectedSymbol}/>
						: 
							null 
					}
				</Row>
			</Container>
		);
	}
}

function ImgCol(props){
	return (
		<Col sm="2">
			<img src={"data:image/png;base64,"+props.src} onClick={()=>props.selectSymbol(props.src)} className="img-fluid img-thumbnail" />
		</Col>			
	);
}