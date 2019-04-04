import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class ImageGrid extends React.Component {
  createTable = (images, handleClick) => {
    let containerChildren = [];
    let rowChildren = [];
    for (let i = 0; i < images.length; i++) {
      rowChildren.push(
        <Col key={i}>
          <Image
            onClick={handleClick}
            width="200px"
            src={images[i]}
            thumbnail
          />
        </Col>
      );
      if (i % 4 === 3 || images.length - 1 === i) {
        containerChildren.push(<Row key={i}>{rowChildren}</Row>);
        rowChildren = [];
      }
    }
    return containerChildren;
  };

  render() {
    return (
        <Container>{this.createTable(this.props.images, this.props.handleClick)}</Container>
    );
  }
}

export default ImageGrid;
