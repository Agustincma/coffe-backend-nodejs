import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

export const verifyToken = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({ message: "No autorizado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    );

    request.user = decoded;
  } catch (err) {
    return reply.status(401).send({ message: "Token inválido" });
  }
};