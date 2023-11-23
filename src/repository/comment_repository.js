import Comment from "../models/comments.js";
import CrudRepository from "./crud_repository.js";

class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}

export default CommentRepository;
