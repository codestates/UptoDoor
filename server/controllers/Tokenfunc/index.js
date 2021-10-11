/* eslint-disable no-console */
/* eslint-disable consistent-return */
const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  generateAccessToken: (data) => {
    const token = sign(data, process.env.ACCESS_SECRET, {
      expiresIn: `${1000 * 60 * 60 * 24 * 14}s`,
    });
    return token;
  },

  generateRefreshToken: (data) => {
    const token = sign(data, process.env.REFRESH_SECRET, { expiresIn: "30d" });
    return token;
  },

  sendAccessToken: (res, accessToken) => {
    res.cookie("accessToken", accessToken, {
      maxAge: `${1000 * 60 * 60 * 24 * 14}`,
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "none",
    });
  },

  sendRefreshToken: (res, refreshToken) => {
    res.cookie("refreshToken", refreshToken, {
      maxAge: `${1000 * 60 * 60 * 24 * 30}`,
      httpOnly: true,
      path: "/",
      secure: true,
      sameSite: "none",
    });
  },

  checkRefresh: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      console.log(err);
    }
  },

  checkAccess: (accessToken) => {
    try {
      return verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      console.log(err);
    }
  },
};
