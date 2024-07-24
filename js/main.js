const users = [
	{
		id: 1,
		name: 'Alice',
		eyeColor: 'blue',
		gender: 'female',
		isActive: true,
		email: 'alice@example.com',
		age: 30,
	},
	{
		id: 2,
		name: 'Bob',
		eyeColor: 'brown',
		gender: 'male',
		isActive: false,
		email: 'bob@example.com',
		age: 25,
	},
	{
		id: 3,
		name: 'Charlie',
		eyeColor: 'green',
		gender: 'male',
		isActive: true,
		email: 'charlie@example.com',
		age: 35,
	},
	{
		id: 4,
		name: 'Diana',
		eyeColor: 'blue',
		gender: 'female',
		isActive: false,
		email: 'diana@example.com',
		age: 28,
	},
]

// 1

const names = users.map(user => user.name)

console.log(names)

// 2

const filterByEyeColor = color => {
	return users.filter(user => user.eyeColor === color)
}

const blueEyedUsers = filterByEyeColor('blue')
console.log(blueEyedUsers)

// 3

const getNamesByGender = gender => {
	return users.filter(user => user.gender === gender).map(user => user.name)
}

const femaleNames = getNamesByGender('female')
console.log(femaleNames)

const maleNames = getNamesByGender('male')
console.log(maleNames)

// 4

const NamesNotActive = users
	.filter(user => !user.isActive)
	.map(user => user.name)
console.log(NamesNotActive)

// 5

const findHuman = email => {
	const user = users.find(user => user.email === email)
	return user ? user.name : null
}

console.log(findHuman('diana@example.com'))

// 6

const findPeople = users
	.filter(user => user.age <= 32 && user.age >= 27)
	.map(user => user.name)

console.log(findPeople)
