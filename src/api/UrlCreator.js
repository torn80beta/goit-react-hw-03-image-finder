export default class UrlCreator {
  constructor() {
    this.page = 1;
    this.API_KEY = '34120463-e7776ce011157a1f3e137c765';
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  getUrl(query) {
    const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=15&page=${this.page}`;
    return url;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
