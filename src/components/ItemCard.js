import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from '@mui/material';

import ItemTags from './ItemTags';

const ItemCard = ({
  titre,
  description,
  tags,
  lien,
  img: [img] = [],
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea component={Link} href={lien} target="_blank">
      <CardMedia
        component="img"
        height="140"
        image={img?.thumbnails.card_cover.url || '/makina.png'}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {titre}
        </Typography>

        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}

        <ItemTags tags={tags} />
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" href={lien} target="_blank">Voir le site</Button>
    </CardActions>
  </Card>
);

export default ItemCard;
