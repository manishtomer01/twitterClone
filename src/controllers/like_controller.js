import { LikeService } from "../services/index.js";
var likeService = new LikeService();
async function toggleLike(req, res) {
  try {
    const response = await likeService.toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(200).json({
      success: true,
      message: "Successfully toggle like",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in controller layer",
      data: {},
      err: error,
    });
  }
}

export default toggleLike;
