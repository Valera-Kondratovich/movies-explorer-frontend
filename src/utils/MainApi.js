const urlApi = 'http://localhost:3000'; //https://api.mesto.kondratovich.nomoredomains.work указать адрес сервера бекенд //http://localhost:3000
const urlMoviesApi = 'https://api.nomoreparties.co';
 class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }


  getUserData() {
    return this._request(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    })
  }

  saveMovie({ id, nameRU, nameEN, director, country, year, duration, description, trailerLink, image, }) {
    return this._request(`${this._url}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `${urlMoviesApi}${image.url}`,
        trailerLink: trailerLink,
        thumbnail: `${urlMoviesApi}${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN})
    })
  }

  getMovies(){
    return this._request(`${this._url}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    })
  }

  delMovie(idMovie) {
    return this._request(`${this._url}/movies/${idMovie}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    })
  }


  patchUserData(data) {
    return this._request(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: this._headers,
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


const mainApi = new MainApi({
  url: urlApi,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default mainApi
