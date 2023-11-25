import { CommentService } from "../services/index.js";
var commentService = new CommentService();
async function createComment(req, res) {
  try {
    const response = await commentService.create(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    return res.status(200).json({
      success: true,
      message: "Successfully created a Comment",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in controller layer of Comment",
      data: {},
      err: error,
    });
  }
}

export default createComment;
