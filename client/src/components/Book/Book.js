import React from 'react'
// import './book.css'
import  { Card, CardImg, CardText, CardBody, CardLink,
CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Book = props => {

    return (
        <div>
    <Card>
  <CardImg className="image" src={props.book.image} alt="Card image cap" />
  <CardBody>
    <CardTitle>{props.book.title}</CardTitle>
    <CardSubtitle>Written by: {props.book.authors}</CardSubtitle>
    <CardText>{props.book.description}</CardText>
    <Button 

    onClick={() => props.handleSaveBook(props.book.googleId)}>
    Save
    </Button>
    <br></br>
    <br></br>
    <Button href={props.book.link}>Google Books Link</Button>
  </CardBody>
</Card>
</div>
  )
}

export default Book
    