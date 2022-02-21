import Dimension from "../src/Dimension";
import Item from "../src/Item";

test("Deve criar um item com dimensões e calcular o volume", function () {
	const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10));
	const volume = item.getVolume();
	expect(volume).toBe(0.03);
});

test("Deve criar um item com dimensões e calcular a densidade", function () {
	const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3);
	const density = item.getDensity();
	expect(density).toBe(100);
});
