import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ModalPedidoDetail from './views/modalPedidoDetail';
import ModalAddPedidoDetail from './views/modalAddDetalOrder';

const url = "http://localhost:8080/api/v1/orders/";

class App extends Component {
  state = {
    data: [],
    modalDetail: false,
    modalAddPedidoDetail: false,
    pedidoId: 0
  }

peticionGet = () => {
  axios.get(url).then(response => {
    this.setState({ data: response.data });
  }).catch(error => {
    console.log(error.message);
  })
}

modalDetailState = () => {
  this.setState({ modalDetail: !this.state.modalDetail });
}

modalAddPedidoDetailState = () => {
  this.setState({ modalAddPedidoDetail: !this.state.modalAddPedidoDetail });
}

seleccionarDetail = (order) => {
  this.setState({
    pedidoId : order.id
  })
}

componentDidMount() {
  this.peticionGet();
}

render() {
  return (
    <div className="App">
      <br /><br /><br />
      <table className="table ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Number</th>
            <th>Client</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map(orden => {
            return (
              <tr>
                <td>{orden.id}</td>
                <td>{orden.number}</td>
                <td>{orden.client}</td>
                <td>{orden.total}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => { this.seleccionarDetail(orden); this.modalAddPedidoDetailState() }}><FontAwesomeIcon icon={faPlus} /></button>
                  {"   "}
                  <button className="btn btn-primary" onClick={() => { this.seleccionarDetail(orden); this.modalDetailState() }}><FontAwesomeIcon icon={faExpandArrowsAlt} /></button>
                  {"   "}
                  <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
      <ModalAddPedidoDetail isOpen={this.state.modalAddPedidoDetail} onClose={this.modalAddPedidoDetailState} pedidoId = {this.state.pedidoId}/>
      <ModalPedidoDetail isOpen={this.state.modalDetail} onClose={this.modalDetailState} pedidoId = {this.state.pedidoId}/>

    </div>

  );
}
}

export default App;