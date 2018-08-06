const car = (name, model, owner, year, phone, image, hp, extra) => ({name, model, owner, year, phone, image, hp, extra})

const cars = [
    car('Audi','Rs1', 'Maxas', 2000, '+4673005600', 'images/audi.jpg', 250, 'Extra text om audi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies dolor non sem egestas imperdiet. Nullam a massa id sapien tempus eleifend. '),
    car('Toyota','Raw', 'Jonas', 2009, '+4600119357', 'images/raw.jpg', 120, 'Extra text om toyota Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies dolor non sem egestas imperdiet. Nullam a massa id sapien tempus eleifend. '),
    car('Honda','Accord', 'Peter', 2015, '+463456270', 'images/accord.jpg', 200, 'Extra text om Honda Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies dolor non sem egestas imperdiet. Nullam a massa id sapien tempus eleifend. '),
    car('Honda','Bloblo', 'Jonas', 2000, '+463456270', 'images/accord.jpg', 200, 'Extra Honda Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies dolor non sem egestas imperdiet. Nullam a massa id sapien tempus eleifend. '),
    car('VW','Golf', 'Dalius', 2017, '+4673009215', 'images/golf.jpg', 100,  'Extra text om VW Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies dolor non sem egestas imperdiet. Nullam a massa id sapien tempus eleifend. '),
    car('Subaru','Legacy', 'John', 2010, '+4673034521', 'images/legacy.jpg', 170,  'Extra text om Subaru Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies dolor non sem egestas imperdiet. Nullam a massa id sapien tempus eleifend. ')
]

new Vue({
    el: '#app',
    data:{
        cars: cars,
        car: cars[0],
        selectedCarIndex: 0,
        moreInfo: false,
        search: '',
        buyMedelande: true

    },
    methods: {
        selectCar: function(car, index){
            console.log('click', index)
            this.car = car
            this.selectedCarIndex = index
        }
    },
    computed: {
        btnText(){
            return this.moreInfo ? 'Gömma info' : 'Visa info'
        },
        filteredCars() {
            var self = this
            const filtered = this.cars.filter(function(car){
                return car.name.toUpperCase().indexOf(self.search.toUpperCase()) > -1
            })
            return filtered
        }

    }
    
})