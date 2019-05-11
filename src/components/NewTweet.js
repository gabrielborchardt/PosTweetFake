import Tweet from "./Tweet";

export default class NewTweet {
    constructor (props) {
        this.container = document.getElementById(props.newTweetContainer)
        this.containerList = document.getElementById(props.tweetsContainer)
    }

    render () {
        try {
            this.container.classList.add('columns', 'is-multiline', 'is-centered')
            this.container.innerHTML = this.card()
            
            document.getElementById("form").onsubmit = this.submit.bind(this)
        } catch (e) {
            console.log(e)
        }
    }

    card () {
        return `
        <form id='form'>
            Nome: <input type="text" id="nome">
            Mensagem: <input type="text" id="mensagem">
            <input type="submit" value="Enviar">
        </form>
        `
    }

    submit (form) {
        form.preventDefault()

        const name = document.getElementById("nome").value
        const text = document.getElementById("mensagem").value
        const tweet = new Tweet({name, text})
            
        this.validate(name, text)
        .then(()=>{
            this.containerList.insertBefore(tweet.render(), this.containerList.childNodes[0])
        })
        .catch((err)=>{
            alert(err)
        })
    }

    validate (nome, mensagem){
        return new Promise((resolve, reject)=>{

          if(!nome)
            reject("Preencha o nome corretamente!")
          
          if(!mensagem)
            reject("Preencha a mensagem corretamente!")
    
          resolve()
    
        })
      }
}