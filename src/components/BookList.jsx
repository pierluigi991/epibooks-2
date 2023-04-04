// import { Component } from 'react'
// import SingleBook from './SingleBook'
// import { Col, Form, Row } from 'react-bootstrap'
// import CommentArea from './CommentArea'

// class BookList extends Component {
//   state = {
//     searchQuery: '',
//     selectedBook: null,
//   }

//   changeSelectedBook = (asin) => {
//     this.setState({
//       selectedBook: asin,
//     })
//   }

//   render() {
//     return (
//       <>
//         <Row>
//           <Col md={8}>
//             <Row>
//               <Col>
//                 <Form.Group>
//                   <Form.Label>Search a book</Form.Label>
//                   <Form.Control
//                     type="text"
//                     placeholder="Search here"
//                     value={this.state.searchQuery}
//                     onChange={(e) =>
//                       this.setState({ searchQuery: e.target.value })
//                     }
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               {this.props.books
//                 .filter((b) =>
//                   b.title.toLowerCase().includes(this.state.searchQuery)
//                 )
//                 .map((b) => (
//                   <Col xs={12} md={4} key={b.asin}>
//                     <SingleBook
//                       book={b}
//                       selectedBook={this.state.selectedBook}
//                       changeSelectedBook={this.changeSelectedBook}
//                     />
//                   </Col>
//                 ))}
//             </Row>
//           </Col>
//           <Col md={4}>
//             <CommentArea asin={this.state.selectedBook} />
//           </Col>
//         </Row>
//       </>
//     )
//   }
// }

// export default BookList
import { useState } from "react";
import SingleBook from "./SingleBook";
import { Alert, Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState("");

  return (
    <>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label className="display-6">Search a book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} md={3} key={b.asin}>
                  <SingleBook book={b} selectedBook={selectedBook} changeSelectedBook={setSelectedBook} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={6}>
          {selectedBook ? (
            <CommentArea asin={selectedBook} />
          ) : (
            <Alert variant="info">Seleziona un libro per visualizzare i commenti</Alert>
          )}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
