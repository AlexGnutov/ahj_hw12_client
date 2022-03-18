import { create } from '../utils/utils';

export default class NewsElement {
  constructor(newsData) {
    this.container = create('div', 'news-card');
    this.markup = `
      <img class="news-img" src="">
      <div class="news-content">
        <h3 class="news-header"></h3>
        <p class="news-text"></p>
      </div>
    `;
    this.container.innerHTML = this.markup;
    // Safe fill elements with data
    const header = this.container.querySelector('.news-header');
    header.innerText = newsData.header;
    const image = this.container.querySelector('.news-img');
    image.src = newsData.imageURL;
    image.alt = newsData.imageAlt;
    const text = this.container.querySelector('.news-text');
    text.innerText = newsData.text;
  }

  bindToDOM(parent) {
    parent.appendChild(this.container);
  }
}
