import { v4 as uuid } from 'uuid'

type getUuid = () => string

export const getUuid: getUuid = () => {
  return uuid()
}