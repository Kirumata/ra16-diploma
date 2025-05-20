import type { ItemData } from "../../types";

export default function ItemCard(props: { data: ItemData }) {
    return (
        <>
            <div className="col-4">
                <div className="card catalog-item-card">
                    <img src={props.data.images[0]} className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                    <div className="card-body">
                        <p className="card-text">{props.data.title}</p>
                        <p className="card-text">{props.data.price}</p>
                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                </div>
            </div>
        </>
    )
}