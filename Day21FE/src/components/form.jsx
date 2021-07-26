import { useState } from "react";
import List from "./list";

const InputForm = () => {
	const [item, setItem] = useState("");
	const [calorie, setCalorie] = useState("");
	const [itemsArr, setItemsArr] = useState([]);

	function addToStore(itm) {
		setItemsArr([...itemsArr, itm]);
	}

	const submitHandler = (e) => {
		e.preventDefault();
		addToStore({ item, calorie });
		setItem("");
		setCalorie("");
	};

	const deleteItemHandler = (i) => {
		setItemsArr(itemsArr.filter((ele, idx) => idx !== i));
	};

	const editItem = (idx, newItem) => {
		setItemsArr(
			itemsArr.map((el, i) => (i === idx ? { ...el, ...newItem } : el))
		);
	};

	return (
		<div>
			<form>
				<input
					className="input-field"
					type="text"
					placeholder="Item Name"
					onChange={(e) => setItem(e.target.value)}
					value={item}
					required></input>
				<input
					className="input-field"
					type="number"
					placeholder="Calorie Amount"
					onChange={(e) => setCalorie(e.target.value)}
					value={calorie}
					required></input>
				<button onClick={(e) => submitHandler(e)}>Add Item</button>
			</form>
			<div>
				{itemsArr.length === 0 ? (
					<h3 className="center">Empty</h3>
				) : (
					itemsArr.map((el, index) => (
						<div className="list-element">
							<List
								item={el.item}
								calorie={el.calorie}
								index={index}
								deleteContent={() => deleteItemHandler(index)}
								updateItem={(e) => editItem(index, { item: e.target.value })}
								updateCalorie={(e) =>
									editItem(index, { calorie: e.target.value })
								}
							/>
						</div>
					))
				)}
			</div>
		</div>
	);
};
export default InputForm;
