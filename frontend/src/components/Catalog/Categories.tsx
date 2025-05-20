import type { CategoriesBlock } from "../../types";

export default function Categories(props: { cats: CategoriesBlock, onChangeCat: (newId: number) => void }) {
    return (
        <ul className="catalog-categories nav justify-content-center">
            {props.cats.categoriesList.map(item =>
                <li className="nav-item">
                    <a
                        className={item.id == props.cats.selectedId ? "nav-link active" : "nav-link"}
                        onClick={() => props.onChangeCat(item.id)}
                    >{item.title}</a>
                </li>
            )}
        </ul>
    )
}