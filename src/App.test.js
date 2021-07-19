import { render, screen } from '@testing-library/react';
import App from './App';
import ModalPedidoDetail from './views/modalPedidoDetail';

beforeEach(()=> render(<ModalPedidoDetail/>));
describe('ModalPedidoDetail', () => {
  it('must display a title', () => {
    expect(screen.queryByText(/Detalles de la orden/i)).toBeInTheDocument();
  });

  it('must display the product name Cargando', () => {
    expect(screen.queryByText(/Cargando/i)).toBeInTheDocument();
  });
});