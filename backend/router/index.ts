import * as trpc from "@trpc/server";
import superjson from "superjson";
import { dataRouter } from "./datas";

export const appRouter = trpc
  .router()
  .transformer(superjson)
  .merge("datas.", dataRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
