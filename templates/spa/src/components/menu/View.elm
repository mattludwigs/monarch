module Components.Menu.View exposing (view)

import Html exposing (Html, div, ul, li, text)
import Html.Events exposing (onClick)

import Application.Model exposing (Model)
import Application.Types exposing (Msg(..))

view : Model -> Html Msg
view model =
  div
    []
    [ ul
        []
        [ li
            [ onClick (NavigateTo "") ]
            [ text "Home" ]
        , li
            [ onClick (NavigateTo "/about") ]
            [ text "About" ]
        ]
    ]
