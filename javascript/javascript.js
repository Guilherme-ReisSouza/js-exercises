
function exercicioUm(){

    let n1 = prompt("Nota de laboratório:");
    let n2 = prompt("Nota da Avaliação Semestral:");
    let n3 = prompt("Nota de Exame final:");

    let m= (n1 * 2 + n2 * 3 + n3 * 5) / 10;

    alert("Nota Final: " + m.toFixed(2));
    console.log("Nota Final: " + m.toFixed(2))
}

function exercicioDois(){

    let num1 = prompt("Nota de laboratório:");
    let num2 = prompt("Nota da Avaliação Semestral:");
    let num3 = prompt("Nota de Exame final:");

    let media = (num1*2 + num2*3 + num3*5) / 10;
    if (media > 8 && media <= 10) {
        alert("Conceito: A");
    }
    else if (media >=7 && media <= 8){
        alert("Conceito: B");
    }
    else if (media >=6 && media <= 7){
        alert("Conceito: C");
    }
    else if (media >=5 && media <= 6){
        alert("Conceito: D");
    }
    else if (media >=0 && media <= 5){
        alert("Conceito: E");
    }
}

function exercicioTres(){

    let I = parseInt(prompt("Insira 1, 2, ou 3:"));

    if (I === 1) {

        let VA = parseFloat(prompt("Qual o valor de A:"));
        let VB = parseFloat(prompt("Qual o valor de B:"));
        let VC = parseFloat(prompt("Qual o valor de C:"));

        if (VA > VB){

            let aux = VA;
            VA = VB;
            VB = aux;
        }
        if ( VB > VC ){

            let aux = VB;
            VB = VC;
            VC = aux;
        }
        if ( VA > VB ){

            let aux = VA;
            VA = VB;
            VB = aux;
        }

        alert("Ordem crescente: " +VA+ " | " +VB+ " | " +VC);
    }
    else if (I === 2){

        let VA = parseFloat(prompt("Qual o valor de A:"));
        let VB = parseFloat(prompt("Qual o valor de B:"));
        let VC = parseFloat(prompt("Qual o valor de C:"));

        if( VB > VA ){

            let aux = VB;
            VB = VA;
            VA = aux;
        }

        if( VC > VA ){

            let aux = VC;
            VC = VA;
            VA = aux;
        }

        if( VC > VB){

            let aux = VC;
            VC = VB;
            VB = aux;
        }

        alert("Ordem decrescente: " +VA+ " | " +VB+ " | " +VC);
    }

    else if (I === 3){

        let VA = parseFloat(prompt("Qual o valor de A:"));
        let VB = parseFloat(prompt("Qual o valor de B:"));
        let VC = parseFloat(prompt("Qual o valor de C:"));

        if( VC > VB){

            let aux = VC;
            VC = VB;
            VB = aux;
        }

        if( VC > VA ){

            let aux = VC;
            VC = VA;
            VA = aux;
        }

        if( VA > VB ){

            let aux = VB;
            VB = VA;
            VA = aux;
        }

        if( VC < VA){

            let aux = VC
            VC = VA
            VA = aux
        }

        alert(VA+ " | " +VB+ " | " +VC);
    }
    else{

        alert("por favor, informe apenas os numeros: 1, 2 ou 3!");
    }


}

function exercicioQuatro(){

    let A = parseFloat(prompt("Digite o valor da sua altura: "))
    let P = parseFloat(prompt("Digite o valor do seu peso: "))

    if (A < 1.20 && P <= 60){

        alert("Seu peso tem classificação A");
    }

    else if ( A < 1.20 && P > 60 && P <= 90){

        alert("Seu peso tem classificação D");
    }

    else if ( A < 1.20 && P > 90){

        alert("Seu peso tem classificação G");

    }

    if (A >= 1.20 && A < 1.70 && P <= 60){

        alert("Seu peso tem classificação B");
    }

    else if ( A >= 1.20 && A < 1.70 && P > 60 && P <= 90){

        alert("Seu peso tem classificação E");
    }

    else if ( A >= 1.20 && A < 1.70 && P > 90){

        alert("Seu peso tem classificação H");

    }

    if (A > 1.70 && P <= 60){

        alert("Seu peso tem classificação C");
    }

    else if ( A > 1.70 && P > 60 && P <= 90){

        alert("Seu peso tem classificação F");
    }

    else if ( A > 1.70 && P > 90){

        alert("Seu peso tem classificação I");

    }

}

