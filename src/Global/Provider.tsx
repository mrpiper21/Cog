import { UserContext } from '../hooks/Usercontext/UserContext';
import LocationHook from '../hooks/LocationContext/LocationHook';
import AppNavigation from '../navigation';
import AppSettingContext from '../hooks/AppSettingContext';

import React from 'react'
import PreferenceProvider from '../hooks/PrefrenceContext/PreferenceContext';

function buildProviderTree(providers: any, AppComponent: any) {
    return providers.reduceRight((acc: any, Provider: any) => {
      return <Provider>{acc}</Provider>;
    }, <AppComponent />)
}

const Providers = ()=> {
  const Hooks = [ UserContext, LocationHook, AppSettingContext, PreferenceProvider ];
  return buildProviderTree(Hooks, AppNavigation)
}

export default Providers;