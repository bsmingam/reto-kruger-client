import React, { Component, useEffect, useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from "axios";
import PropTypes from "prop-types";

const url = "http://localhost:8080/api/v1/orders/";

/**
 * Modal que permite ver el detalle de una orden de pedido en el restaurant
 * @param  isOpen Estado del modal para mostrar o ocultar.
 * @param  onClose Función que permite cerrar el modal.
 * @param  pedidoId id del pedido para cargar su detalle
 * @returns component modal
 */
const ModalPedidoDetail = (props) => {
    const { isOpen, onClose, pedidoId } = props;
    const [isLoading, setIsLoading] = useState(true);
    const [pedido, setPedido] = useState();
    const onCloseClick = () => {
        onClose();
    }

    useEffect(() => {
        if (isOpen && pedidoId > 0) {
            setIsLoading(true);
            axios.get(url + pedidoId+"/details").then(response => {
                setPedido(response.data);
                setIsLoading(false);
            }).catch(error => {
                console.log(error.message);
            })
        }
    }, [isOpen, pedidoId])

    return (
        <Modal isOpen={isOpen}>
            <ModalHeader style={{ display: 'block' }}>
                Detalles de la orden
            </ModalHeader>
            <ModalBody>
                {isLoading &&
                    <span>Cargando...</span>
                }
                {!isLoading &&
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Detail</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedido.ordersDetailsList.map((detail, i) => <tr key={i}>
                                    <td>{detail.detail}</td>
                                    <td>{detail.cantidad}</td>
                                    <td>{detail.precioUnitario}</td>
                                    <td>{detail.totalDetail}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                }

            </ModalBody>

            <ModalFooter>
                <button className="btn btn-danger" onClick={onCloseClick}>Close</button>
            </ModalFooter>
        </Modal>
    );
}

ModalPedidoDetail.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    pedidoId: PropTypes.number.isRequired
}

export default ModalPedidoDetail;