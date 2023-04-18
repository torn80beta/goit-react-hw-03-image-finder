export default class UrlCreator {
  constructor() {
    this.page = 1;
    this.refs = this.getRefs();
    this.searchQuery = '';
    this.API_KEY = '34120463-e7776ce011157a1f3e137c765';
    this.BASE_URL = 'https://pixabay.com/api/';
  }

  getRefs() {
    const refs = {};
    refs.searchForm = document.querySelector('.search-form');
    return refs;
  }

  getUrl(query, page) {
    const url = `${this.BASE_URL}?key=${this.API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`;
    return url;
  }

  getQuery() {
    this.searchQuery = this.refs.searchForm.searchQuery.value.trim();
  }

  incrementPage() {
    this.page += 1;
  }

  clearPageValue() {
    this.page = 1;
  }
}
