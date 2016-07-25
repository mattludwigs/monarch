module Router.Routes.About exposing (aboutRouteMatcher)

import Hop.Types exposing (PathMatcher)
import Hop.Matchers exposing (match1)

import Router.Routes exposing (Route(..))

aboutRouteMatcher : PathMatcher Route
aboutRouteMatcher =
  match1 AboutRoute "/about"
