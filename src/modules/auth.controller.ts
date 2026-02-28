import { FastifyReply, FastifyRequest } from "fastify";
import { registerUser, loginUser } from "./auth.service";
import { registerSchema, loginSchema } from "./auth.schema";

export const register = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const parsed = registerSchema.safeParse(request.body);

  if (!parsed.success) {
    return reply.status(400).send(parsed.error);
  }

  const user = await registerUser(parsed.data);
  return reply.status(201).send(user);
};

export const login = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const parsed = loginSchema.safeParse(request.body);

  if (!parsed.success) {
    return reply.status(400).send(parsed.error);
  }

  const token = await loginUser(parsed.data);
  return reply.send(token);
};