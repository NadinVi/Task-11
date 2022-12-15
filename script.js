let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    }
];


Array.prototype.heroesRender = function (folder) {
    const newArr = this
        .map(function (character) {
            return `
            <tr>
                <td>${character.name}</td>
                <td><img src="images/${folder}/${character.name.toLowerCase().replace(" ", "")}.svg" alt="${character.name}" width="40"></td>
            </tr>
        `
        })
        .join("");

    document.write(`
		<table>
			<thead>
				<tr>
					<th>Image</th>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>${newArr}</tbody>
		</table>
	`)
}

marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');




