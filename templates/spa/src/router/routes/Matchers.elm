module Router.Routes.Matchers exposing (matchers)

import Hop.Types exposing (PathMatcher)
import Hop.Matchers exposing (..)

import Router.Routes exposing (Route(..))
import Router.Routes.Index exposing (indexRouteMatcher)
import Router.Routes.About exposing (aboutRouteMatcher)

matchers : List (PathMatcher Route)
matchers =
    [ indexRouteMatcher
    , aboutRouteMatcher
    ]
