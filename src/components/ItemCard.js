import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import ItemTags from './ItemTags';

const ItemCard = ({
  titre,
  description,
  tags,
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      alt=""
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {titre}
      </Typography>

      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}

      <ItemTags tags={tags} />
    </CardContent>

    <CardActions>
      <Button size="small">Voir le site</Button>
    </CardActions>
  </Card>
);

export default ItemCard;
