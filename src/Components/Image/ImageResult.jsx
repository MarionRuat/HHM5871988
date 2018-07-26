import React, { Component } from 'react';
import { GridList, GridTile, IconButton } from 'material-ui';
import ActionZoomIn from 'material-ui/SvgIcon';




class ImageResult extends Component {

  render() {
    const {images} = this.props;

    let imageContent;

    if (images){
      imageContent = (

        <GridList cols={3}>
        {images.map (img => (

          <GridTile
          title={img.tags}  
          key={img.id}

          actionIcon={

        <IconButton>
          <ActionZoomIn color = "with" />
        </IconButton>

            }
          >   
          <img src={img.largeImageURL}/> 
          </GridTile>
        ))}
      </GridList>)
        
    }else{
      imageContent=null;
    }

    return (
      <div>
      
      {imageContent}
        
      </div>
    );
  }
}

export default ImageResult;
