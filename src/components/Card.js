import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root:{
        border:'2px solid black',
        borderRadius:10,
        boxShadow:'10px 10px 10px grey',
        padding:2,
        margin:10,
        textAlign:'center',
    },
});

export default function CardScreen({name,imgSrc}) {
  const classes = useStyles();

  return (
      <div className={classes.mainRoot}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height='400'
          width='300'
          image={imgSrc}
          title="Contemplative Reptile"
          className={classes.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
