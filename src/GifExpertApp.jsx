import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        // setCategories(categories => [...categories, 'Avatar']);
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExperrApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
