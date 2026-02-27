/*
O limite de velocidade da rodovia é 60 km/h, porém será considerada uma tolerância de 5 km/h, totalizando 65 km/h.

Se o motorista trafegar a 65 km/h, não haverá multa.

Caso o motorista esteja a 66 km/h, ele receberá 1 ponto, válido até 70 km/h.

Se o motorista estiver a 76 km/h, receberá 2 pontos.

A partir disso, a cada 5 km/h excedidos, será acrescentado 1 ponto a mais na penalidade.
Se a velocidade ultrapassar 90 km/h, o motorista terá o direito de dirigir suspenso.

📊 Tabela de velocidade e penalidades

Acima de 65 km/h → 1 ponto

Acima de 70 km/h → 2 pontos

Acima de 75 km/h → 3 pontos

Acima de 80 km/h → 4 pontos

Acima de 85 km/h → 5 pontos

Acima de 90 km/h → Suspensão da CNH
*/
 function verificador(velocidade){
    const veloPermitida = 60
    if(velocidade <= veloPermitida){
        console.log("velocidade regular")
    }else if(velocidade <= 65){
        console.log("velocidade de risco a segurança")
    }else if(velocidade < 70){
        console.log("velocidade a cima de 65Km/h penalidade: 1 ponto na CNH")
        
    }else if(velocidade < 75){
        console.log("velocidade a cima de 70Km/h penalidade: 2 ponto na CNH")
        
    }else if(velocidade < 80){
        console.log("velocidade a cima de 75Km/h penalidade: 3 ponto na CNH")
       
    }else if(velocidade <= 85){
        console.log("velocidade a cima de 80Km/h penalidade: 4 ponto na CNH")
        }
        else if(velocidade <= 90){
        console.log("velocidade a cima de 85Km/h penalidade: 5 ponto na CNH")
        }
        else{console.log("Sua velocidade foi acima de 90Km/h penalidade: suspensão De dirigir ")
        }
}
 verificador(90)
