export default interface CreateProducer {
    producer: string,
    address: {
        roadName: string,
        number: number,
        neighborhood: string,
        city: string,
        state: string,
        zipCode: string,
    },
    cnpj: string,
}