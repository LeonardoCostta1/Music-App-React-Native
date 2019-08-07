import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './redux/reducers';


export default props =>(

<Provider store={createStore(reducers)}>
    <Routes />
</Provider>  
);


