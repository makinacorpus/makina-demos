import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Grid } from '@mui/material';
import ItemCard from './ItemCard';

const Items = props => {
  const { wrapper: { items = [] } = {} } = useStaticQuery(graphql`
    query MyQuery {
      wrapper: allItems {
        items: nodes {
          id
          columnsRaw
          columns {
            tags { value }
          }
        }
      }
    }
  `);

  const richItems = React.useMemo(
    () => items.map(({ columnsRaw, columns, ...rest }) => {
      let data = {};

      try {
        data = JSON.parse(columnsRaw);
      } catch (err) {
        // noop
      }

      return {
        ...data,
        ...columns,
        ...rest,
      };
    }).sort(({ id: a = '' }, { id: b = '' }) => {
      const { 1: aIndex } = a.match(/-row-(.*)$/) || [];
      const { 1: bIndex } = b.match(/-row-(.*)$/) || [];
      return Number(aIndex) - Number(bIndex);
    }).filter(({ brouillon }) => !brouillon),
    [items],
  );

  return (
    <Grid container spacing={2} {...props}>
      {richItems.map(item => (
        <Grid item key={item.id} lg={3} md={4} xs={6}>
          <ItemCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Items;
