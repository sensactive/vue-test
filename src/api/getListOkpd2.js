import { HTTP } from './common'

export const Okpds2 = {
  list () {
    return HTTP.post("/api/dev/getnsi/", {
      "ajax": {
        "okpds": {
          "type":"okpd2"
        }
      }
    })
  .then(response => {
      return response.data
    })
  },
  getItem(itemId) {
    return HTTP.post(
      "/api/dev/getnsi/", {
      "ajax": {
        "okpds": {
          "parent": itemId
        }
      }
    }
    )
  }
}