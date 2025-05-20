export interface ItemData{
    id: number;
    category: number;
    title: string;
    price: number;
    images: string[];
}

export interface Category{
    id: number;
    title: string;
}

export interface CategoriesBlock{
    selectedId: number;
    categoriesList: Category[];
}