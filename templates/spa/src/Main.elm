module Main exposing (..)

import Html.App as App
import Navigation

import Application.EntryPoint as EntryPoint
import Application.View as ApplicationView
import Application.Update as ApplicationUpdate
import Routing

main : Program Never
main =
  Navigation.program Routing.urlParser
    { init = EntryPoint.init
    , view = ApplicationView.view
    , update = ApplicationUpdate.update
    , urlUpdate = Routing.urlUpdate
    , subscriptions = (always Sub.none)
    }
