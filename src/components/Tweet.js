export default class Tweet {
  constructor (props) {
    this.id = props.id
    this.name = props.name
    this.text = props.text
  }

  card () {
    return `
      <div class="card column is-one-third">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${this.name}</p>
            </div>
          </div>
          <div class="content">
            ${this.text}
          </div>
        </div>
      </div>
    `
  }

  render () {
    const tweet = document.createElement('div')
    tweet.classList.add('columns', 'is-multiline', 'is-centered')
    const cardContainer = this.card(this.name, this.text)
    tweet.innerHTML = cardContainer
    this.tweet = tweet
    return tweet
  }
}
