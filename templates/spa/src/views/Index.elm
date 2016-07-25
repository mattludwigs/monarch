module Views.Index exposing (view)

import Application.Model exposing (Model)
import Application.Types exposing (Msg(..))

import Html exposing (Html, div, text, h1)

view : Model -> Html Msg
view model =
  div
    []
    [ h1 [] [ text "Hello from IndexView" ]
    ]
