const car = (name, model, owner, year, phone, image, hp) => ({name, model, owner, year, phone, image, hp})

const cars = [
    car('Audi','Rs1', 'Maxas', 2000, '+4673005600', 'images/audi.jpg', 250),
    car('Toyota','Raw', 'Jonas', 2009, '+4600119357', 'images/raw.jpg', 120),
    car('Honda','Accord', 'Peter', 2015, '+463456270', 'images/accord.jpg', 200),
    car('VW','Golf', 'Dalius', 2017, '+4673009215', 'images/golf.jpg', 100),
    car('Subaru','Legacy', 'John', 2010, '+4673034521', 'images/legacy.jpg', 170),
]

new Vue({
    el: '#app',
    data:{
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: ''

    },
    methods: {
        selectCar: function(index){
            console.log('click', index)
            this.car = cars[index]
            this.selectedCarIndex = index
        }
    },
    computed: {
        phoneBtnText(){
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            var self = this
            const filtered = this.cars.filter(function(car){
                return car.name.indexOf(self.search) > -1
            })
            return filtered
        }

    }
})