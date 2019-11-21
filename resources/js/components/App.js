import React from 'react';
import { Container,Button,Col, Row } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { map } from 'lodash';
import AppContent from './AppContent';
import ReactDOM from 'react-dom';

function App() {
    return (
        <Container fluid>
            <Header />
            <AppContent />
        </Container>
    );
}

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: null,
        }
    }
    componentDidMount(){
        axios.get("/api/items").then(res=>{
            if(res.data){
                this.setState({
                    items: res.data
                });
            }
        });
    }
    render(){
        const {items}=this.state;
        console.log(items);
        return(
            <Container className="justify-content-center">
                <Row>
                    {
                        map(items,(item)=>{
                            return( 
                                <Col key={item.name}>
                                    <a href={item.link}> {item.name} </a>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
