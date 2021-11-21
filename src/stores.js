import { writable } from 'svelte/store'
import { initDefaultTheme } from './utils'

const DEFAULT_VALUE = '{"operationName":"exhibitionsList","variables":{"filter":{"profileID":"60cbab4780520a00105f5266","startDate":{"lt":"Wed, 17 Nov 2021 22:00:00 GMT"},"endDate":{"gt":"Wed, 17 Nov 2021 22:00:00 GMT"},"permission":"EDIT","status":"RELEASED"},"orderBy":{"field":"START_DATE","direction":"ASC"}},"query":"query exhibitionsList($filter: ExhibitionFilterInput!, $skip: Int, $limit: Int, $orderBy: ExhibitionOrderByInput) {\n  exhibitions(filter: $filter, orderBy: $orderBy, skip: $skip, limit: $limit) {\n    edges {\n      node {\n        ...ExhibitionListItem\n        __typename\n      }\n      __typename\n    }\n    pageInfo {\n      hasNextPage\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment ExhibitionListItem on Exhibition {\n  id\n  title\n  venue\n  location\n  startDate {\n    date\n    mask\n    __typename\n  }\n  endDate {\n    date\n    mask\n    __typename\n  }\n  status\n  artists {\n    ...ExhibitionArtistShortInfo\n    __typename\n  }\n  banner {\n    url\n    __typename\n  }\n  __typename\n}\n\nfragment ExhibitionArtistShortInfo on ExhibitionParticipant {\n  artist {\n    ... on ArtistPublicProfile {\n      id\n      fullname\n      __typename\n    }\n    ... on GhostArtistPublicProfile {\n      id\n      fullname\n      __typename\n    }\n    ... on ExhibitionParticipantCustomArtist {\n      id\n      fullname\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n"}'

export const sourceQuery = writable(DEFAULT_VALUE)
export const theme = writable(initDefaultTheme())