export class Item {
    constructor(entity) {
        Object.assign(
            this,
            {
                brand: 'Impressive Brand Title',
                title: 'Super Warm Coat',
                description: '',
                descriptionFull: '',
                price: 1,
                currency: '£',
            },
            entity,
        );
    }
}
