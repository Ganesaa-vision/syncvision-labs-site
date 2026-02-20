import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  return (
    <Helmet>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Helmet>
  );
};

export default SchemaMarkup;