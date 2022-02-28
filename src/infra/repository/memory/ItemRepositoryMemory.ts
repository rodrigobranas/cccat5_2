import Dimension from "../../../domain/entity/Dimension";
import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
	items: Item[];

	constructor () {
		this.items = [
			new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3),
			new Item(2, "Instrumentos Musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20),
			new Item(3, "Instrumentos Musicais", "Cabo", 30, new Dimension(10, 10, 10), 1)
		];
	}

	getById(idItem: number): Item | undefined {
		return this.items.find(item => item.idItem === idItem);
	}
}