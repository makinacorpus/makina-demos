import React from 'react';

const PageDefault = props => (
  <pre>
    {JSON.stringify(props, null, 2)}
  </pre>
);

export default PageDefault;
