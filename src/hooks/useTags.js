import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

const useTags = () => {
  const { wrapper: { tags = [] } = {} } = useStaticQuery(graphql`
    {
      wrapper: allTags {
        tags: nodes {
          columns {
            description
            label
            tag
            items { id }
          }
        }
      }
    }
  `);

  return React.useMemo(
    () => tags.reduce((acc, { columns: { tag, ...rest } }) => ({ ...acc, [tag]: rest }), {}),
    [tags],
  );
};

export default useTags;