function exercicioCinco(){

    let NT = parseInt(prompt("Digite aqui o número de termos a serem mostrados: "))

    let A = 2;
    let B = 7;
    let C = 3;
    let LV = [];

    for (let i = 1; i <= NT; i++){

        if ( i === 1) {

            LV.push( A );
        }

        else if ( i === 2) {

            LV.push( B );
        }

        else if ( i === 3 ){

            LV.push( C ) ;
        }

        else{

            if ( i % 3 === 0){

                C = C * 4;
                LV.push( C );
            }
            else if ( i % 3 === 1){

                A = A * 2;
                LV.push( A );
            }

            else if ( i % 3 === 2){

                B = B * 3;
                LV.push( B );
            }
        }
    }
    alert("Aqui está  a série com os números de termos digitados:  " +LV )
}

function exercicioSeis(){

    let A1N1 = parseFloat(prompt(" Aluno 1 : Digite a nota da primeira atividade: "));
    let A1N2 = parseFloat(prompt(" Aluno 1 : Digite a nota da segunda atividade: "));

    let A2N1 = parseFloat(prompt(" Aluno 2 : Digite a nota da primeira atividade: "));
    let A2N2 = parseFloat(prompt(" Aluno 2 : Digite a nota da segunda atividade: "));

    let A3N1 = parseFloat(prompt(" Aluno 3 : Digite a nota da primeira atividade: "));
    let A3N2 = parseFloat(prompt(" Aluno 3 : Digite a nota da segunda atividade: "));

    let A4N1 = parseFloat(prompt(" Aluno 4 : Digite a nota da primeira atividade: "));
    let A4N2 = parseFloat(prompt(" Aluno 4 : Digite a nota da segunda atividade: "));

    let A5N1 = parseFloat(prompt(" Aluno 5 : Digite a nota da primeira atividade: "));
    let A5N2 = parseFloat(prompt(" Aluno 5 : Digite a nota da segunda atividade: "));

    let A6N1 = parseFloat(prompt(" Aluno 6 : Digite a nota da primeira atividade: "));
    let A6N2 = parseFloat(prompt(" Aluno 6 : Digite a nota da segunda atividade: "));

    let M1 = (A1N1 + A1N2) / 2;
    let M2 = (A2N1 + A2N2) / 2;
    let M3 = (A3N1 + A3N2) / 2;
    let M4 = (A4N1 + A4N2) / 2;
    let M5 = (A5N1 + A5N2) / 2;
    let M6 = (A6N1 + A6N2) / 2;

    let LV = [];

    if ( M1 <= 3 ){

        LV.push( "Média de aluno 1: " +M1+ "\nSituação do Aluno 1: Reprovado \n" +" \n")
    }

    if ( M1 > 3 && M1 <= 7 ){

        LV.push( "Média de aluno 1: " +M1+ "\nSituação do Aluno 1: em Exame \n" +" \n")
    }

    if ( M1 > 7 ){

        LV.push( "Média de aluno 1: " +M1+ "\nSituação do Aluno 1: Aprovado \n" +" \n")
    }

    else if ( M2 <= 3 ){

        LV.push( "Média de aluno 2: " +M2+ "\nSituação do Aluno 2: Reprovado \n" +" \n")
    }

    if ( M2 > 3 && M2 <= 7 ){

        LV.push( "Média de aluno 2: " +M2+ "\nSituação do Aluno 2: em Exame \n" +" \n")
    }

    if ( M2 > 7 ){

        LV.push( "Média de aluno 2: " +M2+ "\nSituação do Aluno 2: Aprovado \n" +" \n")
    }

    else if ( M3 <= 3 ){

        LV.push( "Média de aluno 3: " +M3+ "\nSituação do Aluno 3: Reprovado \n" +" \n")
    }

    if ( M3 > 3 && M3 <= 7 ){

        LV.push( "Média de aluno 3: " +M3+ "\nSituação do Aluno 3: em Exame \n" +" \n")
    }

    if ( M3 > 7 ){

        LV.push( "Média de aluno 3: " +M3+ "\nSituação do Aluno 3: Aprovado \n" +" \n")
    }

    else if ( M4 <= 3 ){

        LV.push( "Média de aluno 4: " +M4+ "\nSituação do Aluno 4: Reprovado \n" +" \n")
    }

    if ( M4 > 3 && M4 <= 7 ){

        LV.push( "Média de aluno 4: " +M4+ "\nSituação do Aluno 4: em Exame \n" +" \n")
    }

    if ( M4 > 7 ){

        LV.push( "Média de aluno 4: " +M4+ "\nSituação do Aluno 4: Aprovado \n" +" \n")
    }

    else if ( M5 <= 3 ){

        LV.push( "Média de aluno 5: " +M5+ "\nSituação do Aluno 5: Reprovado \n" +" \n")
    }

    if ( M5 > 3 && M5 <= 7 ){

        LV.push( "Média de aluno 5: " +M5+ "\nSituação do Aluno 5: em Exame \n"  +" \n")
    }

    if ( M5 > 7 ){

        LV.push( "Média de aluno 5: " +M5+ "\nSituação do Aluno 5: Aprovado \n" +" \n")
    }

    else if ( M6 <= 3 ){

        LV.push( "Média de aluno 6: " +M6+ "\nSituação do Aluno 6: Reprovado \n"  +" \n")
    }

    if ( M6 > 3 && M6 <= 7 ){

        LV.push( "Média de aluno 6: " +M6+ "\nSituação do Aluno 6: em Exame \n" +" \n")
    }

    if ( M6 > 7 ){

        LV.push( "Média de aluno 6: " +M6+ "\nSituação do Aluno 6: Aprovado \n" +" \n")
    }

    alert(LV)
}

