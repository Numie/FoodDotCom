import React from 'react';
import { withRouter } from 'react-router-dom';

const ErrorPage = props => {
  return (
    <div>
      <div>
        <div id='error-page' className='no-filter-results'>
          <div className='inner-no-filter-results'>
            <img src={window.staticImages.no_results} />
            <div>
              <h1>Page Not Found!</h1>
              <h5>It looks like the page you're looking for does not exist.</h5>
              <button onClick={props.history.goBack}>Take Me Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ErrorPage);
