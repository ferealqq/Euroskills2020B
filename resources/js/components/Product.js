import React, { Component } from 'react';
import { Col,Input,Form,Label,Row } from 'reactstrap';
import { map,filter } from 'lodash';
import axios from 'axios';

export default class Product extends Component{
	constructor(props){
		super(props);
		this.state = {
			products: null,
		}
		this.selectProduct = this.selectProduct.bind(this);
		this.selectColor = this.selectColor.bind(this);
		this.defineImgSrc = this.defineImgSrc.bind(this);
	}
	componentDidMount(){
		axios.get("/api/products").then(res=>{
			if(res.data){
				this.setState({
					products: res.data,
					selectedProduct: res.data[0].name,
				})
			}
		})
		axios.get("/api/colors").then(res=>{
			if(res.data){
				this.setState({
					colors: res.data,
					selectedColor: res.data[0].name,
				})
			}
		})
	}
	selectProduct(event){
		this.setState({
			selectedProduct: event.target.value,
		})
	}
	selectColor(event){
		this.setState({
			selectedColor: event.target.value,
		})
	}
	defineImgSrc(){
		const { selectedColor,selectedProduct,products} = this.state;
		if(selectedColor&&selectedProduct&&products){
			let selectedItem = filter(products,(product)=>product.name===selectedProduct)[0];
			let image = filter(selectedItem.images,(imageData)=>{
				if(imageData["picture-path"].includes(selectedColor)){
					return imageData;	
				}
			});
			return image[0].img;
		}
	}
	render(){
		const { products,colors } = this.state;
		const imgSrc = this.defineImgSrc();
		console.log(this.state);
		return(
			<Col className="p-1" sm="9">
				<Form>
					<Label> Select a product </Label>
					<Input type="select" onChange={this.selectProduct}>
						{
							products ? 
								map(products,(product)=><option key={product.name}> {product.name} </option>)
							:
								null
						}
					</Input>
					<Label> Select a color </Label>
					<Input type="select" onChange={this.selectColor}>
						{
							colors ? 
								map(colors,(color)=><option key={color.name}>{color.name}</option>)
							:
								null
						}
					</Input>
				</Form>
				<style>
					{
						`
						.center {
							position: absolute;
							top: 50%;
							left: 50%;
							width: 20%;
							transform: translate(-50%, -50%);
						}
						`
					}
				</style>
				<Row>
					<Col sm="9" className="justify-content-center">
						<img src={"data:image/png;base64,"+imgSrc} className="img-fluid img-thumbnail w-100" />
						<img src={"data:image/png;base64,"+this.props.symbol} className="img-fluid center" />
					</Col>
				</Row>
			</Col>
		);
	}
} 