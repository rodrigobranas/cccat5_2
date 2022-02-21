import Dimension from "../src/Dimension";

test("Deve criar as dimensões de um item", function () {
	const dimension = new Dimension(100, 30, 10);
	const volume = dimension.getVolume();
	expect(volume).toBe(0.03);
});
