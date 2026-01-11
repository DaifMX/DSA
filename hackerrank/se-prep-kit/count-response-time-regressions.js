// Array Manipulation

function countResponseTimeRegressions(responseTimes) {
    let acum = 0; // Acumulador para ir sumando los tiempos de respuesta
    
    let res = 0; // Acumulador para ir sumando la cantidad de tiempos de respuesta mayores a la media acumulada
    
    for (let i = 0; i < responseTimes.length; i++) {
        if (i && responseTimes[i] > (acum / i)) { res++; }
        acum += responseTimes[i];
    }

    return res;
}