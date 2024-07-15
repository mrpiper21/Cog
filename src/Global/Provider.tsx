import VerificationContext from '../hooks/Verificationcontext/VerificationContext';
import { UserContext } from '../hooks/Usercontext/UserContext';
import LocationHook from '../hooks/Usercontext/LocationHook';
import AppNavigation from '../navigation';

import React from 'react'

function buildProviderTree(providers: any, AppComponent: any) {
    return providers.reduceRight((acc: any, Provider: any) => {
      return <Provider>{acc}</Provider>;
    }, <AppComponent />);
}

const Providers = ()=> {
  const Hooks = [ VerificationContext, UserContext, LocationHook ];
  return buildProviderTree(Hooks, AppNavigation)
}

export default Providers