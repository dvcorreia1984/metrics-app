import React from 'react';
import { useParams } from 'react-router-dom';

function Region() {
  const { region } = useParams();

  // Use the 'region' variable to customize the content
  // For example, fetch data specific to the selected region

  return (
    <div>
      <h1>
        {region}
        {' '}
        Region
      </h1>
      {/* Render region-specific content here */}
    </div>
  );
}

export default Region;
