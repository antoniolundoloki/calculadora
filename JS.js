function valor(num){
    var res = document.getElementById('res').value += num
}

function apagar(){
    document.getElementById('res').value = ''
}

function calculo(){
    const res = document.getElementById('res').value
    try{
        document.getElementById('res').value = eval(res)
    }
    catch (e){
        document.getElementById('res').value = 'Erro'
    }
}