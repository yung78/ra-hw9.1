import { Outlet } from 'react-router-dom';
import Menu from '../components/menu';

export default function App() {
  return (
    <div>
      <Menu />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
}