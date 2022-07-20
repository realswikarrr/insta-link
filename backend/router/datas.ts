import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";

export const dataRouter = trpc
  .router()
  .query("getAll", {
    async resolve() {
      return await prisma.data.findMany();
    },
  })
  .mutation("update", {
    input: z.object({
      name: z.string(),
      portfolio: z.string(),
      github: z.string(),
      linkedin: z.string(),
      image: z.string(),
    }),

    async resolve({ input }) {
      return await prisma.data.update({
        data: {
          name: input.name,
          portfolio: input.portfolio,
          github: input.github,
          linkedin: input.linkedin,
          image: input.image,
        },
        where: {
          id: "cl5ts8d2j0007mov2h7app7pc",
        },
      });
    },
  });