function exercicioSete(){

    let E = true;
    let B = 0;
    let A = 0;

    while ( E ){

        B = parseFloat(prompt("Favor,digitar a base em cm: "));
        A = parseFloat(prompt("Favor,digitar a altura em cm: "));

        if ( B > 0 && A > 0){

            E = false;
        }

        else {

            alert("a medidas postas como respostas estão erradas, por favor, insira numeros maiores que 0.");
            E = true;
        }

    }

    let R = ( B * A ) / 2;

    alert(" A área desse triângulo corresponde a :" +R+ "cm.")

}

function exercicioOito(){

    let escape = true;

    let S = 0;
    let SP = 0;
    let qt = 0;
    let qtImpar = 0;
    let media;
    let mediaPar;
    let maior = 0;
    let menor = 0;
    let impPercent;
    let FP0 = true;
    let FP1 = true;

    while(escape){

        let n = prompt("Digite o número (digite SAIR para terminar):");

        if(n === "SAIR" || n === "sair") {

            escape = false;
        }

        else if(isNaN(parseFloat(n))){

        }

        else{

            n = parseFloat(n);
            S += n;
            qt++;

            if ( FP0) {

                maior = n;
                FP0 = false;
            }

            else {

                if (n > maior) {

                    maior = n;
                }
            }


            if ( FP1 ) {
                menor = n;
                FP1 = false;
            }

            else {

                if (n < menor) {

                    menor = n;
                }
            }

            if (n % 2 === 0) {

                SP += n;
            }

            else {

                qtImpar++;
            }
        }
    }

    media = S / qt;
    mediaPar = SP / (qt - qtImpar);
    impPercent = (qtImpar / qt) * 100;

    alert("Soma: " +S.toFixed(2)+ "\n"
        +"Quantia referente aos números digitados: " +qt.toFixed(2)+ "\n"
        +"Média geral obtida: "+  +media.toFixed(2)+ "\n"
        +"Maior número digitado pelo usuario: " +maior.toFixed(2)+ "\n"
        +"Menor número digitado pelo usuario: " +menor.toFixed(2)+ "\n"
        +"Média dos pares formados: " +mediaPar.toFixed(2)+ "\n"
        +impPercent.toFixed(2)+ "% dos números foram ímpares nesta execução.");

}

