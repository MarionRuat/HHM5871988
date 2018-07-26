import React, { Component } from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import { withStyles } from '@material-ui/core/styles';

const styles =  theme => ({
  toto: {
    backgroundColor: 'green'
  },
  gregre:{
    backgroundColor: 'brown'
  }
});

class Carousel extends Component {
    render() {
      const { classes } = this.props;
      return (
          <AutoRotatingCarousel
          autoplay={false}
          classes={{elevation:classes.toto}}
          className={classes.gregre}
            open
          >
            <Slide
              media={<img src="https://static.lexpress.fr/medias_10140/w_640,h_360,c_fill,g_north/v1421870418/un-panier-de-basket-ball-lors-d-un-match-de-nba_5192047.jpg" />}
              style={{backgroundColor:'red'}}
              // contentStyle={{ backgroundColor: 'red' }}
            />
            <Slide
              media={<img src="https://medias.lequipe.fr/img-photo-jpg/oakland-ca-january-16-lebron-james-23-of-the-cleveland-cavaliers-drives-to-the-basket-during-th/1500000000813376/39:157,2182:1586-624-416-75/9a6ae.jpg" />}
              // contentStyle={{ backgroundColor: 'blue' }}
            />
            <Slide
              media={<img src="http://www.gites-chanac.com/wp-content/uploads/sites/9/2016/06/Basket.jpg" />}
              // contentStyle={{ backgroundColor: 'green' }}
            />
          </AutoRotatingCarousel>
      );
    }
  }

export default withStyles(styles)(Carousel);
