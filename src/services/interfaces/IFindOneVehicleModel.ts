export default interface IFindOneVehicleModel {
    id: number,
    model: string,
    vehicleBrandId: number,
    vehicleId: number,
    vehicle: {
        id: number,
        vehicle: string,
    },
    vehicleBrand: {
        id: number,
        brand: string,
    }
}