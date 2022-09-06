import AnswerComment from "./AnswerComment";

function AnswerComments({ comments }) {
  return (
    <div>
      {comments.map((data) => (
        <div key={data.id}>
          <AnswerComment data={data} />
        </div>
      ))}
    </div>
  );
}

export default AnswerComments;
