import { plantList } from "../../datas/plantList"

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant, index)=>{
                return (
                    <li key={`${plant.name}-${index}`}>
                        <div>
                            <p className={'lmj-plant-category'}>
                                {plant.category}
                            </p>
                            <p className={'lmj-plant-name'}>
                                {plant.name} {plant.isBestSale && <span>🔥</span>}
                            </p>
                        </div>
                    </li>
                )
                
            })}
        </ul>
    )
}

export default ShoppingList