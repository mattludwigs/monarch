module Application.Types exposing (Msg(..))

import Hop.Types exposing (Query)


type Msg
  = NavigateTo String
  | SetQuery Query
