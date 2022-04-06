import React from 'react';
import ComponentThatCrash from './ComponentThatCrash';
import ErrorBoundary from './ErrorBoundary';

function ErrorBoundariesPage() {
  return (
    <div className="ErrorBoundariesPage">
      <ErrorBoundary>
        <ComponentThatCrash />
      </ErrorBoundary>
    </div>
  );
}

export default ErrorBoundariesPage;
