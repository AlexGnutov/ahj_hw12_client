import { create } from '../utils/utils';
import NewsElement from './news-element';
import DataAPI from '../data-api/data-api';

export default class NewsBlock {
  constructor() {
    this.container = create('div', 'news-block-container');
    this.markup = `
      <h1 class="news-block-header">Новости кино</h1>
      <button class="renew-button">Обновить</button> 
      <div class="news-elements-container pre-load"></div>
      <div class="not-loaded-container hidden">
        <div class="not-loaded-text">Не удалось загрузить содержимое: попробуйте позже или перезагрузите страницу</div>
      </div>
    `;
    this.container.innerHTML = this.markup;
    this.newsBox = this.container.querySelector('.news-elements-container');
    this.noContentElement = this.container.querySelector('.not-loaded-container');
    this.container.querySelector('.renew-button').addEventListener('click', () => {
      window.location.reload();
    });
  }

  async init() {
    this.addNewsElements(DataAPI.getDummy());
    try {
      const response = await DataAPI.getData('https://ahjhw12server.herokuapp.com/api/news');
      if (response.ok) {
        const data = await response.json();
        this.addNewsElements(data);
        this.newsBox.classList.remove('pre-load');
      } else {
        this.showNoContentMessage();
      }
    } catch (e) {
      // console.log(e.message);
      this.showNoContentMessage();
    }
  }

  bindToDOM(parent) {
    parent.appendChild(this.container);
  }

  addNewsElements(newsData) {
    this.newsBox.innerHTML = '';
    newsData.forEach((data) => {
      const newNews = new NewsElement(data);
      newNews.bindToDOM(this.newsBox);
    });
  }

  showNoContentMessage() {
    this.noContentElement.classList.remove('hidden');
  }

  hideNoContentMessage() {
    this.noContentElement.classList.add('hidden');
  }
}
