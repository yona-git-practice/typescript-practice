"use strict";
// interface AddressFormat {
//     zip:string;
//     prfecture: string;
//     city: string;
// }
// class TowerAddress implements AddressFormat {
//     public zip: string;
//     public prfecture: string;
//     public city: string;
//     public constructor(_zip: string) {
//         this.zip = _zip;
//     }
// }
class Address {
    constructor(_zip) {
        this._zip = _zip;
        this.addresses =
            {
                '079-1100': {
                    'prefecture': '北海道',
                    'city': '赤平市'
                },
                '038-0000': {
                    'prefecture': '青森県',
                    'city': '青森市'
                },
            };
    }
    get zip() {
        return this._zip.substr(0, 3);
    }
    set zip(value) {
        this._zip = value;
    }
    getAddress() {
        let here = this.addresses[this._zip];
        return `${here.prefecture} ${here.city}`;
    }
}
let myaddress = new Address('038-0000');
myaddress.zip = '079-1100';
console.log(myaddress.zip);
console.log(myaddress.addresses);
console.log(myaddress.getAddress());
// myaddress.addresses = 'error'; // readonlyのため上書きできない
