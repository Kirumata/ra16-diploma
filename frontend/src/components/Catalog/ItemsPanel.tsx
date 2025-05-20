import type { ItemData } from "../../types";
import ItemCard from "./ItemCard";

export default function ItemsPanel(props: { items: ItemData[] }) {
    return (
        <>
            <section className="catalog">
                <div className="row">
                    {props.items.map(item => <ItemCard data={item} />)}
                </div>
            </section>
        </>
    )
}