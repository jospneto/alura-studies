export function tempoParaSegundos(tempo: string) {
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(":")

    const horasEmSegundos = Number.parseInt(horas) * 3600
    const minEmSegundos = Number.parseInt(minutos) * 60
    return horasEmSegundos + minEmSegundos + Number.parseInt(segundos)
}