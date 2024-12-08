const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const userController = require("../../../controllers/userController");
const userService = require("../../../services/userService");
const { User } = require("../../../database/models");
const { createHash } = require("../../../services/utils/bcryptUtils");
const { generateToken } = require("../../../services/utils/tokenUtils");

chai.use(sinonChai);

describe("userController", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should signup new user", async () => {
    const user = await User.bulkBuild({
      name: "John Doe",
      email: "j@gmail.com",
      password: createHash("123456"),
    });
  
    sinon.stub(userService, "createNewUser").resolves(user);

    const req = {
      body: {
        name: "John Doe",
        email: "j@gmail.com",
        password: "123456",
      },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await userController.signUp(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({
      id: 1,
      name: "John Doe",
      email: "j@gmail.com",
      token: "",
    });
  });
});
