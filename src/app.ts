import Fastify from "fastify";
import cors from "@fastify/cors";
import { authRoutes } from "./modules/auth.routes";

export const buildApp = async () => {
  const app = Fastify({ logger: true });
await app.register(authRoutes, { prefix: "/api/auth" });
  await app.register(cors);

  return app;
};