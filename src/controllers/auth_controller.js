import { UserService } from "../services/index.js";
var userService = new UserService();
async function signup(req, res) {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(200).json({
      success: true,
      message: "Successfully created a new User",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in controller layer of Auth",
      data: {},
      err: error,
    });
  }
}

export default signup;
