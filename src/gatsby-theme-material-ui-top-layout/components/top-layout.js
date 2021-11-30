/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import { MDXProvider } from '@mdx-js/react';

import {
  Box,
  Button,
  Container,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { Link } from 'gatsby-theme-material-ui';

const TopLayout = ({ children, theme }) => (
  <ThemeTopLayout theme={theme}>
    <MDXProvider
      components={{
        Box,
        Button,
        Container,
        Link,
        h1: props => <Typography variant="h1" {...props} />,
        h2: props => <Typography variant="h2" {...props} />,
        h3: props => <Typography variant="h3" {...props} />,
        h4: props => <Typography variant="h4" {...props} />,
        h5: props => <Typography variant="h5" {...props} />,
        h6: props => <Typography variant="h6" {...props} />,
        hr: props => <Divider {...props} />,
        p: props => <Typography variant="body1" {...props} />,
        li: props => <Typography variant="body1" component="li" {...props} />,
        a: props => <Link {...props} />,
        table: props => <Table {...props} />,
        thead: props => <TableHead {...props} />,
        tbody: props => <TableBody {...props} />,
        tr: props => <TableRow {...props} />,
        td: props => <TableCell {...props} />,
        th: props => <TableCell component="th" {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  </ThemeTopLayout>
);

export default TopLayout;
