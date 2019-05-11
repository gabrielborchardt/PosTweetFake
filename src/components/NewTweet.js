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
            <div class="field">
                <div class="control">
                    <input type="text" class="input" placeholder="Escreva o seu nome" id="nome">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <textarea class="textarea" placeholder="Escreva o seu tweet" cols="40" rows="5" id="mensagem"></textarea>
                </div>
            </div>
            <div class="field is-pulled-right">
                <div class="control">
                    <button type="submit" class="button is-dark">Enviar</button>
                </div>
            </div>
        </form>
        `
    }

    submit (form) {
        form.preventDefault()

        const nome = document.getElementById("nome")
        const mensagem = document.getElementById("mensagem")
        
        const tweet = new Tweet({name: nome.value, text: mensagem.value})
            
        this.validate(nome.value, mensagem.value)
        .then(()=>{
            this.containerList.insertBefore(tweet.render(), this.containerList.firstChild)

            nome.value = ''
            mensagem.value = ''
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