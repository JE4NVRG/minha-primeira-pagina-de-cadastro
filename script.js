let jeanvalidador = {
    handleSubmit: (event)=>{
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');

        for(let i=0; i<inputs.length; i++){
            let input = inputs[i];
            jeanvalidador.checkInput(input);
            if(check !== true){
                send = false;
                //exibir erro
                console.log('check ')
            }
        }
        send = false;
        if(send){
            form.submit();
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules =rules.split('|');
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rdetails[0]){
                    case 'requerid'
                    if(input.value ==''){
                        return 'Campo nao pode ser vazio'
                    }

                    break;
                    case 'min';

                    break;
                }

            }

        }
        return true;
    }
};

let form = document.querySelector('.jeanvalidador');
form.addEventListener('submit', jeanvalidador.handleSubmit);