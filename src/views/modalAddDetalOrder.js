import React, { Component, useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from "axios";
import PropTypes from "prop-types";

const url = "http://localhost:8080/api/v1/orders/";

/**
 * Modal que permite Agregar un detalle de una orden de pedido en el restaurant
 * @param {*} props 
 * @returns 
 */
const ModalAddPedidoDetail = (props) => {
    const { isOpen, onClose, pedidoId } = props;
  //  const [detail, setDetail] = useState();
    const onCloseClick = () => {
        onClose();
    }

    const saveDetail = () => {
        console.log("Aqui Guardar. Pero no se ejecuta desde abajo jjjj");
    }

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader style={{ display: 'block' }}>
                Nuevo detalle de una orden
            </ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label htmlFor="order">Order</label>
                    <input className="form-control" type="number" name="order" id="order"  />
                    <br />
                    <label htmlFor="detail">Detail</label>
                    <input className="form-control" type="text" name="detail" id="detail"  />
                    <br />
                    <label htmlFor="cantidad">Cantidad</label>
                    <input className="form-control" type="number" name="cantidad" id="cantidad" />
                    <br />
                    <label htmlFor="precioUnitario">Precio Unitario</label>
                    <input className="form-control" type="number" name="precioUnitario" id="precioUnitario"  />
                    <br />
                    <label htmlFor="totalDetail">Total</label>
                    <input className="form-control" type="number" name="totalDetail" id="totalDetail"  />
                </div>
            </ModalBody>

            <ModalFooter>
                <button className="btn btn-success" onClick={saveDetail}>Add new detail</button>
                <button className="btn btn-danger" onClick={onCloseClick}>Close</button>
            </ModalFooter>
        </Modal>
    );
}

ModalAddPedidoDetail.propTypes = {

}

export default ModalAddPedidoDetail;