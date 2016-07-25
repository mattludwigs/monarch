module Application.EntryPoint exposing (..)

import Hop.Types exposing (Location)

import Router.Routes exposing (Route(..))

import Application.Model exposing (Model)
import Application.Types exposing (Msg(..))

init : ( Route, Hop.Types.Location ) -> ( Model, Cmd Msg )
init ( route, location ) =
    ( Model location route, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none
