import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,           // Always true: only send over HTTPS
    sameSite: "none",       // Always none: allow cross-site cookies (required for most modern frontends)
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
    path: '/',
    // Optionally, set your root domain:
    // domain: ".yourdomain.com"
  });
};
