
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import { Cadastros, Dashboard, Home, Updated, } from '../pages';

export const Routes = () => {
  return (
    <>
        <Switch>
            <Route path='/DasBoard' element={<Dashboard />} />
            <Route path='/Items' element={<Home />} />
            <Route path='/Items/cadastro' element={<Cadastros />} />
            <Route path='/Items/update' element={<Updated />} />
            <Route path='/*' element={<Navigate to='/DasBoard' />} />
        
        </Switch>
    </>
  )
}
