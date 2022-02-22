import Dimension from "../../src/domain/entity/Dimension";
import FreightCalculator from "../../src/domain/entity/FreightCalculator";
import Item from "../../src/domain/entity/Item";

test("Deve calcular o frete de um item", function () {
	const item = new Item(1, "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3);
	const freight = FreightCalculator.calculate(item, 2);
	expect(freight).toBe(60);
});
