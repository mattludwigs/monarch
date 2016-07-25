module Components.{{name}}.View exposing (view)

import Html exposing (Html, div, text)

import Application.Model exposing (Model)
import Application.Types exposing (Msg(..))

view : Model -> Html Msg
view model =
  div
    []
    [ text "COMPONENT!!"
    ]
