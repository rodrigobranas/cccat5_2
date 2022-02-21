import Item from "./Item";

export default class FreightCalculator {

	static calculate (item: Item, quantity: number) {
		return (item.getVolume() * 1000 * (item.getDensity()/100)) * quantity;
	}
}
