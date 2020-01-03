class Address {
    private zip: string;
    private addresses: any;

    public constructor(zip: string) {
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
        }
        this.zip = zip;
    }

    public getZip() {
        return this.zip;
    }

    public getAddress(): string {
        let here = this.addresses[this.zip];
        return `${here.prefecture} ${here.city}`;
    }
}

let myaddress = new Address('038-0000');
console.log(myaddress.getAddress());