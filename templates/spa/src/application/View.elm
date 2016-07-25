module Application.View exposing (view)

import Html exposing (Html, text, div, h1)

import Application.Model exposing (Model)
import Application.Types exposing (Msg(..))
import Router.Routes exposing (Route(..))


import Components.Menu.View as Menu

import Views.AppView as AppView

view : Model -> Html Msg
view model =
  let
    _ =
      Debug.log "model" model -- remove this
  in
    div
      []
      [ Menu.view model
      , AppView.view model
      ]
