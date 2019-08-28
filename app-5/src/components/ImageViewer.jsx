import React, {Component} from "react";
import Image from '../components/Image'

class ImageViewer extends Component {
  constructor() {
    super()
    this.state = {
      imageUrl : "https://bigthink-img.rbl.ms/simage/https%3A%2F%2Fassets.rbl.ms%2F18408074%2F980x.jpg/2000%2C2000/H6oJA6kkPGsy0x3Q/img.jpg"
    }
  }

  render() {
    return (
    <Image
    url={this.state.imageUrl} />
    )
  }
}

export default ImageViewer;

