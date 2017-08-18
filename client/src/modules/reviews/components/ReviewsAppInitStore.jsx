import React                  from 'react';
import { Provider }           from 'react-redux';
import store                  from '../configureStore.jsx';
import CurrentReviewsAppStore from '../containers/CurrentReviewsAppStore.jsx';

const ReviewsAppInitStore = () =>
    (<Provider store={store}>
        <CurrentReviewsAppStore />
      </Provider>);

export default ReviewsAppInitStore;