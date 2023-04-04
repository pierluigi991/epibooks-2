import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MjZjZWY4MWI0MjAwMTM5YjI3ZDkiLCJpYXQiOjE2ODA1MjkxNTcsImV4cCI6MTY4MTczODc1N30.xcCrn-hPyCaecrCSZraKU10zzxzSRHiMFnhhNvegIx0",
        },
      });

      if (response.ok) {
        const commentsArr = await response.json();
        setComments(commentsArr);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  useEffect(() => {
    console.log("didUpdate()");
    fetchComments();
  }, [props.asin]);

  return (
    <div>
      <AddComment asin={props.asin} fetchComments={fetchComments} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentArea;
