import { onRequestGet as __api_bgg_ts_onRequestGet } from "/home/user/boardmaster/functions/api/bgg.ts"
import { onRequest as __api_bgg_ts_onRequest } from "/home/user/boardmaster/functions/api/bgg.ts"

export const routes = [
    {
      routePath: "/api/bgg",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_bgg_ts_onRequestGet],
    },
  {
      routePath: "/api/bgg",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_bgg_ts_onRequest],
    },
  ]