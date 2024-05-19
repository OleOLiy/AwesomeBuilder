
const flatArray = [
    {
        id: '0',
        house: '7',
        floor: '3',
        flatNumber: '1',
        rooms: '5',
        square: '82.3',
        price: '1900$',
        totalPrice: '17100$',
        status: 'sold',
    },

    {
        id: '1',
        house: '7',
        floor: '2',
        flatNumber: '2',
        rooms: '2',
        square: '60.7',
        price: '1500$',
        totalPrice: '74844$',
        status: 'booking',
    },

    {
        id: '2',
        house: '7',
        floor: '2',
        flatNumber: '3',
        rooms: '2',
        square: '60.7',
        price: '1800$',
        totalPrice: '86344$',
        status: 'free',
    },

    {
        id: '3',
        house: '7',
        floor: '3',
        flatNumber: '4',
        rooms: '3',
        square: '82.0',
        price: '1940$',
        totalPrice: '84734$',
        status: 'action',
    },

    {
        id: '4',
        house: '7',
        floor: '3',
        flatNumber: '5',
        rooms: '3',
        square: '79.7',
        price: '1950$',
        totalPrice: '86344$',
        status: 'free',
    },

    {
        id: '5',
        house: '7',
        floor: '1',
        flatNumber: '6',
        rooms: '3',
        square: '39.2',
        price: '1360$',
        totalPrice: '33244$',
        status: 'free',
    },

    {
        id: '6',
        house: '7',
        floor: '1',
        flatNumber: '7',
        rooms: '3',
        square: '79.7',
        price: '2000$',
        totalPrice: '94344$',
        status: 'sold',
    },

    {
        id: '7',
        house: '7',
        floor: '1',
        flatNumber: '8',
        rooms: '3',
        square: '79.7',
        price: '1950$',
        totalPrice: '86344$',
        status: 'booking',
    },

    {
        id: '8',
        house: '7',
        floor: '3',
        flatNumber: '9',
        rooms: '3',
        square: '79.3',
        price: '1999$',
        totalPrice: '99444$',
        status: 'sold',
    },
]


const installFloor = () => {
    const flat = document.querySelectorAll('.flat');
    const flatInfo = document.querySelector('.floor-options');

    const removeActiveClass = () => flat.forEach(flat => {
        flat.classList.remove('active');
    })

    const initialValue = [{
        id: '0',
        house: '7',
        floor: '3',
        flatNumber: '1',
        rooms: '5',
        square: '82.3',
        price: '1900$',
        totalPrice: '17100$',
        status: 'sold',
    }]

    const renderInformation = (array) => {
        const flatInformation = array.map(item => {
            return (`
        <div class="floor-option-item">
            <div>Номер будинку:</div>
            <div>${item.house}</div>
        </div>
        <div class="floor-option-item">
            <div>Номер квартири:</div>
            <div>${item.flatNumber}</div>
        </div>
        <div class="floor-option-item">
            <div>Поверх:</div>
            <div>${item.floor}</div>
        </div>
        <div class="floor-option-item">
            <div>Кіл-ть кімнат:</div>
            <div>${item.rooms}</div>
        </div>
        <div class="floor-option-item">
            <div>Площа квартири:</div>
            <div>${item.square}</div>
        </div>
        <div class="floor-option-item">
            <div>Ціна за м²:</div>
            <div>${item.price}</div>
        </div>
        <div class="floor-option-item">
            <div>Ціна за квартиру:</div>
            <div>${item.totalPrice}</div>
        </div>
        <div class="floor-option-item">
            <div>Статус квартири:</div>
            <div>${item.status}</div>
        </div>
    `)
        })
        flatInfo.innerHTML = flatInformation
    }

    renderInformation(initialValue)

    flat.forEach(flat => {
        flat.addEventListener('click', () => {
            removeActiveClass();
            flat.classList.add('active')


            const thisFlat = flat.getAttribute('data-flat-number')

            let flatNumber = flatArray.filter(item => item.flatNumber === thisFlat)
             renderInformation(flatNumber)

        })

            if(flat.classList.contains('booking')) {
                flat.querySelector('.flat-status-cell__tspan').innerHTML = "Бронь"
        
            }else if (flat.classList.contains('action')){
                flat.querySelector('.flat-status-cell__tspan').innerHTML = "Акція"
            } 

              else if (flat.classList.contains('already-sold')){
                flat.querySelector('.flat-status-cell__tspan').innerHTML = "Продано"
              }
        
              else{
                flat.querySelector('.flat-status-cell__tspan').innerHTML = "Вільно"
        }
        
})


    

}


document.querySelector('.floor-item-page') ? installFloor() : null;


const flats = document.querySelectorAll('.flat')




