const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("imagem-upload");

uploadBtn.addEventListener("click", () => {
    inputUpload.click();
})

// Funcionalidade para leitura de arquivos abaixo:
function lerConteudoDoArquivo(arquivo){
    return new Promise((resolve, reject) => {
        const leitor = new FileReader() //permite ler o conteúdo do arquivo;
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name}) 
        }

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        leitor.readAsDataURL(arquivo)
    })
}

//Como lidar com assincronicidade da promessa:
