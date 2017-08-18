import React            from 'react';
import store            from '../configureStore.jsx';
import { Provider }     from 'react-redux';
import FilterAppConnect from '../containers/FilterAppConnect.jsx';

require('../styles/FilterApp.css');


const FilterAppCreateStore = () => (
    <Provider store={store}>
          <FilterAppConnect />
     </Provider>);

export default FilterAppCreateStore;
