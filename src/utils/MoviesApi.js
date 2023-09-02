const urlApi = 'https://api.nomoreparties.co';
 class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getAllMovies() {
    return this._request(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    else {
      return res.json().then(res=> {throw res})
    }
  }
}


const moviesApi = new MoviesApi({
  url: urlApi,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi
