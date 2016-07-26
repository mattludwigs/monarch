module Router.Routes.{{name}} exposing ({{routeName}}Matcher)

import Hop.Types exposing (PathMatcher)
import Hop.Matchers exposing (match1)

import Router.Routes exposing (Route(..))

{{routeName}}Matcher : PathMatcher Route
{{routeName}}Matcher =
  match1 {{route}} ""
