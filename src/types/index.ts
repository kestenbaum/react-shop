export interface IItem {
    id: number;
    title: string;
    img: any;
    body: string;
    cost: string;
    current: number;
}

export interface IBasket {
    id: number;
    title: string;
    img: any;
    cost: string;
    current: number;
}

export interface basketItemProps {
    props?: IBasket
}

export interface itemProps {
    props: IItem
}
