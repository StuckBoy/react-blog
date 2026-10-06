import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/gaming", "routes/gaming.tsx"),
  route("/gardening", "routes/gardening.tsx"),
  route("/movies", "routes/movies.tsx"),
  route("/programming", "routes/programming.tsx"),
  route("/reading", "routes/reading.tsx"),
  route("/television", "routes/television.tsx"),
] satisfies RouteConfig;
