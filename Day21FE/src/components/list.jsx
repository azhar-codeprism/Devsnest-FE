import { useState } from "react";
function List({ item, calorie, deleteContent, updateItem, updateCalorie }) {
	const [editState, setEditState] = useState(false);

	return (
		<section>
			{editState ? (
				<div>
					<input
						className="input-field"
						type="text"
						value={item}
						onChange={updateItem}></input>
					<input
						className="input-field"
						type="number"
						value={calorie}
						onChange={updateCalorie}></input>
					<button onClick={() => setEditState(!editState)}>OK</button>
				</div>
			) : (
				<div>
					<div>
						<p>{item}</p>
						<p>{calorie}</p>
					</div>
					<div className="list-item-buttons">
						<button onClick={deleteContent}>Delete</button>
						<button onClick={() => setEditState(true)}>Edit</button>
					</div>
				</div>
			)}
		</section>
	);
}
export default List;
