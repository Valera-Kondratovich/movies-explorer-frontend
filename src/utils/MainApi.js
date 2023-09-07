const urlApi = 'http://localhost:3000'; //https://api.mesto.kondratovich.nomoredomains.work указать адрес сервера бекенд
const urlMoviesApi = 'https://api.nomoreparties.co';
 class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getAllCardsData() {
    return this._request(`${this._url}/cards`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    })
  }

  //используется
  getUserData() {
    return this._request(`${this._url}/users/me`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    })
  }
//используется
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
        image: image.url,
        trailerLink: trailerLink,
        thumbnail: `${urlMoviesApi}${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN})
    })
  }

//используется
  getMovies(){
    return this._request(`${this._url}/movies`, {
      credentials: 'include',
      method: 'GET',
      headers: this._headers
    })
  }

  //используется
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

  postCardData(data) {
    return this._request(`${this._url}/cards`, {
      credentials: 'include',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
  }

  changeLikeCardStatus(idImage, isLiked){
if (isLiked) {
  return this.putLike(idImage)
}
else {
  return this.delLike(idImage)
}
  }

  putLike(idImage) {
    return this._request(`${this._url}/cards/${idImage}/likes`, {
      credentials: 'include',
      method: 'PUT',
      headers: this._headers,
    })
  }

  delLike(idImage) {
    return this._request(`${this._url}/cards/${idImage}/likes`, {
      credentials: 'include',
      method: 'DELETE',
      headers: this._headers,
    })
  }



  patchUserAvatar(urlAvatar) {
    return this._request(`${this._url}/users/me/avatar`, {
      credentials: 'include',
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(urlAvatar)
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
