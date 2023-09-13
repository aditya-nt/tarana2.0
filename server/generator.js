const faker = require("faker");
const fs = require("fs");
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.firstName(),
      password: faker.name.firstName() + "12fds34" ,
    });
    number--;
  }
  return persons;
};
fs.writeFileSync(
  "server/db.json",
  JSON.stringify({ users: generatePersonsData(20) })
);