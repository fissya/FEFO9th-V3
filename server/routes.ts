import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Healthcheck endpoint
  app.get("/api/healthcheck", (req, res) => {
    res.json({ status: "ok" });
  });
  
  const httpServer = createServer(app);

  return httpServer;
}
