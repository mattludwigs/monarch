module Application.Model exposing (Model)

import Hop.Types exposing (Location, Query)
import Router.Routes exposing (Route(..))

type alias Model =
  { location : Location
  , route : Route
  }
