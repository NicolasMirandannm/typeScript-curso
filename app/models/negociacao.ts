export class Negociacao{

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
        ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): number{
        return this.quantidade * this.valor;
    }


    // o codigo abaixo é igual ao de cima //

    /*constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
        ){}

    get data(): Date{
        return this._data;
    }
    get quantidade(): number{
        return this._quantidade;
    }
    get valor(): number{
        return this._valor;
    }
    get volume(): number{
        return this._quantidade * this._valor;
    } */
}