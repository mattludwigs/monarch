module Router.Routes.Index exposing (indexRouteMatcher)

import Hop.Types exposing (PathMatcher)
import Hop.Matchers exposing (match1)

import Router.Routes exposing (Route(..))

indexRouteMatcher : PathMatcher Route
indexRouteMatcher =
  match1 IndexRoute ""
