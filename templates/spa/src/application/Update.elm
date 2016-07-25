module Application.Update exposing (update)

import Navigation
import Hop exposing (makeUrl, makeUrlFromLocation, matchUrl, setQuery)

import Routing exposing (routerConfig)
import Application.Model exposing (Model)
import Application.Types exposing (Msg(..))

update : Msg -> Model -> (Model, Cmd Msg )
update msg model =
  case (Debug.log "msg" msg) of
    NavigateTo path ->
      let
        command =
          makeUrl routerConfig path
          |> Navigation.newUrl
      in
        ( model, command )
    _ ->
      -- Needs to handle SetQuery
      (model, Cmd.none)
