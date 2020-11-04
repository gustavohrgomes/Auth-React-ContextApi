import React from 'react';

import { useAuth } from '../contexts/auth';

import SignRoutes from './Sign.routes';
import OtherRoutes from './Other.routes';

const Routes: React.FC = () => {
  const {signed} = useAuth();
  return signed ? <OtherRoutes/> : <SignRoutes />;
};

export default Routes;