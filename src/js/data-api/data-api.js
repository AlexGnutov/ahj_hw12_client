export default class DataAPI {
  static getDummy() {
    return [
      {
        header: 'XXXXXXXXXX XXXXXXXXXXXXX',
        imageURL: '',
        imageAlt: 'Picture for news 1',
        text: 'XXXXXXXX XXXXXXXXXXX XXXXXXXXXX XXXXXXXXX XXXXXXXXXX XXXXXXXXXXX',
      },
      {
        header: 'XXXXXXX XXXXXXXXXXXXXXXX',
        imageURL: '',
        imageAlt: 'Picture for news 2',
        text: 'XXXXXXXXXX XXX XXXXXXXXX XXXXXXXXXX XXXXXXXXX XXXXX XXXXXXXXXXXXX',
      },
      {
        header: 'XXXXXXXX XXX XXXXXXXXX XXX',
        imageURL: '',
        imageAlt: 'Picture for news 3',
        text: 'XXXXXXX XXXXXXXXXXXXXX XXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXX',
      },
    ];
  }

  static async getData(url) {
    return fetch(url);
  }
}
